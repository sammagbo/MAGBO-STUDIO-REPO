// npm run test:data
import assert from 'node:assert/strict';
import { test } from 'node:test';
import config from './config.mjs';
import { applyRules, classify, coAuthor, parseLog, serialize, sortCommits } from './lib.mjs';

const RULES = { types: config.types, typeAliases: config.typeAliases };
const REPOS = config.projects.flatMap(project => project.repos);
const at = key => config.projects.findIndex(project => project.key === key);
const MAGBO = at('magbo');
const TALK = at('talk');
const MEETING = at('meeting');
const SITE = at('site');

// Two commits of this repository, byte for byte as
//   git log --name-only --format=%x1e%H%x1f%aI%x1f%an%x1f%s%x1f%b%x1f
// prints them, newest first: a merge, which lists no files, then a commit with a body and three files.
const LOG =
  '\x1efdb9a8a11bc761c96ede75ab77551a36a1a15277\x1f2026-08-07T20:25:17-03:00\x1fSam Magbo\x1f' +
  "Merge remote-tracking branch 'origin/chore/gitignore-cleanup'\x1f\x1f\n" +
  '\x1ec7f7cd57adbfc915bbd8044f9ef89a7163199aa9\x1f2026-08-07T20:03:05-03:00\x1fSam Magbo\x1f' +
  'chore: ignore Thumbs.db and remove stray tracked files\x1f' +
  'Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\x1f\n' +
  '\n' +
  '.gitignore\n' +
  'src/data/Imagens/Thumbs.db\n' +
  'test_write_unc.txt\n';

const commit = overrides => ({
  sha: '1'.repeat(40),
  date: '2026-08-07T20:03:05-03:00',
  author: 'Sam Magbo',
  subject: 'feat: sample change',
  body: '',
  files: ['src/App.tsx'],
  ...overrides,
});

const context = (project, overrides = {}) => ({
  project,
  repo: REPOS.indexOf(config.projects[project].repos[0]),
  output: config.output,
  excludeAuthors: config.excludeAuthors,
  hideMessages: config.projects[project].hideMessages,
  ...RULES,
  ...overrides,
});

const row = (project, sha, date) => ({ project, repo: 0, sha, date, files: 1, type: 'feat', scope: '', message: 'sample', coauthor: '' });

test('parseLog reads every field, and a merge has no files', () => {
  const [merge, chore, ...rest] = parseLog(LOG);
  assert.equal(rest.length, 0);
  assert.deepEqual(merge, {
    sha: 'fdb9a8a11bc761c96ede75ab77551a36a1a15277',
    date: '2026-08-07T20:25:17-03:00',
    author: 'Sam Magbo',
    subject: "Merge remote-tracking branch 'origin/chore/gitignore-cleanup'",
    body: '',
    files: [],
  });
  assert.equal(chore.subject, 'chore: ignore Thumbs.db and remove stray tracked files');
  assert.equal(chore.body, 'Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n');
  assert.deepEqual(chore.files, ['.gitignore', 'src/data/Imagens/Thumbs.db', 'test_write_unc.txt']);
});

test('parseLog refuses output it does not understand', () => {
  assert.throws(() => parseLog('\x1enot-a-hash\x1f2026-08-07T20:25:17-03:00\x1fSam\x1fx\x1f\x1f\n'), /unexpected commit hash/);
  assert.throws(() => parseLog(`\x1e${'a'.repeat(40)}\x1f2026-08-07\x1fSam\x1fx\x1f\x1f\n`), /unexpected date/);
  assert.throws(() => parseLog(`\x1e${'a'.repeat(40)}\x1f2026-08-07T20:25:17-03:00\x1fSam\x1fx\n`), /unexpected git log record/);
});

test('classify reads type and scope, and the message loses the prefix', () => {
  assert.deepEqual(classify('feat(report): sample chart', RULES), { type: 'feat', scope: 'report', message: 'sample chart' });
  assert.deepEqual(classify('fix: sample timer', RULES), { type: 'fix', scope: '', message: 'sample timer' });
  assert.deepEqual(classify('feat!: sample breaking change', RULES), { type: 'feat', scope: '', message: 'sample breaking change' });
});

test('classify keeps the whole subject when there is no known type', () => {
  assert.deepEqual(classify('Fix sample bug', RULES), { type: '', scope: '', message: 'Fix sample bug' });
  assert.deepEqual(classify('a11y: sample label', RULES), { type: '', scope: '', message: 'a11y: sample label' });
});

