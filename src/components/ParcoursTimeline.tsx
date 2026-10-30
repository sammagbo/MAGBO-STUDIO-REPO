import { Fragment, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '@/context/LanguageContext';
import { PARCOURS } from '@/data/parcours';
import type { DegreeId, JobId } from '@/data/parcours';
import type { Language } from '@/data/translations';
import { END, FIRST_YEAR, LAST_YEAR, LIVE_ON, ROWS, TIMELINE_TEXT, activeAt, atDay, endOf, pointOf, startOf, yearAt } from '@/data/timeline';
import type { RowId, TimelineRow } from '@/data/timeline';
import { GO_LIVE } from '@/components/trace/model';
import { WORDS } from '@/components/trace/strings';
import './ParcoursTimeline.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const LIVE = atDay(GO_LIVE);
const YEARS = Array.from({ length: LAST_YEAR - FIRST_YEAR + 1 }, (_, i) => FIRST_YEAR + i);
const FIRST_DEGREE = ROWS.find((row) => row.kind === 'degree')?.id;
const pct = (value: number) => `${(value * 100).toFixed(3)}%`;
const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true;

/* ── words: the label of a row, the name of what was going on, and the caption ── */

const labelOf = (row: TimelineRow, language: Language) =>
      row.kind === 'job' ? PARCOURS[language].jobs[row.id as JobId].role : TIMELINE_TEXT[language].degrees[row.id as DegreeId];

// a degree known by its year is named with its diploma, since it has no bar to show its span
const nameOf = (row: TimelineRow, language: Language) => {
      if (!row.point) return row.org;
      const label = labelOf(row, language);
      return `${row.org}, ${label.charAt(0).toLowerCase()}${label.slice(1)}`;
};

interface Caption {
      key: string;
      end: boolean;
      year: number;
      ids: RowId[];
}

const captionAt = (p: number): Caption => {
      if (p >= END - 1e-6) return { key: 'end', end: true, year: LAST_YEAR, ids: [] };
      const ids = activeAt(p).map((row) => row.id);
      const year = yearAt(p);
      return { key: `${year}:${ids.join(',')}`, end: false, year, ids };
};

const lineOf = (caption: Caption, language: Language) => {
      if (caption.end) return TIMELINE_TEXT[language].end;
      const names = caption.ids.map((id) => nameOf(ROWS.find((row) => row.id === id)!, language));
      return names.length ? names.join(' · ') : '—';
};

/** Every line the caption can show, from the first month to the end. */
const linesOf = (language: Language) => {
      const lines = new Set<string>();
      for (let p = 0; p < END; p += 1 / 720) lines.add(lineOf(captionAt(p), language));
      lines.add(TIMELINE_TEXT[language].end);
      return [...lines];
};

/**
 * The timeline above the Parcours, from the approved prototype (30/10/2026): one bar per job and per degree on an axis
 * of years. While the visitor scrolls, a playhead crosses it and lights the bars it passes; the caption gives the year
 * and what was going on. The bars follow one CSS variable, --pt-p, so the scroll never re-renders them; only the
 * caption changes through React. Visitors who prefer less motion see the whole span at once.
 */
export const ParcoursTimeline = () => {
      const { language } = useLanguage();
      const chartRef = useRef<HTMLDivElement>(null);
      const [caption, setCaption] = useState<Caption>(() => captionAt(reducedMotion() ? END : 0));
      const lines = useMemo(() => linesOf(language), [language]);

      useGSAP(
            () => {
                  const chart = chartRef.current;
                  if (!chart) return;
                  const show = (p: number) => {
                        chart.style.setProperty('--pt-p', p.toFixed(5));
                        const next = captionAt(p);
                        setCaption((previous) => (previous.key === next.key ? previous : next));
                  };
                  const mm = gsap.matchMedia();
                  mm.add('(prefers-reduced-motion: no-preference)', () => {
                        const playhead = { p: 0 };
                        show(0);
                        // the playhead runs while the chart rises from 85 % of the screen to a quarter: it ends fully in view
                        gsap.to(playhead, {
                              p: END,
                              ease: 'none',
                              scrollTrigger: { trigger: chart, start: 'top 85%', end: 'top 25%', scrub: 0.5 },
                              onUpdate: () => show(playhead.p),
                        });
                        return () => show(END);
                  });
                  mm.add('(prefers-reduced-motion: reduce)', () => show(END));
            },
            { scope: chartRef },
      );

      const range = `${FIRST_YEAR} — ${LAST_YEAR}`;
      const end = TIMELINE_TEXT[language].end;

      return (
            <figure className="pt" aria-label={`${range}. ${end}`}>
                  {/* every caption is laid out hidden behind the visible one: the box keeps the tallest one's height, so the
                      bars never move while the caption changes */}
                  <div className="pt-cap" aria-hidden="true">
                        <p className="pt-line">
                              <b>{caption.end ? range : caption.year}</b>
                              <span>{lineOf(caption, language)}</span>
                        </p>
                        <div className="pt-sizer">
                              {lines.map((line) => (
                                    <p key={line} className="pt-line">
                                          <b>{range}</b>
                                          <span>{line}</span>
                                    </p>
                              ))}
                        </div>
                  </div>
                  <div ref={chartRef} className="pt-chart" aria-hidden="true" style={{ '--pt-end': END.toFixed(5) } as CSSProperties}>
                        {ROWS.map((row) => (
                              <Fragment key={row.id}>
                                    {row.id === FIRST_DEGREE && <p className="pt-group">{PARCOURS[language].education}</p>}
                                    <div className={row.kind === 'degree' ? 'pt-row pt-row--degree' : 'pt-row'}>
                                          <div className="pt-who">
                                                <b>{labelOf(row, language)}</b>
                                                <span>{row.org}</span>
                                          </div>
                                          <div className="pt-track">
                                                {row.point ? (
                                                      <span className="pt-dot" style={{ left: pct(pointOf(row)), '--pt-at': pointOf(row).toFixed(5) } as CSSProperties}>
                                                            <i />
                                                      </span>
                                                ) : (
                                                      <span
                                                            className="pt-bar"
                                                            style={
                                                                  {
                                                                        left: pct(startOf(row)),
                                                                        width: pct(endOf(row) - startOf(row)),
                                                                        '--pt-from': startOf(row).toFixed(5),
                                                                        '--pt-len': (endOf(row) - startOf(row)).toFixed(5),
                                                                  } as CSSProperties
                                                            }
                                                      >
                                                            <i />
                                                      </span>
                                                )}
                                                {row.id === LIVE_ON && (
                                                      <span className="pt-live" style={{ left: pct(LIVE), '--pt-at': LIVE.toFixed(5) } as CSSProperties}>
                                                            <span>{WORDS[language].goLive}</span>
                                                      </span>
                                                )}
                                          </div>
                                    </div>
                              </Fragment>
                        ))}
                        <div className="pt-axis">
                              <span />
                              <div className="pt-ticks">
                                    {YEARS.map((year, i) => (
                                          <span key={year} className={i % 2 ? 'pt-odd' : undefined} style={{ left: pct((i + 0.5) / YEARS.length) }}>
                                                {year}
                                          </span>
                                    ))}
                              </div>
                        </div>
                        {/* the playhead, over the bars only */}
                        <div className="pt-overlay">
                              <span />
                              <div className="pt-lane">
                                    <span className="pt-head" />
                              </div>
                        </div>
                  </div>
            </figure>
      );
};
