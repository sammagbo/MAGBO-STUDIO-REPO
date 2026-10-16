import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PROFILE } from '@/data/constants';
import { CARDS, FEATURED, OTHERS, PROJECTS_TEXT } from '@/data/projects';
import type { Language } from '@/data/translations';
import { ProjectTrace } from '@/components/trace/ProjectTrace';
import { GO_LIVE, computeLayout, findPauses, goLiveIndex, readTrace } from '@/components/trace/model';
import type { Trace, TraceCommit } from '@/components/trace/model';
import { LOCALES, formatDate, formatNumber } from '@/components/trace/strings';
import './ProjectsSection.css';

// viewBox sizes of the traces; each svg stretches to its box
const FEATURED_BOX = { width: 1000, height: 64 };
const CARD_BOX = { width: 400, height: 56 };

type CommitsByProject = Record<string, TraceCommit[]>;

/* ── the commits of each project, from the same lazy chunk as the hero trace ── */

let pending: Promise<CommitsByProject> | null = null;

function loadCommits(): Promise<CommitsByProject> {
      pending ??= import('@/data/commit-trace.json')
            .then((module) => byProject(readTrace(module.default)))
            .catch((error: unknown) => {
                  pending = null; // a later mount may try again
                  throw error;
            });
      return pending;
}

function byProject(trace: Trace): CommitsByProject {
      const commits: CommitsByProject = {};
      trace.projects.forEach((project, index) => {
            commits[project.key] = trace.commits.filter((commit) => commit.project === index);
      });
      return commits;
}

/* ── dates, read from the author's own fields like the hero trace ── */

const monthFormats = new Map<string, Intl.DateTimeFormat>();

function monthFormat(language: Language, withYear: boolean): Intl.DateTimeFormat {
      const id = `${language}:${withYear}`;
      let format = monthFormats.get(id);
      if (!format) {
            format = new Intl.DateTimeFormat(LOCALES[language], withYear ? { month: 'short', year: 'numeric', timeZone: 'UTC' } : { month: 'short', timeZone: 'UTC' });
            monthFormats.set(id, format);
      }
      return format;
}

/** janv. – juil. 2026 · Jan – Jul 2026 · jan. – jul. de 2026; a single month when both dates share it. */
function monthRange(language: Language, first: string, last: string): string {
      const [y1, m1] = first.slice(0, 7).split('-').map(Number);
      const [y2, m2] = last.slice(0, 7).split('-').map(Number);
      const from = Date.UTC(y1, m1 - 1, 1);
      const to = Date.UTC(y2, m2 - 1, 1);
      if (from === to) return monthFormat(language, true).format(to);
      return `${monthFormat(language, y1 !== y2).format(from)} – ${monthFormat(language, true).format(to)}`;
}

/** Where MAGBO Access Control went live along its trace, in percent of the width. */
function goLiveAt(commits: readonly TraceCommit[]): number | null {
      const index = goLiveIndex(commits);
      if (index < 0) return null;
      const { xs } = computeLayout(findPauses(commits), FEATURED_BOX.width, FEATURED_BOX.height);
      return (xs[index] / FEATURED_BOX.width) * 100;
}

const ArrowIcon = () => (
      <svg viewBox="0 0 12 12" aria-hidden="true">
            <path d="M3 9L9 3M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
);

