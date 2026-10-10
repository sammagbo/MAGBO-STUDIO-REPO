// Pure functions behind the commit trace: no network, no disk, no clock.
// build.mjs feeds them the output of
//   git log --name-only --format=%x1e%H%x1f%aI%x1f%an%x1f%s%x1f%b%x1f

export const SCHEMA = 1;

const RECORD = '\x1e';
const FIELD = '\x1f';
const SHA = /^[0-9a-f]{40}$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|[+-]\d{2}:\d{2})$/;
const INVISIBLE_START = /^[﻿​-‍⁠]+/;
const CONVENTIONAL = /^(\w+)(?:\(([^)]*)\))?!?:\s*(.+)$/;
const MERGE_PREFIXES = ['Merge pull request', 'Merge branch', 'Merge remote-tracking'];
const REVERT_PREFIX = 'Revert "';

const matches = (pattern, text) => {
  pattern.lastIndex = 0; // a /g pattern would otherwise remember its last match
  return pattern.test(text);
};

/** Removes the byte-order mark and the zero-width characters that can precede a subject. */
export function cleanSubject(subject) {
  return subject.replace(INVISIBLE_START, '');
}

/**
 * Splits raw git log output into commits, in the order git printed them (newest first).
 * A merge prints no file names, so its list of files is empty.
 */
export function parseLog(text) {
  const commits = [];
  for (const record of text.split(RECORD)) {
    if (record.trim() === '') continue;
    const fields = record.split(FIELD);
    if (fields.length !== 6) throw new Error(`unexpected git log record: ${JSON.stringify(record.slice(0, 120))}`);
    const [sha, date, author, subject, body, names] = fields;
    if (!SHA.test(sha)) throw new Error(`unexpected commit hash: ${JSON.stringify(sha)}`);
    if (!ISO_DATE.test(date)) throw new Error(`unexpected date for ${sha}: ${JSON.stringify(date)}`);
    const files = names.split('\n').filter(line => line.trim() !== '');
    commits.push({ sha, date, author, subject, body, files });
  }
  return commits;
}

/**
 * Reads the Conventional Commits prefix of a subject.
 * Merges, reverts and subjects without a known type keep the whole subject as their message.
 */
export function classify(subject, { types, typeAliases = {} }) {
  const text = cleanSubject(subject);
  if (MERGE_PREFIXES.some(prefix => text.startsWith(prefix))) return { type: 'merge', scope: '', message: text };
  if (text.startsWith(REVERT_PREFIX)) return { type: 'revert', scope: '', message: text };
  const match = CONVENTIONAL.exec(text);
  if (match) {
    const type = Object.hasOwn(typeAliases, match[1]) ? typeAliases[match[1]] : match[1];
    if (types.includes(type)) return { type, scope: match[2] ?? '', message: match[3] };
  }
  return { type: '', scope: '', message: text };
}

/** The names in the Co-authored-by lines of a body. A name that starts with Claude becomes "Claude". */
export function coAuthor(body) {
  const names = [];
  for (const line of body.split('\n')) {
    const match = /^\s*co-authored-by:(.*)$/i.exec(line);
    if (!match) continue;
    let name = match[1].replace(/<[^>]*>/g, '').trim();
    if (name.startsWith('Claude')) name = 'Claude';
    if (name && !names.includes(name)) names.push(name);
  }
  return names.join(', ');
}

/**
 * Turns the parsed commits of one repository into trace rows.
 * - An author matching excludeAuthors is left out.
 * - A commit that only changes the output file is left out: it is a data refresh, not work,
 *   and counting it would let the daily refresh feed on its own commits.
 * - A subject matching hideMessages keeps its commit, but loses its message and scope.
 */
export function applyRules(commits, { project, repo, output, excludeAuthors = [], hideMessages = [], types, typeAliases }) {
  const kept = [];
  const excluded = [];
  let hidden = 0;
  for (const commit of commits) {
    const subject = cleanSubject(commit.subject);
    const brief = { sha: commit.sha, date: commit.date, author: commit.author, subject };
    if (excludeAuthors.some(pattern => matches(pattern, commit.author))) {
      excluded.push({ ...brief, reason: 'author' });
      continue;
    }
    if (commit.files.length > 0 && commit.files.every(file => file === output)) {
      excluded.push({ ...brief, reason: 'output-only' });
      continue;
    }
    const { type, scope, message } = classify(subject, { types, typeAliases });
    const hide = hideMessages.some(pattern => matches(pattern, subject));
    if (hide) hidden += 1;
    kept.push({
      project,
      repo,
      sha: commit.sha,
      date: commit.date,
      files: commit.files.length,
      type,
      scope: hide ? '' : scope,
      message: hide ? '' : message,
      coauthor: coAuthor(commit.body),
    });
  }
  return { kept, excluded, hidden };
}

/**
 * Orders rows by the real instant of each commit; the ISO date carries the author's own offset.
 * The sort is stable: equal instants keep the order they came in.
 * Only after sorting are the dates of projects with showTime false cut to YYYY-MM-DD.
 */
export function sortCommits(rows, projects) {
  return rows
    .map((row, index) => {
      const instant = Date.parse(row.date);
      if (Number.isNaN(instant)) throw new Error(`unreadable date for ${row.sha}: ${JSON.stringify(row.date)}`);
      return { row, index, instant };
    })
    .sort((a, b) => a.instant - b.instant || a.index - b.index)
    .map(({ row }) => (projects[row.project]?.showTime === false ? { ...row, date: row.date.slice(0, 10) } : row));
}

/**
 * The file, byte for byte: one project per line, one commit per line and no generation date,
 * so the same commits always give the same bytes.
 */
export function serialize({ owner, projects, repos, commits }) {
  const list = items => (items.length === 0 ? '[]' : `[\n${items.map(item => `    ${JSON.stringify(item)}`).join(',\n')}\n  ]`);
  const sortedKeys = object => Object.fromEntries(Object.entries(object).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)));
  const projectEntries = projects.map(({ key, name, names }) => (names ? { key, name, names: sortedKeys(names) } : { key, name }));
  const commitRows = commits.map(c => [c.project, c.repo, c.sha, c.date, c.files, c.type, c.scope, c.message, c.coauthor]);
  return [
    '{',
    `  "schema": ${SCHEMA},`,
    `  "owner": ${JSON.stringify(owner)},`,
    `  "projects": ${list(projectEntries)},`,
    `  "repos": ${JSON.stringify(repos)},`,
    `  "commits": ${list(commitRows)}`,
    '}',
    '',
  ].join('\n');
}
