import { useLanguage } from '@/context/LanguageContext';
import { PROFILE } from '@/data/constants';
import { PORTRAIT_ALT, PORTRAIT_FILES, PORTRAIT_SIZES, PORTRAIT_SRCSET } from '@/data/portrait';
import './AboutSection.css';

// The about section, from the approved canvas design: the story in the visitor's language, then two facts, in words
// only: the languages as the CV gives them, and the public projects on GitHub. Sam's portrait (src/data/portrait.ts)
// sits under the opening sentence; on a phone it comes before the story.
export const AboutSection = () => {
      const { t, language } = useLanguage();
      const about = t.about;
      const [smallest] = PORTRAIT_FILES;

      return (
            <section id="about" className="about-v2" aria-labelledby="about-title">
                  <div className="ab-inner">
                        <h2 id="about-title" className="ab-title">{about.title}</h2>

                        <div className="ab-grid">
                              <div className="ab-side">
                                    <p className="ab-lead">{about.lead}</p>
                                    <figure className="ab-portrait">
                                          <img
                                                src={smallest.src}
                                                srcSet={PORTRAIT_SRCSET}
                                                sizes={PORTRAIT_SIZES}
                                                width={smallest.width}
                                                height={smallest.height}
                                                alt={PORTRAIT_ALT[language]}
                                                loading="lazy"
                                                decoding="async"
                                          />
                                    </figure>
                              </div>
                              <div className="ab-story">
                                    {about.story.map((paragraph) => (
                                          <p key={paragraph}>{paragraph}</p>
                                    ))}
                                    <p className="ab-peak">{about.peak}</p>
                                    <p>{about.closing}</p>
                              </div>
                        </div>

                        <ul className="ab-facts">
                              <li className="ab-fact">{about.facts.languages}</li>
                              <li className="ab-fact">
                                    <a className="ab-link" href={PROFILE.github} target="_blank" rel="noopener noreferrer">
                                          {about.facts.projects}
                                    </a>
                              </li>
                        </ul>
                  </div>
            </section>
      );
};