test('classify recognises merges and reverts, which keep their whole subject', () => {
  for (const subject of ['Merge pull request #1 from sammagbo/feat/sample', "Merge branch 'main' into feat/sample", "Merge remote-tracking branch 'origin/sample'"]) {
    assert.deepEqual(classify(subject, RULES), { type: 'merge', scope: '', message: subject });
  }
  assert.deepEqual(classify('Revert "feat: sample"', RULES), { type: 'revert', scope: '', message: 'Revert "feat: sample"' });
  assert.equal(classify('Merge origin/main into main: sample', RULES).type, '', 'not one of the three merge forms');
});

test('classify maps doc to docs and tests to test', () => {
  assert.deepEqual(classify('doc: sample guide', RULES), { type: 'docs', scope: '', message: 'sample guide' });
  assert.deepEqual(classify('tests(import): sample scenarios', RULES), { type: 'test', scope: 'import', message: 'sample scenarios' });
});

test('classify ignores a byte-order mark or a zero-width character at the start of the subject', () => {
  const expected = { type: 'feat', scope: 'report', message: 'sample chart' };
  assert.deepEqual(classify('﻿feat(report): sample chart', RULES), expected);
  assert.deepEqual(classify('​⁠feat(report): sample chart', RULES), expected);
  assert.deepEqual(classify("﻿Merge branch 'main'", RULES), { type: 'merge', scope: '', message: "Merge branch 'main'" });
});

test('coAuthor reads Co-authored-by lines in any case, and every Claude becomes "Claude"', () => {
  assert.equal(coAuthor('Sample.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n'), 'Claude');
  assert.equal(coAuthor('co-authored-by: Claude Fable 5 <noreply@anthropic.com>'), 'Claude');
  assert.equal(coAuthor('CO-AUTHORED-BY: Ada Lovelace <ada@example.com>'), 'Ada Lovelace');
  assert.equal(coAuthor('Co-authored-by: Claude Opus 5 (1M context) <noreply@anthropic.com>\nCo-authored-by: Claude Fable 5 <noreply@anthropic.com>'), 'Claude');
  assert.equal(coAuthor('Co-authored-by: Ada Lovelace <ada@example.com>\nCo-authored-by: Claude <noreply@anthropic.com>'), 'Ada Lovelace, Claude');
  assert.equal(coAuthor('A body without trailers.'), '');
  assert.equal(coAuthor(''), '');
});

test('a subject matching hideMessages keeps its commit, without message or scope', () => {
  const { kept, hidden } = applyRules([
    commit({ sha: 'a'.repeat(40), subject: 'fix(camera): sample', body: 'Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>' }),
    commit({ sha: 'b'.repeat(40), subject: 'docs: sample DeepinView note' }),
    commit({ sha: 'c'.repeat(40), subject: 'chore: sample licence file' }),
    commit({ sha: 'd'.repeat(40), subject: 'fix(portaria): sample gate' }),
  ], context(MAGBO));
  assert.equal(hidden, 3);
  assert.deepEqual(kept.map(r => [r.sha[0], r.type, r.scope, r.message]), [
    ['a', 'fix', '', ''], // matched on the scope: the rule reads the original subject, not the message
    ['b', 'docs', '', ''],
    ['c', 'chore', '', ''],
    ['d', 'fix', 'portaria', 'sample gate'],
  ]);
  assert.equal(kept[0].coauthor, 'Claude');
});

test('the MeetingManager rule hides its three words, and nothing else', () => {
  const subjects = ['fix: sample jw link', 'feat: sample congregation field', 'docs: sample ministry section', 'fix: sample ministère', 'chore: sample sync-jw script', 'fix: sample timer'];
  const { kept, hidden } = applyRules(subjects.map((subject, i) => commit({ sha: String(i + 1).repeat(40), subject })), context(MEETING));
  assert.equal(hidden, 5);
  assert.deepEqual(kept.map(r => r.message), ['', '', '', '', '', 'sample timer']);
});

test('showTime false drops the time of day after sorting, so the order still follows the real instant', () => {
  const sorted = sortCommits([
    row(MAGBO, 'a'.repeat(40), '2026-07-22T23:30:00-03:00'), // 02:30 UTC on the 23rd
    row(TALK, 'b'.repeat(40), '2026-07-23T01:00:00+00:00'), // 01:00 UTC on the 23rd
    row(MAGBO, 'c'.repeat(40), '2026-07-21T09:00:00-03:00'),
  ], config.projects);
  assert.deepEqual(sorted.map(r => [r.sha[0], r.date]), [
    ['c', '2026-07-21'],
    ['b', '2026-07-23T01:00:00+00:00'],
    ['a', '2026-07-22'],
  ]);
});

