// Words and formats of the commit trace, in French, English and Portuguese.
// Dates and times are read from the ISO string as the author's clock wrote them, never converted.

import { GO_LIVE, readDate } from './model';
import type { Lang, MonthFacts, ProjectSpan, TraceCommit, TraceProject } from './model';

export const LOCALES: Record<Lang, string> = { fr: 'fr-FR', en: 'en-GB', pt: 'pt-BR' };

/* ── numbers, dates and times ── */

const numberFormats = new Map<Lang, Intl.NumberFormat>();

/** 1 029 · 1,029 · 1.029 */
export function formatNumber(lang: Lang, n: number): string {
  let format = numberFormats.get(lang);
  if (!format) {
    format = new Intl.NumberFormat(LOCALES[lang]);
    numberFormats.set(lang, format);
  }
  return format.format(n);
}

type DateShape = 'dayMonthYear' | 'dayMonth' | 'monthYear';
const DATE_OPTIONS: Record<DateShape, Intl.DateTimeFormatOptions> = {
  dayMonthYear: { day: 'numeric', month: 'long', year: 'numeric' },
  dayMonth: { day: 'numeric', month: 'long' },
  monthYear: { month: 'long', year: 'numeric' },
};
const dateFormats = new Map<string, Intl.DateTimeFormat>();

function dateFormat(lang: Lang, shape: DateShape): Intl.DateTimeFormat {
  const id = `${lang}:${shape}`;
  let format = dateFormats.get(id);
  if (!format) {
    // The calendar day is built in UTC from the author's own fields and formatted in UTC: nothing shifts.
    format = new Intl.DateTimeFormat(LOCALES[lang], { ...DATE_OPTIONS[shape], timeZone: 'UTC' });
    dateFormats.set(id, format);
  }
  return format;
}

/** 14 août 2026 · 14 August 2026 · 14 de agosto de 2026; the first of the month is "1er" in French. */
export function formatDate(lang: Lang, iso: string, withYear = true): string {
  const { year, month, day } = readDate(iso);
  return dateFormat(lang, withYear ? 'dayMonthYear' : 'dayMonth')
    .formatToParts(Date.UTC(year, month - 1, day))
    .map(part => (part.type === 'day' && lang === 'fr' && day === 1 ? '1er' : part.value))
    .join('');
}

/** novembre 2024 · November 2024 · novembro de 2024, from a YYYY-MM key or an ISO date. */
export function formatMonth(lang: Lang, keyOrIso: string): string {
  const [year, month] = keyOrIso.slice(0, 7).split('-').map(Number);
  return dateFormat(lang, 'monthYear').format(Date.UTC(year, month - 1, 1));
}

/** Juillet 2026 · July 2026 · Julho de 2026 */
export function monthTitle(lang: Lang, key: string): string {
  const name = formatMonth(lang, key);
  return name.charAt(0).toLocaleUpperCase(LOCALES[lang]) + name.slice(1);
}

/** 12 h 18 · 12:18 · 12h18, or null when the commit only carries its date. */
export function formatTime(lang: Lang, iso: string): string | null {
  const { time } = readDate(iso);
  if (!time) return null;
  const minutes = String(time.minute).padStart(2, '0');
  if (lang === 'fr') return `${time.hour} h ${minutes}`;
  if (lang === 'en') return `${String(time.hour).padStart(2, '0')}:${minutes}`;
  return `${time.hour}h${minutes}`;
}

/** heure de Rio · Rio time · horário do Rio for -03:00; Paris for +01:00 and +02:00; UTC±hh:mm otherwise. */
export function zoneName(lang: Lang, offset: string): string {
  if (offset === '-03:00') return WORDS[lang].rio;
  if (offset === '+01:00' || offset === '+02:00') return WORDS[lang].paris;
  return `UTC${offset}`;
}

/* ── words ── */

