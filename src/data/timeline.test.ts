import { describe, expect, it } from 'vitest';
import { EDUCATION, EXPERIENCE } from '@/data/constants';
import { GO_LIVE } from '@/components/trace/model';
import { END, FIRST_YEAR, LAST_YEAR, LIVE_ON, ROWS, TIMELINE_TEXT, activeAt, at, atDay, endOf, readPeriod, startOf, yearAt } from '@/data/timeline';

const languages = ['fr', 'pt', 'en'] as const;
const middleOf = (year: number, month: number) => at(year, month) + (at(year, month + 1) - at(year, month)) / 2;

describe('the periods of the Parcours', () => {
  it('reads months, whole years and a single year', () => {
    expect(readPeriod('09/2020 — 09/2026')).toEqual({ from: { year: 2020, month: 9 }, to: { year: 2026, month: 9 } });
    expect(readPeriod('2018 — 2025')).toEqual({ from: { year: 2018, month: 1 }, to: { year: 2025, month: 12 } });
    expect(readPeriod('2016')).toEqual({ from: { year: 2016, month: 1 }, to: { year: 2016, month: 12 } });
    expect(() => readPeriod('since 2020')).toThrow();
  });
});

describe('the timeline', () => {
  it('has every job, then every degree, in the order of the list', () => {
    expect(ROWS.map(row => row.id)).toEqual([...EXPERIENCE.map(job => job.id), ...EDUCATION.map(degree => degree.id)]);
    expect(ROWS.filter(row => row.point).map(row => row.id)).toEqual(['iserj']);
  });

  it('runs from 2012 to 2026, and ends with the last month of the Lycée Molière', () => {
    expect([FIRST_YEAR, LAST_YEAR]).toEqual([2012, 2026]);
    expect(END).toBeCloseTo(at(2026, 10), 10);
    expect(at(FIRST_YEAR, 1)).toBe(0);
    for (const row of ROWS) if (!row.point) expect(endOf(row)).toBeGreaterThan(startOf(row));
  });

  it('knows what was going on in a given month', () => {
    expect(activeAt(middleOf(2023, 6)).map(row => row.id)).toEqual(['aefe', 'sedeics', 'noceci', 'uva']);
    expect(activeAt(middleOf(2017, 9))).toEqual([]);
    expect(activeAt(middleOf(2016, 7)).map(row => row.id)).toEqual(['maori', 'iserj']);
    expect(yearAt(middleOf(2023, 6))).toBe(2023);
    expect(yearAt(END)).toBe(2026);
  });

  it('puts the go-live of MAGBO Access Control on the bar of the Lycée Molière', () => {
    const lycee = ROWS.find(row => row.id === LIVE_ON)!;
    expect(atDay(GO_LIVE)).toBeGreaterThan(startOf(lycee));
    expect(atDay(GO_LIVE)).toBeLessThan(endOf(lycee));
  });

  it('counts five jobs and two degrees, as its last caption says', () => {
    expect([EXPERIENCE.length, EDUCATION.length]).toEqual([5, 2]);
  });

  it('has its words in French, Portuguese and English', () => {
    for (const language of languages) {
      const text = TIMELINE_TEXT[language];
      for (const value of [text.end, ...Object.values(text.degrees)]) expect(value, language).toMatch(/\S/);
    }
  });
});