test('sortCommits keeps the incoming order of commits made at the same instant', () => {
  const rows = [
    row(TALK, '1'.repeat(40), '2026-06-09T23:36:35-03:00'),
    row(MAGBO, '2'.repeat(40), '2026-06-10T02:36:35+00:00'), // the same instant, written in UTC
    row(TALK, '3'.repeat(40), '2026-06-09T23:36:35-03:00'),
  ];
  assert.deepEqual(sortCommits(rows, config.projects).map(r => r.sha[0]), ['1', '2', '3']);
});

test('commits by an excluded author are left out and reported', () => {
  const { kept, excluded } = applyRules([
    commit({ sha: '1'.repeat(40), author: 'copilot-swe-agent[bot]', subject: 'Initial plan' }),
    commit({ sha: '2'.repeat(40) }),
  ], context(TALK));
  assert.deepEqual(kept.map(r => r.sha[0]), ['2']);
  assert.deepEqual(excluded.map(e => [e.sha[0], e.reason, e.author]), [['1', 'author', 'copilot-swe-agent[bot]']]);
});

test('a commit that only changes the output file is left out; one that also changes code is kept', () => {
  const { kept, excluded } = applyRules([
    commit({ sha: '1'.repeat(40), subject: 'chore(data): sample refresh', files: [config.output] }),
    commit({ sha: '2'.repeat(40), subject: 'feat(data): sample generator', files: [config.output, 'scripts/commit-trace/build.mjs'] }),
    commit({ sha: '3'.repeat(40), subject: 'Merge pull request #1 from sammagbo/sample', files: [] }),
  ], context(SITE));
  assert.deepEqual(kept.map(r => r.sha[0]), ['2', '3']);
  assert.deepEqual(excluded.map(e => [e.sha[0], e.reason]), [['1', 'output-only']]);
});

test('serialize is stable: same data, same bytes, one commit per line, no generation date', () => {
  const rows = applyRules(parseLog(LOG).reverse(), context(SITE)).kept;
  const trace = { owner: config.owner, projects: config.projects, repos: REPOS, commits: sortCommits(rows, config.projects) };
  const text = serialize(trace);

  assert.equal(serialize(structuredClone(trace)), text);
  const reordered = {
    commits: trace.commits.map(c => Object.fromEntries(Object.entries(c).reverse())),
    repos: trace.repos,
    projects: trace.projects.map(p => Object.fromEntries(Object.entries({ ...p, ...(p.names && { names: { pt: p.names.pt, en: p.names.en } }) }).reverse())),
    owner: trace.owner,
  };
  assert.equal(serialize(reordered), text, 'key order in the input does not matter');

  const data = JSON.parse(text);
  assert.deepEqual(Object.keys(data), ['schema', 'owner', 'projects', 'repos', 'commits']);
  assert.equal(data.schema, 1);
  assert.deepEqual(data.projects[at('profil')], { key: 'profil', name: 'Profil GitHub', names: { en: 'GitHub profile', pt: 'Perfil do GitHub' } });
  assert.deepEqual(data.projects[MAGBO], { key: 'magbo', name: 'MAGBO Access Control' });
  assert.deepEqual(data.repos, REPOS);
  assert.deepEqual(data.commits, [
    [SITE, REPOS.indexOf('MAGBO-STUDIO-REPO'), 'c7f7cd57adbfc915bbd8044f9ef89a7163199aa9', '2026-08-07T20:03:05-03:00', 3, 'chore', '', 'ignore Thumbs.db and remove stray tracked files', 'Claude'],
    [SITE, REPOS.indexOf('MAGBO-STUDIO-REPO'), 'fdb9a8a11bc761c96ede75ab77551a36a1a15277', '2026-08-07T20:25:17-03:00', 0, 'merge', '', "Merge remote-tracking branch 'origin/chore/gitignore-cleanup'", ''],
  ]);
  assert.equal(text.split('\n').filter(line => line.startsWith('    [')).length, data.commits.length);
  assert.ok(text.endsWith('}\n'));
});

test('config names every project key and every repository once', () => {
  const keys = config.projects.map(project => project.key);
  assert.equal(new Set(keys).size, keys.length);
  assert.equal(new Set(REPOS).size, REPOS.length);
});