interface Words {
  section: string;
  slider: string;
  legend: string;
  firstCommit: string;
  lastCommit: string;
  goLive: string;
  goLiveShort: string;
  replay: (seconds: string) => string;
  pause: string;
  resume: string;
  seeProjects: string;
  viewCommit: string;
  pinHint: string;
  hover: string;
  tap: string;
  rio: string;
  paris: string;
  /** the word before a time of day: à · at · às */
  at: (hour: number) => string;
  commits: (n: number) => string;
  idle: (commits: number, projects: number, from: string, to: string) => string;
  colon: string;
  allOn: (commits: string, project: string) => string;
  busiest: string;
  silence: (months: number) => string;
  notes: Record<string, string>;
  sameDay: (date: string) => string;
  span: (from: string, to: string) => string;
  branchMerge: string;
  noFiles: string;
  files: (n: number) => string;
  coWritten: (name: string) => string;
  types: Record<string, string>;
}

const fr: Words = {
  section: 'Historique de tous les projets publics',
  slider: 'Commits publics, du premier au dernier',
  legend: 'Projets : survolez ou sélectionnez un projet pour le repérer dans le graphique',
  firstCommit: 'premier commit public',
  lastCommit: 'dernier commit public',
  goLive: 'MAGBO Access Control en production',
  goLiveShort: 'mise en production',
  replay: seconds => `Rejouer l'historique (${seconds} s)`,
  pause: 'Pause',
  resume: 'Reprendre',
  seeProjects: 'Voir les projets',
  viewCommit: 'Voir le commit sur GitHub',
  pinHint: 'Cliquez sur le trait pour épingler ce commit.',
  hover: 'Survolez le graphique pour lire chaque commit.',
  tap: 'Touchez le graphique pour lire chaque commit.',
  rio: 'heure de Rio',
  paris: 'heure de Paris',
  at: () => 'à',
  commits: n => `${formatNumber('fr', n)} commit${n > 1 ? 's' : ''}`,
  idle: (c, p, from, to) =>
    `${formatNumber('fr', c)} commit${c > 1 ? 's' : ''} public${c > 1 ? 's' : ''} dans ${formatNumber('fr', p)} projet${p > 1 ? 's' : ''}, de ${from} à ${to}.`,
  colon: ' :',
  allOn: (commits, project) => `${commits}, tous sur ${project}.`,
  busiest: 'Le mois le plus actif.',
  silence: months => `Puis ${formatNumber('fr', months)} mois sans commit public.`,
  notes: {
    '2024-11': 'Premier commit public.',
    '2026-07': 'Le 22, MAGBO Access Control passe en production.',
    '2026-09': "Le 4, le livre d'exploitation de MAGBO Access Control est remis à la direction du lycée.",
  },
  sameDay: date => `le ${date}`,
  span: (from, to) => `du ${from} au ${to}`,
  branchMerge: 'Fusion de branches.',
  noFiles: 'Aucun fichier modifié.',
  files: n => `${formatNumber('fr', n)} fichier${n > 1 ? 's' : ''} modifié${n > 1 ? 's' : ''}.`,
  coWritten: name => `Co-écrit avec ${name}.`,
  types: {
    feat: 'Fonctionnalité', fix: 'Correction', docs: 'Documentation', test: 'Tests', refactor: 'Refactorisation',
    chore: 'Maintenance', audit: 'Audit', handoff: 'Passation', sweep: 'Revue', style: 'Style', perf: 'Performance',
    ci: 'Intégration continue', build: 'Build', revert: 'Annulation', merge: 'Fusion',
  },
};

