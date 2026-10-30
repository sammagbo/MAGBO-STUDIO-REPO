import { describe, expect, it } from 'vitest';
import traceJson from '@/data/commit-trace.json';
import {
  GO_LIVE,
  MAX_PLAYBACK,
  buildModel,
  computeLayout,
  computePlayback,
  findPauses,
  goLiveIndex,
  idxAtX,
  instantOf,
  monthFacts,
  readDate,
  readTrace,
  xAtPos,
} from './model';
import type { TraceCommit } from './model';
import {
  commitMeta,
  formatDate,
  formatNumber,
  formatTime,
  idleText,
  monthText,
  projectText,
  separatorText,
  sliderText,
  zoneName,
} from './strings';

const real = readTrace(traceJson);
const NAMES = real.projects.map(project => project.name);
const nameOf = (project: number) => NAMES[project];
const FLORESTA = NAMES.indexOf('Floresta (Unity)');
const THE_TALK = NAMES.indexOf('The Talk');

// Sample commits, for the tests only.
let serial = 0;
const commit = (date: string, project = 0, extra: Partial<TraceCommit> = {}): TraceCommit => ({
  project,
  repo: 0,
  sha: (++serial).toString(16).padStart(40, '0'),
  date,
  files: 1,
  type: 'feat',
  scope: '',
  message: 'sample message',
  coauthor: '',
  ...extra,
});

describe('dates are read on the author clock', () => {
  it('writes the first of the month as 1er in French', () => {
    expect(formatDate('fr', '2026-08-01')).toBe('1er août 2026');
  });

  it('formats the date and the time in each language', () => {
    const iso = '2026-08-14T12:18:05-03:00';
    expect(formatDate('en', iso)).toBe('14 August 2026');
    expect(formatTime('en', iso)).toBe('12:18');
    expect(formatDate('pt', iso)).toBe('14 de agosto de 2026');
    expect(formatTime('pt', iso)).toBe('12h18');
    expect(formatDate('fr', iso)).toBe('14 août 2026');
    expect(formatTime('fr', iso)).toBe('12 h 18');
  });

  it('never moves a late commit to the next day, whatever the visitor zone', () => {
    expect(formatDate('en', '2026-08-14T23:30:00-03:00')).toBe('14 August 2026');
    expect(formatTime('en', '2026-08-14T23:30:00-03:00')).toBe('23:30');
  });

  it('gives no time for a date without one', () => {
    expect(readDate('2026-08-01').time).toBeNull();
    expect(formatTime('fr', '2026-08-01')).toBeNull();
    expect(formatTime('en', '2026-08-01')).toBeNull();
    expect(formatTime('pt', '2026-08-01')).toBeNull();
  });
});

describe('time zones', () => {
  it('names Rio and Paris in the three languages', () => {
    expect([zoneName('fr', '-03:00'), zoneName('en', '-03:00'), zoneName('pt', '-03:00')]).toEqual(['heure de Rio', 'Rio time', 'horário do Rio']);
    expect([zoneName('fr', '+02:00'), zoneName('en', '+02:00'), zoneName('pt', '+02:00')]).toEqual(['heure de Paris', 'Paris time', 'horário de Paris']);
    expect(zoneName('en', '+01:00')).toBe('Paris time');
  });

  it('falls back to UTC±hh:mm', () => {
    expect([zoneName('fr', '+05:30'), zoneName('en', '+05:30'), zoneName('pt', '+05:30')]).toEqual(['UTC+05:30', 'UTC+05:30', 'UTC+05:30']);
  });
});

