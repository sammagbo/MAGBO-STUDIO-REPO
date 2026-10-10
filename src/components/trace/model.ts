// Pure model of the public commit trace (src/data/commit-trace.json): dates, the index axis and its
// pauses, bar heights, the months of the playback and the production marker.
// No DOM, no React and no words: strings.ts turns these facts into French, English and Portuguese.

export type Lang = 'fr' | 'en' | 'pt';

/** MAGBO Access Control goes into production; the red marker sits before the first commit of that day. */
export const GO_LIVE = '2026-07-22';
/** A silence longer than this many days is drawn as a visible break. */
export const PAUSE_DAYS = 60;
/** The playback lasts at most this many seconds: beyond it, every month is shortened in proportion. */
export const MAX_PLAYBACK = 40;

const DAY_MS = 86_400_000;
const MONTH_DAYS = 30.44;

export interface TraceProject {
  key: string;
  name: string;
  names?: Partial<Record<Lang, string>>;
}

export interface TraceCommit {
  project: number;
  repo: number;
  sha: string;
  /** The author's ISO date: with time and offset, or only YYYY-MM-DD for projects shown without time. */
  date: string;
  files: number;
  type: string;
  scope: string;
  message: string;
  coauthor: string;
}

export interface Trace {
  owner: string;
  projects: TraceProject[];
  repos: string[];
  commits: TraceCommit[];
}

/** The file written by scripts/commit-trace (schema 1): one array per commit. */
export interface RawTrace {
  schema: number;
  owner: string;
  projects: TraceProject[];
  repos: string[];
  commits: (string | number)[][];
}

export function readTrace(raw: RawTrace): Trace {
  if (raw.schema !== 1) throw new Error(`commit-trace: unsupported schema ${raw.schema}`);
  const commits = raw.commits.map((row, index): TraceCommit => {
    const [project, repo, sha, date, files, type, scope, message, coauthor] = row;
    if (
      row.length !== 9 ||
      typeof project !== 'number' || typeof repo !== 'number' || typeof files !== 'number' ||
      typeof sha !== 'string' || typeof date !== 'string' || typeof type !== 'string' ||
      typeof scope !== 'string' || typeof message !== 'string' || typeof coauthor !== 'string' ||
      !(project >= 0 && project < raw.projects.length) || !(repo >= 0 && repo < raw.repos.length)
    ) {
      throw new Error(`commit-trace: malformed commit #${index}`);
    }
    return { project, repo, sha, date, files, type, scope, message, coauthor };
  });
  return { owner: raw.owner, projects: raw.projects, repos: raw.repos, commits };
}

/* ── dates ── */

export interface WallClock {
  hour: number;
  minute: number;
  /** ±hh:mm; a Z is read as +00:00 */
  offset: string;
}

export interface DateParts {
  year: number;
  month: number;
  day: number;
  time: WallClock | null;
}

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2})(?::\d{2}(?:\.\d+)?)?(Z|[+-]\d{2}:\d{2}))?$/;

/** Reads the date as the author's clock wrote it; it is never converted to the visitor's time zone. */
export function readDate(iso: string): DateParts {
  const match = ISO_DATE.exec(iso);
  if (!match) throw new Error(`commit-trace: unreadable date ${JSON.stringify(iso)}`);
  const [, year, month, day, hour, minute, offset] = match;
  const time = hour === undefined ? null : { hour: Number(hour), minute: Number(minute), offset: offset === 'Z' ? '+00:00' : offset };
  return { year: Number(year), month: Number(month), day: Number(day), time };
}

/** Milliseconds since 1970 for ordering and gaps. A date without time counts as its UTC midnight. */
export function instantOf(iso: string): number {
  return Date.parse(iso);
}

export function gapInDays(from: string, to: string): number {
  return (instantOf(to) - instantOf(from)) / DAY_MS;
}

/* ── pauses and bar heights ── */