const en: Words = {
  section: 'History of all public projects',
  slider: 'Public commits, first to last',
  legend: 'Projects: hover or select one to find it in the graph',
  firstCommit: 'first public commit',
  lastCommit: 'latest public commit',
  goLive: 'MAGBO Access Control goes live',
  goLiveShort: 'goes live',
  replay: seconds => `Replay the history (${seconds} s)`,
  pause: 'Pause',
  resume: 'Resume',
  seeProjects: 'See the projects',
  viewCommit: 'View the commit on GitHub',
  pinHint: 'Click the bar to pin this commit.',
  hover: 'Hover over the graph to read each commit.',
  tap: 'Tap the graph to read each commit.',
  rio: 'Rio time',
  paris: 'Paris time',
  at: () => 'at',
  commits: n => `${formatNumber('en', n)} commit${n === 1 ? '' : 's'}`,
  idle: (c, p, from, to) =>
    `${formatNumber('en', c)} public commit${c === 1 ? '' : 's'} across ${formatNumber('en', p)} project${p === 1 ? '' : 's'}, from ${from} to ${to}.`,
  colon: ':',
  allOn: (commits, project) => `${commits}, all on ${project}.`,
  busiest: 'The busiest month.',
  silence: months => `Then ${formatNumber('en', months)} month${months === 1 ? '' : 's'} without a public commit.`,
  notes: {
    '2024-11': 'First public commit.',
    '2026-07': 'On the 22nd, MAGBO Access Control goes into production.',
    '2026-09': "On the 4th, the MAGBO Access Control operations book is handed over to the school's management.",
  },
  sameDay: date => `on ${date}`,
  span: (from, to) => `from ${from} to ${to}`,
  branchMerge: 'Branch merge.',
  noFiles: 'No files changed.',
  files: n => `${formatNumber('en', n)} file${n === 1 ? '' : 's'} changed.`,
  coWritten: name => `Co-written with ${name}.`,
  types: {
    feat: 'Feature', fix: 'Fix', docs: 'Documentation', test: 'Tests', refactor: 'Refactoring',
    chore: 'Maintenance', audit: 'Audit', handoff: 'Handoff', sweep: 'Review', style: 'Style', perf: 'Performance',
    ci: 'CI', build: 'Build', revert: 'Revert', merge: 'Merge',
  },
};

const pt: Words = {
  section: 'Histórico de todos os projetos públicos',
  slider: 'Commits públicos, do primeiro ao último',
  legend: 'Projetos: passe o mouse ou selecione um para encontrá-lo no gráfico',
  firstCommit: 'primeiro commit público',
  lastCommit: 'último commit público',
  goLive: 'MAGBO Access Control em produção',
  goLiveShort: 'em produção',
  replay: seconds => `Rever o histórico (${seconds} s)`,
  pause: 'Pausar',
  resume: 'Continuar',
  seeProjects: 'Ver os projetos',
  viewCommit: 'Ver o commit no GitHub',
  pinHint: 'Clique na barra para fixar este commit.',
  hover: 'Passe o mouse sobre o gráfico para ler cada commit.',
  tap: 'Toque no gráfico para ler cada commit.',
  rio: 'horário do Rio',
  paris: 'horário de Paris',
  at: hour => (hour === 1 ? 'à' : 'às'),
  commits: n => `${formatNumber('pt', n)} commit${n === 1 ? '' : 's'}`,
  idle: (c, p, from, to) =>
    `${formatNumber('pt', c)} commit${c === 1 ? '' : 's'} público${c === 1 ? '' : 's'} em ${formatNumber('pt', p)} projeto${p === 1 ? '' : 's'}, de ${from} a ${to}.`,
  colon: ':',
  allOn: (commits, project) => `${commits}, todos em ${project}.`,
  busiest: 'O mês mais ativo.',
  silence: months => `Depois, ${formatNumber('pt', months)} ${months === 1 ? 'mês' : 'meses'} sem commit público.`,
  notes: {
    '2024-11': 'Primeiro commit público.',
    '2026-07': 'No dia 22, o MAGBO Access Control entra em produção.',
    '2026-09': 'No dia 4, o livro de operação do MAGBO Access Control é entregue à direção da escola.',
  },
  sameDay: date => `em ${date}`,
  span: (from, to) => `de ${from} a ${to}`,
  branchMerge: 'Merge de branches.',
  noFiles: 'Nenhum arquivo alterado.',
  files: n => `${formatNumber('pt', n)} arquivo${n === 1 ? '' : 's'} alterado${n === 1 ? '' : 's'}.`,
  coWritten: name => `Coescrito com ${name}.`,
  types: {
    feat: 'Funcionalidade', fix: 'Correção', docs: 'Documentação', test: 'Testes', refactor: 'Refatoração',
    chore: 'Manutenção', audit: 'Auditoria', handoff: 'Passagem', sweep: 'Revisão', style: 'Estilo', perf: 'Desempenho',
    ci: 'Integração contínua', build: 'Build', revert: 'Reversão', merge: 'Merge',
  },
};