describe('layout on the index axis', () => {
  const commits = [
    commit('2024-11-22T01:23:23-03:00'),
    commit('2025-12-03T16:25:10-03:00'), // 376 days later: a pause
    commit('2025-12-04T10:00:00-03:00'),
    commit('2025-12-20T10:00:00-03:00'),
    commit('2026-01-05T10:00:00-03:00'),
    commit('2026-02-10T10:00:00-03:00'),
  ];
  const pauses = findPauses(commits);
  const layout = computeLayout(pauses, 600, 120);

  it('turns a silence of more than 60 days into a gap', () => {
    expect(pauses).toEqual([true, false, false, false, false, false]);
    expect(layout.gap).toBeGreaterThan(0);
    expect(layout.xs[1] - layout.xs[0]).toBeCloseTo(layout.step + layout.gap);
    expect(layout.xs[2] - layout.xs[1]).toBeCloseTo(layout.step);
  });

  it('keeps positions increasing and the axis inside the width', () => {
    for (let i = 1; i < layout.xs.length; i++) expect(layout.xs[i]).toBeGreaterThan(layout.xs[i - 1]);
    expect(xAtPos(layout, 0)).toBe(0);
    expect(xAtPos(layout, layout.xs.length)).toBe(600);
    expect(layout.xs[layout.xs.length - 1] + layout.step).toBeCloseTo(600);
  });

  it('finds the commit under the centre of every bar', () => {
    layout.xs.forEach((x, i) => expect(idxAtX(layout, x + layout.bar / 2)).toBe(i));
  });

  it('answers the nearer neighbour inside the gap', () => {
    const middle = (layout.xs[0] + layout.step + layout.xs[1]) / 2;
    expect(idxAtX(layout, middle - 1)).toBe(0);
    expect(idxAtX(layout, middle + 1)).toBe(1);
  });
});

describe('playback months', () => {
  const model = buildModel(real);
  const { months, total } = model.playback;

  it('covers every commit once, from 0 to N', () => {
    expect(months[0].from).toBe(0);
    expect(months[months.length - 1].to).toBe(model.n);
    expect(months.reduce((sum, month) => sum + month.n, 0)).toBe(model.n);
    months.forEach((month, k) => {
      if (k > 0) expect(month.from).toBe(months[k - 1].to);
    });
  });

  it('lasts at most 40 seconds', () => {
    expect(total).toBeLessThanOrEqual(MAX_PLAYBACK + 1e-9);
    const busy = Array.from({ length: 30 }, (_, k) => commit(`20${20 + Math.floor(k / 12)}-${String((k % 12) + 1).padStart(2, '0')}-10T10:00:00-03:00`));
    expect(computePlayback(busy, 1).total).toBeCloseTo(MAX_PLAYBACK);
  });
});

describe('production marker', () => {
  it('stands before the first commit dated on or after the go-live day', () => {
    expect(goLiveIndex([commit('2026-07-21T23:59:00-03:00'), commit('2026-07-22'), commit('2026-07-22T08:00:00-03:00')])).toBe(1);
    expect(goLiveIndex([commit('2026-07-01T10:00:00-03:00')])).toBe(-1);
  });

  it('matches the real data', () => {
    const i = goLiveIndex(real.commits);
    expect(i).toBeGreaterThan(0);
    expect(real.commits[i].date.slice(0, 10) >= GO_LIVE).toBe(true);
    expect(real.commits[i - 1].date.slice(0, 10) < GO_LIVE).toBe(true);
  });
});

describe('commit meta line', () => {
  it('says branch merge for a merge without files', () => {
    const merge = { type: 'merge', scope: '', files: 0, coauthor: '' };
    expect([commitMeta('fr', merge), commitMeta('en', merge), commitMeta('pt', merge)]).toEqual(['Fusion de branches.', 'Branch merge.', 'Merge de branches.']);
    expect(commitMeta('fr', { ...merge, files: 2 })).toBe('Fusion. 2 fichiers modifiés.');
  });

  it('puts files in the plural only when there are several', () => {
    const one = { type: 'fix', scope: 'api', files: 1, coauthor: '' };
    const two = { ...one, files: 2 };
    expect([commitMeta('fr', one), commitMeta('fr', two)]).toEqual(['Correction, api. 1 fichier modifié.', 'Correction, api. 2 fichiers modifiés.']);
    expect([commitMeta('en', one), commitMeta('en', two)]).toEqual(['Fix, api. 1 file changed.', 'Fix, api. 2 files changed.']);
    expect([commitMeta('pt', one), commitMeta('pt', two)]).toEqual(['Correção, api. 1 arquivo alterado.', 'Correção, api. 2 arquivos alterados.']);
    expect(commitMeta('en', { type: '', scope: '', files: 0, coauthor: '' })).toBe('No files changed.');
  });

  it('names the co-author', () => {
    const written = { type: 'feat', scope: '', files: 3, coauthor: 'Claude' };
    expect(commitMeta('fr', written)).toBe('Fonctionnalité. 3 fichiers modifiés. Co-écrit avec Claude.');
    expect(commitMeta('en', written)).toBe('Feature. 3 files changed. Co-written with Claude.');
    expect(commitMeta('pt', written)).toBe('Funcionalidade. 3 arquivos alterados. Coescrito com Claude.');
  });
});