/** pauses[i] is true when more than PAUSE_DAYS separate commit i from the next one. */
export function findPauses(commits: readonly TraceCommit[], days = PAUSE_DAYS): boolean[] {
  return commits.map((commit, i) => i < commits.length - 1 && gapInDays(commit.date, commits[i + 1].date) > days);
}

/** log1p of the 99.5th percentile of files changed: a couple of vendor-folder commits would flatten everything else. */
export function fileCap(commits: readonly TraceCommit[]): number {
  const files = commits.map(commit => commit.files).sort((a, b) => a - b);
  return Math.log1p(Math.max(1, files.length ? files[Math.floor(0.995 * (files.length - 1))] : 1));
}

export interface BarShape {
  y: number;
  height: number;
  /** 0 to 1: log1p(files) against the cap; the lit bar's opacity is 0.5 + 0.5 × weight */
  weight: number;
}

/** A bar mirrored around the middle line, from a minimum half-height up to the full height. */
export function barShape(files: number, cap: number, height: number): BarShape {
  const mid = height / 2;
  const minHalf = Math.max(2.5, height * 0.03);
  const weight = Math.min(1, Math.log1p(files) / cap);
  const half = minHalf + (mid - minHalf) * weight;
  return { y: mid - half, height: half * 2, weight };
}

/* ── index axis: one slot per commit, plus a gap for every long silence ── */

export interface Layout {
  width: number;
  height: number;
  step: number;
  bar: number;
  gap: number;
  /** left edge of each commit's bar */
  xs: number[];
  pauses: readonly boolean[];
}

export function computeLayout(pauses: readonly boolean[], width: number, height: number): Layout {
  const n = pauses.length;
  const breaks = pauses.filter(Boolean).length;
  const gap = breaks ? Math.max(10, Math.min(22, width * 0.016)) : 0;
  const step = n ? (width - breaks * gap) / n : 0;
  const bar = Math.max(0.6, step * 0.72);
  const xs: number[] = [];
  for (let i = 0, g = 0; i < n; i++) {
    xs.push(i * step + g * gap);
    if (pauses[i]) g++;
  }
  return { width, height, step, bar, gap, xs, pauses };
}

/** x of a fractional position on the index axis (position i is the left edge of commit i). */
export function xAtPos(layout: Layout, pos: number): number {
  const { xs, width } = layout;
  if (pos <= 0) return 0;
  if (pos >= xs.length) return width;
  const i = Math.floor(pos);
  return xs[i] + (pos - i) * ((i + 1 < xs.length ? xs[i + 1] : width) - xs[i]);
}

/** The commit under x; inside a pause gap, the nearer of the two neighbours. */
export function idxAtX(layout: Layout, x: number): number {
  const { xs, step, pauses } = layout;
  let lo = 0;
  let hi = xs.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (xs[mid] <= x) lo = mid;
    else hi = mid - 1;
  }
  if (lo < xs.length - 1 && pauses[lo] && x - (xs[lo] + step) > xs[lo + 1] - x) lo++;
  return lo;
}

/* ── playback: one segment per month, longer for busier months ── */

export interface Month {
  /** YYYY-MM */
  key: string;
  from: number;
  /** exclusive */
  to: number;
  n: number;
  counts: number[];
  t0: number;
  t1: number;
  duration: number;
}

export interface Playback {
  months: Month[];
  /** seconds */
  total: number;
  /** index of the month with the most commits (the first one on a tie) */
  busiest: number;
}