export const WORDS: Record<Lang, Words> = { fr, en, pt };

/* ── sentences ── */

export function projectName(project: TraceProject, lang: Lang): string {
  return project.names?.[lang] ?? project.name;
}

export function typeLabel(lang: Lang, type: string): string {
  return WORDS[lang].types[type] ?? type;
}

/** The caption at rest: totals and span, then the hint for a mouse and the hint for a touch screen. */
export function idleText(lang: Lang, commits: number, projects: number, firstIso: string, lastIso: string) {
  const words = WORDS[lang];
  return { text: words.idle(commits, projects, formatMonth(lang, firstIso), formatMonth(lang, lastIso)), hover: words.hover, tap: words.tap };
}

/** The caption of a month during playback; the title goes in bold before the text. */
export function monthText(lang: Lang, facts: MonthFacts, nameOf: (project: number) => string): { title: string; text: string } {
  const words = WORDS[lang];
  const { list, n } = facts;
  let text =
    list.length === 1
      ? n === 1
        ? `1 commit, ${nameOf(list[0].project)}.`
        : words.allOn(words.commits(n), nameOf(list[0].project))
      : `${words.commits(n)}${words.colon} ${list.map(entry => `${nameOf(entry.project)} ${formatNumber(lang, entry.count)}`).join(', ')}.`;
  if (facts.busiest) text += ` ${words.busiest}`;
  if (words.notes[facts.key]) text += ` ${words.notes[facts.key]}`;
  if (facts.silence !== null) text += ` ${words.silence(facts.silence)}`;
  return { title: monthTitle(lang, facts.key), text };
}

/** The caption of a project, after its name in bold: count and span, the year only once when it is shared. */
export function projectText(lang: Lang, span: ProjectSpan): string {
  const words = WORDS[lang];
  const { first, last } = span;
  const when =
    first.slice(0, 10) === last.slice(0, 10)
      ? words.sameDay(formatDate(lang, first))
      : words.span(formatDate(lang, first, first.slice(0, 4) !== last.slice(0, 4)), formatDate(lang, last));
  return `${words.commits(span.count)}, ${when}.`;
}

/** Type and scope, files changed, co-author. */
export function commitMeta(lang: Lang, commit: Pick<TraceCommit, 'files' | 'type' | 'scope' | 'coauthor'>): string {
  const words = WORDS[lang];
  let text =
    commit.type === 'merge' && commit.files === 0
      ? words.branchMerge
      : (commit.type ? `${typeLabel(lang, commit.type)}${commit.scope ? `, ${commit.scope}` : ''}. ` : '') +
        (commit.files ? words.files(commit.files) : words.noFiles);
  if (commit.coauthor) text += ` ${words.coWritten(commit.coauthor)}`;
  return text;
}

/** For screen readers: project, date, time when there is one, then the message or the meta line. */
export function sliderText(lang: Lang, project: string, commit: TraceCommit): string {
  const { time } = readDate(commit.date);
  const at = time ? ` ${WORDS[lang].at(time.hour)} ${formatTime(lang, commit.date)}` : '';
  return `${project}, ${formatDate(lang, commit.date)}${at}. ${commit.message || commitMeta(lang, commit)}`;
}

/** The two lines under the separator for a commit under the pointer: date · time and zone, or date and project. */
export function separatorText(lang: Lang, project: string, commit: TraceCommit): [string, string] {
  const { time } = readDate(commit.date);
  const date = formatDate(lang, commit.date);
  return time ? [`${date} · ${formatTime(lang, commit.date)}`, zoneName(lang, time.offset)] : [date, project];
}

/** 12 / 1 029 */
export function counterText(lang: Lang, index: number, total: number): string {
  return `${formatNumber(lang, index + 1)} / ${formatNumber(lang, total)}`;
}

export function goLiveDate(lang: Lang): string {
  return formatDate(lang, GO_LIVE);
}