describe('month captions', () => {
  it('says "all on" for a month with one project', () => {
    const facts = { key: '2025-12', n: 54, list: [{ project: THE_TALK, count: 54 }], busiest: false, silence: null };
    expect(monthText('fr', facts, nameOf)).toEqual({ title: 'Décembre 2025', text: '54 commits, tous sur The Talk.' });
    expect(monthText('en', facts, nameOf)).toEqual({ title: 'December 2025', text: '54 commits, all on The Talk.' });
    expect(monthText('pt', facts, nameOf)).toEqual({ title: 'Dezembro de 2025', text: '54 commits, todos em The Talk.' });
  });

  it('lists the projects of a busy month, and marks the busiest one', () => {
    const facts = {
      key: '2026-03',
      n: 140,
      list: [{ project: 0, count: 64 }, { project: THE_TALK, count: 49 }, { project: 2, count: 27 }],
      busiest: true,
      silence: null,
    };
    expect(monthText('fr', facts, nameOf).text).toBe('140 commits : MAGBO Access Control 64, The Talk 49, MeetingManager 27. Le mois le plus actif.');
    expect(monthText('en', facts, nameOf).text).toBe('140 commits: MAGBO Access Control 64, The Talk 49, MeetingManager 27. The busiest month.');
    expect(monthText('pt', facts, nameOf).text).toBe('140 commits: MAGBO Access Control 64, The Talk 49, MeetingManager 27. O mês mais ativo.');
  });

  it('counts a pause of 376 days as 12 months of silence', () => {
    const commits = [
      commit('2024-11-22T01:23:23-03:00', FLORESTA),
      commit('2025-12-03T16:25:10-03:00', THE_TALK),
      commit('2025-12-04T15:38:51-03:00', THE_TALK), // so that December, not November, is the busiest month
    ];
    const pauses = findPauses(commits);
    const facts = monthFacts(commits, pauses, computePlayback(commits, NAMES.length), 0);
    expect(Math.floor((instantOf(commits[1].date) - instantOf(commits[0].date)) / 86_400_000)).toBe(376);
    expect(facts.silence).toBe(12);
    expect(monthText('fr', facts, nameOf).text).toBe('1 commit, Floresta (Unity). Premier commit public. Puis 12 mois sans commit public.');
    expect(monthText('en', facts, nameOf).text).toBe('1 commit, Floresta (Unity). First public commit. Then 12 months without a public commit.');
    expect(monthText('pt', facts, nameOf).text).toBe('1 commit, Floresta (Unity). Primeiro commit público. Depois, 12 meses sem commit público.');
  });
});

describe('project captions', () => {
  it('gives the span, with the year once when it is shared, and a single day as such', () => {
    const talk = { count: 191, first: '2025-12-03T16:25:10-03:00', last: '2026-08-09T00:26:25-03:00' };
    expect(projectText('fr', talk)).toBe('191 commits, du 3 décembre 2025 au 9 août 2026.');
    expect(projectText('en', talk)).toBe('191 commits, from 3 December 2025 to 9 August 2026.');
    expect(projectText('pt', talk)).toBe('191 commits, de 3 de dezembro de 2025 a 9 de agosto de 2026.');
    expect(projectText('fr', { count: 55, first: '2026-02-17T23:18:34-03:00', last: '2026-02-22T15:22:20-03:00' })).toBe('55 commits, du 17 février au 22 février 2026.');
    const day = { count: 3, first: '2026-04-30T03:09:53-03:00', last: '2026-04-30T03:14:28-03:00' };
    expect([projectText('fr', day), projectText('en', day), projectText('pt', day)]).toEqual([
      '3 commits, le 30 avril 2026.',
      '3 commits, on 30 April 2026.',
      '3 commits, em 30 de abril de 2026.',
    ]);
  });
});