// The projects section, from the approved canvas design. The texts live in src/data/projects.ts; the counts,
// dates and traces come from the commit trace, so the robot keeps them up to date. The id stays "work" for the links.
export const ProjectsSection = () => {
      const { language } = useLanguage();
      const text = PROJECTS_TEXT[language];
      const [commits, setCommits] = useState<CommitsByProject | null>(null);

      useEffect(() => {
            let active = true;
            loadCommits()
                  .then((data) => {
                        if (active) setCommits(data);
                  })
                  .catch((error: unknown) => console.error('projects: the commit trace could not be loaded', error));
            return () => {
                  active = false;
            };
      }, []);

      const of = (key: string): TraceCommit[] | null => {
            const list = commits?.[key];
            return list && list.length > 0 ? list : null;
      };
      const count = (n: number) => text.commits(n, formatNumber(language, n));
      const period = (list: TraceCommit[]) => monthRange(language, list[0].date, list[list.length - 1].date);

      const magbo = of(FEATURED.trace);
      const at = magbo ? goLiveAt(magbo) : null;
      const marker = at === null ? undefined : ({ '--pj-at': `${at.toFixed(2)}%` } as CSSProperties);

      return (
            <section id="work" className="projects-v2" aria-labelledby="projects-title">
                  <div className="pj-inner">
                        <header className="pj-head">
                              <h2 id="projects-title" className="pj-title">{text.title}</h2>
                              <div className="pj-lead">
                                    {text.lead.map((paragraph) => (
                                          <p key={paragraph}>{paragraph}</p>
                                    ))}
                              </div>
                        </header>

                        <article className="pj-featured" aria-labelledby="pj-featured-name">
                              <div className="pj-top">
                                    <div className="pj-intro">
                                          <p className="pj-status">
                                                <span className="pj-dot" aria-hidden="true" />
                                                {text.status}
                                          </p>
                                          <h3 id="pj-featured-name" className="pj-name">{FEATURED.name}</h3>
                                          <ul className="pj-chips" aria-label={text.stack}>
                                                {FEATURED.stack.map((item) => (
                                                      <li key={item}>{item}</li>
                                                ))}
                                          </ul>
                                          <a className="pj-link" href={FEATURED.url} target="_blank" rel="noopener noreferrer">
                                                {text.code}
                                                <ArrowIcon />
                                          </a>
                                    </div>
                                    <p className="pj-desc">{FEATURED.description[language]}</p>
                              </div>

                              <ul className="pj-problems" aria-label={text.problems}>
                                    {FEATURED.problems.map((problem) => (
                                          <li key={problem.title.en} className="pj-problem">
                                                <h4 className="pj-problem-title">{problem.title[language]}</h4>
                                                <p className="pj-problem-text">{problem.text[language]}</p>
                                          </li>
                                    ))}
                              </ul>

                              <figure className="pj-figure" style={marker}>
                                    <div className="pj-marker-row">
                                          {/* the date stays on one line when the label wraps on a phone */}
                                          {at !== null && (
                                                <span className={at > 55 ? 'pj-marker pj-marker-end' : 'pj-marker'}>
                                                      <span className="pj-dot" aria-hidden="true" />
                                                      {text.goLive(formatDate(language, GO_LIVE).replace(/ /g, ' '))}
                                                </span>
                                          )}
                                    </div>
                                    <div className="pj-trace">
                                          {magbo && <ProjectTrace commits={magbo} width={FEATURED_BOX.width} height={FEATURED_BOX.height} />}
                                          {at !== null && <span className="pj-marker-line" aria-hidden="true" />}
                                    </div>
                                    <figcaption className="pj-caption">
                                          {magbo && (
                                                <>
                                                      <span>{text.first(formatDate(language, magbo[0].date))}</span>
                                                      <span>{text.last(formatDate(language, magbo[magbo.length - 1].date), count(magbo.length))}</span>
                                                </>
                                          )}
                                    </figcaption>
                              </figure>
                        </article>

                        <div className="pj-cards">
                              {CARDS.map((card) => {
                                    const list = of(card.trace);
                                    return (
                                          <article key={card.trace} className="pj-card" aria-labelledby={`pj-${card.trace}-name`}>
                                                <div className="pj-card-trace">
                                                      {list && <ProjectTrace commits={list} width={CARD_BOX.width} height={CARD_BOX.height} />}
                                                </div>
                                                <p className="pj-meta">{list ? `${period(list)} · ${count(list.length)}` : ''}</p>
                                                <div className="pj-card-head">
                                                      <h3 id={`pj-${card.trace}-name`} className="pj-card-name">{card.name}</h3>
                                                      {card.client && <span className="pj-badge">{text.client}</span>}
                                                </div>
                                                <p className="pj-card-desc">{card.description[language]}</p>
                                                <ul className="pj-chips" aria-label={text.stack}>
                                                      {card.stack.map((item) => (
                                                            <li key={item}>{item}</li>
                                                      ))}
                                                </ul>
                                                <a className="pj-link" href={card.url} target="_blank" rel="noopener noreferrer">
                                                      {card.link === 'site' ? text.site : text.code}
                                                      <ArrowIcon />
                                                </a>
                                          </article>
                                    );
                              })}
                        </div>

                        <div className="pj-others">
                              <h3 className="pj-others-title">{text.others}</h3>
                              <ul className="pj-list">
                                    {OTHERS.map((project) => {
                                          const list = of(project.trace);
                                          return (
                                                <li key={project.trace} className="pj-row">
                                                      <a className="pj-row-name" href={project.url} target="_blank" rel="noopener noreferrer">
                                                            {project.name}
                                                            <ArrowIcon />
                                                      </a>
                                                      <span className="pj-row-desc">
                                                            {project.description[language]} · {project.stack}
                                                      </span>
                                                      <span className="pj-row-period">{list ? period(list) : ''}</span>
                                                      <span className="pj-row-count">{list ? count(list.length) : ''}</span>
                                                </li>
                                          );
                                    })}
                              </ul>
                              <a className="pj-link" href={PROFILE.github} target="_blank" rel="noopener noreferrer">
                                    {text.all}
                                    <ArrowIcon />
                              </a>
                        </div>
                  </div>
            </section>
      );
};
