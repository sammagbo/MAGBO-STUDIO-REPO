import { useLanguage } from '@/context/LanguageContext';
import { SKILL_GROUPS, SKILLS_TEXT, pick } from '@/data/skills';
import './SkillsSection.css';

// The skills section, from the approved canvas design: one row per group, each tool with the projects where it is used.
export const SkillsSection = () => {
      const { language } = useLanguage();
      const text = SKILLS_TEXT[language];

      return (
            <section id="skills" className="skills-v2" aria-labelledby="skills-title">
                  <div className="sk-inner">
                        <div className="sk-head">
                              <h2 id="skills-title" className="sk-title">{text.title}</h2>
                              <p className="sk-lead">{text.lead}</p>
                        </div>

                        <ul className="sk-list">
                              {SKILL_GROUPS.map((group) => (
                                    <li key={group.label.en} className="sk-row">
                                          <p className="sk-label">{group.label[language]}</p>
                                          <ul className="sk-items">
                                                {group.items.map((item) => (
                                                      <li key={pick(item.name, 'en')} className="sk-item">
                                                            <span className="sk-name">{pick(item.name, language)}</span>
                                                            <span className="sk-where">{pick(item.where, language)}</span>
                                                      </li>
                                                ))}
                                          </ul>
                                    </li>
                              ))}
                        </ul>
                  </div>
            </section>
      );
};