describe('caption at rest, separator and slider', () => {
  it('sums up the history in each language', () => {
    expect(formatNumber('fr', 1029)).toMatch(/^1\s029$/);
    expect(idleText('fr', 1029, 12, '2024-11-22T01:23:23-03:00', '2026-09-04')).toMatchObject({
      title: `${formatNumber('fr', 1029)} commits publics`,
      text: 'dans 12 projets, de novembre 2024 à septembre 2026.',
    });
    expect(idleText('en', 1029, 12, '2024-11-22T01:23:23-03:00', '2026-09-04')).toMatchObject({
      title: '1,029 public commits',
      text: 'across 12 projects, from November 2024 to September 2026.',
    });
    expect(idleText('pt', 1029, 12, '2024-11-22T01:23:23-03:00', '2026-09-04')).toMatchObject({
      title: '1.029 commits públicos',
      text: 'em 12 projetos, de novembro de 2024 a setembro de 2026.',
    });
    expect(idleText('fr', 1, 1, '2026-09-04', '2026-09-04').title).toBe('1 commit public');
    expect(idleText('en', 1, 1, '2026-09-04', '2026-09-04').title).toBe('1 public commit');
    expect(idleText('fr', 1, 1, '2026-09-04', '2026-09-04').hover).toBe('Survolez le graphique pour lire chaque commit.');
    expect(idleText('pt', 1, 1, '2026-09-04', '2026-09-04').tap).toBe('Toque no gráfico para ler cada commit.');
  });

  it('reads date and time with the zone, or the date and the project when there is no time', () => {
    expect(separatorText('fr', 'The Talk', commit('2026-08-14T12:18:05-03:00', THE_TALK))).toEqual(['14 août 2026 · 12 h 18', 'heure de Rio']);
    expect(separatorText('en', 'MAGBO Access Control', commit('2026-08-14', 0))).toEqual(['14 August 2026', 'MAGBO Access Control']);
  });

  it('gives screen readers the time only when there is one', () => {
    expect(sliderText('fr', 'The Talk', commit('2026-08-14T12:18:05-03:00', THE_TALK))).toBe('The Talk, 14 août 2026 à 12 h 18. sample message');
    expect(sliderText('en', 'MAGBO Access Control', commit('2026-08-14', 0, { message: '', files: 2 }))).toBe('MAGBO Access Control, 14 August 2026. Feature. 2 files changed.');
  });
});

describe('the real data in src/data/commit-trace.json', () => {
  const MAGBO = real.projects.findIndex(project => project.key === 'magbo');

  it('has commits', () => {
    expect(real.commits.length).toBeGreaterThan(0);
  });

  it('is in chronological order', () => {
    let lastTimed = -Infinity;
    real.commits.forEach((entry, i) => {
      if (readDate(entry.date).time) {
        const instant = instantOf(entry.date);
        expect(instant).toBeGreaterThanOrEqual(lastTimed);
        lastTimed = instant;
      }
      // a date without time only knows its day: it may sit up to a day off its neighbours' UTC instants
      if (i > 0) expect(instantOf(entry.date.slice(0, 10)) - instantOf(real.commits[i - 1].date.slice(0, 10))).toBeGreaterThanOrEqual(-86_400_000);
    });
  });

  it('shows MAGBO Access Control without any time of day', () => {
    const magbo = real.commits.filter(entry => entry.project === MAGBO);
    expect(magbo.length).toBeGreaterThan(0);
    expect(magbo.every(entry => /^\d{4}-\d{2}-\d{2}$/.test(entry.date))).toBe(true);
  });
});
