// Regenerates src/data/commit-trace.json from the public repositories listed in config.mjs.
//   npm run data:commits
// Each repository is cloned without file contents into a temporary folder and read with git log;
// the folder is deleted at the end. If any repository cannot be read, nothing is written.

import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import config from './config.mjs';
import { applyRules, parseLog, serialize, sortCommits } from './lib.mjs';

const ROOT = fileURLToPath(new URL('../../', import.meta.url));
const LOG_FORMAT = '--format=%x1e%H%x1f%P%x1f%aI%x1f%an%x1f%s%x1f%b%x1f';
const TIMEOUT_MS = 2 * 60 * 1000;

// git must fail instead of asking for a password: no terminal prompt, and no askpass helper either.
const GIT_ENV = { ...process.env, GIT_TERMINAL_PROMPT: '0' };
delete GIT_ENV.GIT_ASKPASS;
delete GIT_ENV.SSH_ASKPASS;

function git(args, cwd) {
  return execFileSync('git', args, {
    cwd,
    env: GIT_ENV,
    encoding: 'utf8',
    timeout: TIMEOUT_MS,
    maxBuffer: 1024 * 1024 * 1024,
    stdio: ['ignore', 'pipe', 'pipe'],
  });
}

function reason(error) {
  if (error.code === 'ETIMEDOUT') return `git did not finish within ${TIMEOUT_MS / 1000} s`;
  if (error.code === 'ENOENT') return 'git is not installed or not on the PATH';
  const stderr = String(error.stderr ?? '').trim();
  // GitHub answers a private, renamed or deleted repository by asking for credentials.
  if (stderr.includes('could not read Username')) return `${stderr}\nGitHub asked for credentials: the repository is private, renamed or does not exist.`;
  return stderr || error.message;
}

function summarize({ commits, excluded, hidden, repos, json, changed }) {
  const width = Math.max(...config.projects.map(project => project.name.length));
  const lines = [
    `commit-trace: ${commits.length} commits from ${repos.length} repositories`,
    '',
    `  ${'project'.padEnd(width)}  commits  first       last        hidden messages`,
  ];
  config.projects.forEach((project, index) => {
    const own = commits.filter(commit => commit.project === index);
    const first = own.length ? own[0].date.slice(0, 10) : '-';
    const last = own.length ? own.at(-1).date.slice(0, 10) : '-';
    lines.push(`  ${project.name.padEnd(width)}  ${String(own.length).padStart(7)}  ${first.padEnd(10)}  ${last.padEnd(10)}  ${String(hidden[index]).padStart(6)}`);
  });
  lines.push('', `excluded commits: ${excluded.length}`);
  for (const commit of excluded) {
    const why = commit.reason === 'author' ? `excluded author "${commit.author}"` : 'only changes the output file';
    lines.push(`  ${commit.repo} ${commit.sha.slice(0, 7)} ${commit.date.slice(0, 10)}  ${why}  "${commit.subject}"`);
  }
  const sha256 = createHash('sha256').update(json).digest('hex');
  lines.push('', `wrote ${config.output}: ${Buffer.byteLength(json)} bytes, sha256 ${sha256}, ${changed ? 'changed' : 'identical to the previous file'}`);
  return lines.join('\n');
}

function main() {
  const repos = config.projects.flatMap(project => project.repos);
  const duplicate = repos.find((name, index) => repos.indexOf(name) !== index);
  if (duplicate) throw new Error(`config.mjs lists the repository ${duplicate} twice`);

  const work = mkdtempSync(join(tmpdir(), 'commit-trace-'));
  try {
    const rows = [];
    const excluded = [];
    const hidden = config.projects.map(() => 0);
    for (const [project, settings] of config.projects.entries()) {
      for (const name of settings.repos) {
        const url = `https://github.com/${config.owner}/${name}.git`;
        const dir = join(work, name);
        let log;
        try {
          git(['clone', '--quiet', '--filter=blob:none', '--no-checkout', url, dir], work);
          log = git(['log', '--name-only', LOG_FORMAT], dir);
        } catch (error) {
          console.error(`commit-trace: cannot read ${url}\n  ${reason(error).replace(/\n/g, '\n  ')}\nNothing was written.`);
          return 1;
        }
        const result = applyRules(parseLog(log).reverse(), { // git log lists the newest commit first
          project,
          repo: repos.indexOf(name),
          output: config.output,
          excludeAuthors: config.excludeAuthors,
          hideMessages: settings.hideMessages,
          types: config.types,
          typeAliases: config.typeAliases,
        });
        rows.push(...result.kept);
        excluded.push(...result.excluded.map(commit => ({ ...commit, repo: name })));
        hidden[project] += result.hidden;
      }
    }

    const commits = sortCommits(rows, config.projects);
    const json = serialize({ owner: config.owner, projects: config.projects, repos, commits });
    const target = join(ROOT, config.output);
    const previous = existsSync(target) ? readFileSync(target, 'utf8') : null;
    const summary = summarize({ commits, excluded, hidden, repos, json, changed: previous !== json });
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, json);
    console.log(summary);
    return 0;
  } finally {
    rmSync(work, { recursive: true, force: true });
  }
}

try {
  process.exitCode = main();
} catch (error) {
  console.error(`commit-trace: ${error.message}\nNothing was written.`);
  process.exitCode = 1;
}
