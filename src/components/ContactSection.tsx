import { useLanguage } from '@/context/LanguageContext';
import { PROFILE } from '@/data/constants';
import { CONTACT } from '@/data/contact';
import './ContactSection.css';

// "https://www.linkedin.com/in/sammagbo/" -> "in/sammagbo", "https://github.com/sammagbo" -> "sammagbo"
const handle = (url: string) => url.replace(/^https:\/\/(www\.)?[^/]+\//, '').replace(/\/$/, '');

const ArrowIcon = () => (
      <svg viewBox="0 0 12 12" aria-hidden="true">
            <path d="M3 9L9 3M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
);

// The contact section, from the approved canvas design: LinkedIn, GitHub and the city. No form and no e-mail address on the site.
export const ContactSection = () => {
      const { language } = useLanguage();
      const text = CONTACT[language];
      const links = [
            { label: 'LinkedIn', url: PROFILE.linkedin },
            { label: 'GitHub', url: PROFILE.github },
      ];

      return (
            <section id="contact" className="contact-v2" aria-labelledby="contact-title">
                  <div className="cn-inner">
                        <h2 id="contact-title" className="cn-title">{text.title}</h2>

                        <div className="cn-intro">
                              <p className="cn-lead">{text.lead}</p>
                              <p className="cn-note">{text.languages}</p>
                        </div>

                        <ul className="cn-list">
                              {links.map((link) => (
                                    <li key={link.label} className="cn-row">
                                          <p className="cn-label">{link.label}</p>
                                          <div className="cn-value">
                                                <a className="cn-link" href={link.url} target="_blank" rel="noopener noreferrer">
                                                      {handle(link.url)}
                                                      <ArrowIcon />
                                                </a>
                                          </div>
                                    </li>
                              ))}
                              <li className="cn-row">
                                    <p className="cn-label">{text.basedIn}</p>
                                    <p className="cn-value">{text.city}</p>
                              </li>
                        </ul>

                        <p className="cn-copyright">© {new Date().getFullYear()} {PROFILE.name}</p>
                  </div>
            </section>
      );
};