export function computePlayback(commits: readonly TraceCommit[], projectCount: number, max = MAX_PLAYBACK): Playback {
  const months: Month[] = [];
  commits.forEach((commit, i) => {
    const key = commit.date.slice(0, 7);
    let month = months[months.length - 1];
    if (!month || month.key !== key) {
      month = { key, from: i, to: i, n: 0, counts: new Array<number>(projectCount).fill(0), t0: 0, t1: 0, duration: 0 };
      months.push(month);
    }
    month.counts[commit.project] += 1;
  });
  months.forEach((month, k) => {
    month.to = k < months.length - 1 ? months[k + 1].from : commits.length;
    month.n = month.to - month.from;
    month.duration = 2.2 + 0.008 * month.n;
  });
  const raw = months.reduce((sum, month) => sum + month.duration, 0);
  const fit = raw > 0 ? Math.min(1, max / raw) : 1;
  let clock = 0;
  for (const month of months) {
    month.duration *= fit;
    month.t0 = clock;
    clock += month.duration;
    month.t1 = clock;
  }
  const busiest = months.reduce((best, month, k) => (month.n > months[best].n ? k : best), 0);
  return { months, total: clock, busiest };
}

export function monthAtTime(playback: Playback, time: number): number {
  const k = playback.months.findIndex(month => time < month.t1);
  return k === -1 ? playback.months.length - 1 : k;
}

/** Fractional position on the index axis reached after `time` seconds of playback. */
export function posAtTime(playback: Playback, time: number): number {
  const month = playback.months[monthAtTime(playback, time)];
  const f = Math.min(1, Math.max(0, (time - month.t0) / month.duration));
  return month.from + f * (month.to - month.from);
}

/** The playback time at which commit i is reached. */
export function timeAtIndex(playback: Playback, i: number): number {
  const month = playback.months.find(m => i >= m.from && i < m.to) ?? playback.months[playback.months.length - 1];
  return month.t0 + ((i - month.from) / (month.to - month.from)) * month.duration;
}

/* ── facts for the captions ── */

/** Index of the first commit dated on or after `day`, or -1. */
export function goLiveIndex(commits: readonly TraceCommit[], day = GO_LIVE): number {
  return commits.findIndex(commit => commit.date.slice(0, 10) >= day);
}

export interface MonthFacts {
  key: string;
  n: number;
  /** projects of the month, the busiest first */
  list: { project: number; count: number }[];
  busiest: boolean;
  /** months of silence after this month, when a long pause follows it */
  silence: number | null;
}

export function monthsOfSilence(days: number): number {
  return Math.round(days / MONTH_DAYS);
}

export function monthFacts(commits: readonly TraceCommit[], pauses: readonly boolean[], playback: Playback, k: number): MonthFacts {
  const month = playback.months[k];
  const list = month.counts
    .map((count, project) => ({ project, count }))
    .filter(entry => entry.count > 0)
    .sort((a, b) => b.count - a.count);
  const last = month.to - 1;
  const silence = pauses[last] ? monthsOfSilence(gapInDays(commits[last].date, commits[last + 1].date)) : null;
  return { key: month.key, n: month.n, list, busiest: k === playback.busiest, silence };
}

export interface ProjectSpan {
  count: number;
  first: string;
  last: string;
}

export function projectSpan(commits: readonly TraceCommit[], project: number): ProjectSpan | null {
  let count = 0;
  let first = '';
  let last = '';
  for (const commit of commits) {
    if (commit.project !== project) continue;
    if (count === 0) first = commit.date;
    last = commit.date;
    count += 1;
  }
  return count ? { count, first, last } : null;
}

/* ── everything the component needs, computed once per file ── */

export interface Model {
  trace: Trace;
  n: number;
  pauses: boolean[];
  cap: number;
  playback: Playback;
  goLive: number;
  /** commits per project */
  counts: number[];
  /** projects with commits, the busiest first */
  legend: number[];
}

export function buildModel(trace: Trace): Model {
  const { commits, projects } = trace;
  const counts = projects.map(() => 0);
  for (const commit of commits) counts[commit.project] += 1;
  const legend = projects.map((_, p) => p).filter(p => counts[p] > 0).sort((a, b) => counts[b] - counts[a]);
  return {
    trace,
    n: commits.length,
    pauses: findPauses(commits),
    cap: fileCap(commits),
    playback: computePlayback(commits, projects.length),
    goLive: goLiveIndex(commits),
    counts,
    legend,
  };
}
