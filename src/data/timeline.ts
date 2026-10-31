import type { Language } from '@/data/translations';
import type { DegreeId, JobId } from '@/data/parcours';
import { EDUCATION, EXPERIENCE } from '@/data/constants';

// The timeline above the Parcours (src/components/ParcoursTimeline.tsx), approved on the prototype on 30/10/2026: the
// jobs and the degrees of src/data/constants.ts on one axis of years. The dates are the periods of the list below it;
// this file reads them and adds the few words the timeline needs.

export interface Month {
      year: number;
      /** 1 to 12 */
      month: number;
}

/** "09/2020 — 09/2026": September 2020 to September 2026; "2018 — 2025": whole years; "2016": that one year. */
export function readPeriod(period: string): { from: Month; to: Month } {
      const ends = period.split('—').map((part) => part.trim());
      const read = (part: string, last: boolean): Month => {
            const match = /^(?:(\d{2})\/)?(\d{4})$/.exec(part);
            if (!match) throw new Error(`timeline: unreadable period ${JSON.stringify(period)}`);
            return { year: Number(match[2]), month: match[1] ? Number(match[1]) : last ? 12 : 1 };
      };
      return { from: read(ends[0], false), to: read(ends[ends.length - 1], true) };
}

export type RowId = JobId | DegreeId;

export interface TimelineRow {
      id: RowId;
      kind: 'job' | 'degree';
      /** the short name on the timeline; the list below gives the full one */
      org: string;
      from: Month;
      /** included: the bar runs to the end of this month */
      to: Month;
      /** a degree known only by its year: a dot in the middle of that year, not a bar */
      point: boolean;
}

const SHORT: Record<RowId, string> = {
      aefe: 'Lycée Molière',
      sedeics: 'SEDEICS',
      noceci: 'Noceci-Viagens',
      cl20: 'C.L. 2.0',
      maori: 'MAORI do Brasil',
      uva: 'Universidade Veiga de Almeida',
      iserj: 'ISERJ',
};

/** The jobs, then the degrees, in the order of the list below the timeline. */
export const ROWS: TimelineRow[] = [
      ...EXPERIENCE.map((job): TimelineRow => ({ id: job.id, kind: 'job', org: SHORT[job.id], ...readPeriod(job.period), point: false })),
      ...EDUCATION.map((degree): TimelineRow => ({ id: degree.id, kind: 'degree', org: SHORT[degree.id], ...readPeriod(degree.period), point: !degree.period.includes('—') })),
];

/** MAGBO Access Control went live at the Lycée Molière: its red mark sits on that bar. */
export const LIVE_ON: JobId = 'aefe';

export const FIRST_YEAR = Math.min(...ROWS.map((row) => row.from.year));
export const LAST_YEAR = Math.max(...ROWS.map((row) => row.to.year));
/** months on the axis, from January of the first year to December of the last */
const SPAN = (LAST_YEAR + 1 - FIRST_YEAR) * 12;

/** Where the start of a month sits on the axis: 0 is January of the first year, 1 the end of the last year. */
export const at = (year: number, month: number) => ((year - FIRST_YEAR) * 12 + (month - 1)) / SPAN;
/** The same for a day, from an ISO date (YYYY-MM-DD). */
export function atDay(iso: string): number {
      const [year, month, day] = iso.slice(0, 10).split('-').map(Number);
      return ((year - FIRST_YEAR) * 12 + (month - 1) + (day - 1) / 31) / SPAN;
}
export const startOf = (row: TimelineRow) => at(row.from.year, row.from.month);
export const endOf = (row: TimelineRow) => at(row.to.year, row.to.month + 1);
export const pointOf = (row: TimelineRow) => at(row.from.year, 7);

/** The end of the playback: the end of the last month the timeline knows. */
export const END = Math.max(...ROWS.map((row) => (row.point ? pointOf(row) : endOf(row))));

/** The year under the playhead. */
export const yearAt = (p: number) => Math.min(LAST_YEAR, FIRST_YEAR + Math.floor((p * SPAN) / 12));

/** What the playhead crosses: the bars it is over, and a degree within half a year of its dot. */
export function activeAt(p: number): TimelineRow[] {
      return ROWS.filter((row) => (row.point ? Math.abs(p - pointOf(row)) <= 6 / SPAN : p >= startOf(row) && p < endOf(row)));
}

/* ── words ── */

interface TimelineText {
      /** the short name of each degree on the timeline, where the list below gives the full one */
      degrees: Record<DegreeId, string>;
      /** the caption once the whole span is lit; it counts the jobs and the degrees above (timeline.test.ts) */
      end: string;
}

export const TIMELINE_TEXT: Record<Language, TimelineText> = {
      en: {
            degrees: { uva: "Bachelor's degree", iserj: "Technical diploma" },
            end: "Five roles and two degrees, in Rio de Janeiro.",
      },
      pt: {
            degrees: { uva: "Bacharelado", iserj: "Diploma técnico" },
            end: "Cinco funções e dois diplomas, no Rio de Janeiro.",
      },
      fr: {
            degrees: { uva: "Diplôme d'informatique", iserj: "Diplôme technique" },
            end: "Cinq postes et deux diplômes, à Rio de Janeiro.",
      },
};
