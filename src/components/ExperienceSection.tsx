import { useLanguage } from '@/context/LanguageContext';
import { useEducation, useExperience } from '@/hooks/useData';
import { PARCOURS } from '@/data/parcours';
import { ParcoursTimeline } from '@/components/ParcoursTimeline';
import './ExperienceSection.css';

// The experience section, from the approved canvas design: one row per job with its dates on the left, then the degrees.
// Above the list, the timeline puts the same jobs and degrees on one axis of years, played by the scroll.
export const ExperienceSection = () => {
      const { language } = useLanguage();
      const jobs = useExperience();
      const degrees = useEducation();
      const text = PARCOURS[language];

      return (
            <section id="experience" className="parcours-v2" aria-labelledby="experience-title">
                  <div className="pc-inner">
                        <h2 id="experience-title" className="pc-title">{text.title}</h2>

                        <ParcoursTimeline />

                        <ol className="pc-list">
                              {jobs.map((job) => (
                                    <li key={job.id} className="pc-row">
                                          <p className="pc-period">{job.period}</p>
                                          <div className="pc-body">
                                                <h3 className="pc-role">{text.jobs[job.id].role}</h3>
                                                <p className="pc-org">
                                                      {job.company} <span>· {job.location}</span>
                                                </p>
                                                <ul className="pc-bullets">
                                                      {text.jobs[job.id].bullets.map((bullet) => (
                                                            <li key={bullet}>{bullet}</li>
                                                      ))}
                                                </ul>
                                          </div>
                                    </li>
                              ))}
                        </ol>

                        <div className="pc-education">
                              <h3 className="pc-subtitle">{text.education}</h3>
                              <ol className="pc-list">
                                    {degrees.map((degree) => (
                                          <li key={degree.id} className="pc-row pc-row--degree">
                                                <p className="pc-period">{degree.period}</p>
                                                <div className="pc-body">
                                                      <h4 className="pc-degree">{text.degrees[degree.id].degree}</h4>
                                                      <p className="pc-org">{degree.institution}</p>
                                                      {text.degrees[degree.id].note && <p className="pc-note">{text.degrees[degree.id].note}</p>}
                                                </div>
                                          </li>
                                    ))}
                              </ol>
                        </div>
                  </div>
            </section>
      );
};
