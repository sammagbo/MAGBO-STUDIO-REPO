import { useLanguage } from '@/context/LanguageContext';
import { PUBLIC_PROJECTS } from '@/data/constants';
import './AboutSection.css';

// The about section, from the approved canvas design: the story in the visitor's language, then two facts.
export const AboutSection = () => {
      const { t } = useLanguage();
      const about = t.about;

      return (
            <section id="about" className="about-v2" aria-labelledby="about-title">
                  <div className="ab-inner">
                        <h2 id="about-title" className="ab-title">{about.title}</h2>

                        <div className="ab-grid">
                              <p className="ab-lead">{about.lead}</p>
                              <div className="ab-story">
                                    {about.story.map((paragraph) => (
                                          <p key={paragraph}>{paragraph}</p>
                                    ))}
                                    <p className="ab-peak">{about.peak}</p>
                                    <p>{about.closing}</p>
                              </div>
                        </div>

                        <dl className="ab-facts">
                              <div className="ab-fact">
                                    <dt>{about.facts.languages}</dt>
                                    <dd>3</dd>
                              </div>
                              <div className="ab-fact">
                                    <dt>{about.facts.projects}</dt>
                                    <dd>{PUBLIC_PROJECTS}</dd>
                              </div>
                        </dl>
                  </div>
            </section>
      );
};
