import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '@/context/LanguageContext';
import { CommitTrace } from '@/components/trace/CommitTrace';
import './HeroSection.css';

gsap.registerPlugin(useGSAP);

/** The hero: a two-line statement, then every public commit as a trace. Always dark. */
export const HeroSection = () => {
      const containerRef = useRef<HTMLElement>(null);
      const { t } = useLanguage();

      // A soft entrance for the title, the lead and the button; none for visitors who prefer less motion.
      useGSAP(() => {
            gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
                  gsap.from('.hv-enter', { y: 24, autoAlpha: 0, duration: 0.8, ease: 'power2.out', stagger: 0.08 });
            });
      }, { scope: containerRef });

      return (
            <section ref={containerRef} id="hero" className="hero-v2">
                  <div className="hv-statement">
                        <h1 className="hv-title hv-enter">
                              <span>{t.hero.h1_line1}</span>
                              <span>{t.hero.h1_line2}</span>
                        </h1>
                        <div className="hv-row">
                              <p className="hv-lead hv-enter">
                                    <strong>{t.hero.lead_strong}</strong>
                                    {t.hero.lead_rest}
                              </p>
                              <div className="hv-actions hv-enter">
                                    <a className="hv-btn" href="#work">{t.hero.cta_project}</a>
                              </div>
                        </div>
                  </div>
                  <CommitTrace />
            </section>
      );
};
