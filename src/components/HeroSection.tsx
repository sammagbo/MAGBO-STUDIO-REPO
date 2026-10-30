import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '@/context/LanguageContext';
import { StoryObject } from '@/components/StoryObject';
import { STORY } from '@/data/story';
import './HeroSection.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CARD = '240 198'; // the centre of the card, in the picture's coordinates
const TERMINAL = '378 200'; // the centre of the terminal

/**
 * The hero: the two-line statement, then the story of the paper student card, told by the scroll. The section is
 * taller than the screen and its stage sticks while the timeline plays: the lead gives way to the five steps, and the
 * card becomes a smart card, meets the terminal, the terminal reads a face, and the canteen counts the meal.
 * Visitors who prefer less motion see the final picture and the five steps as a list.
 */
export const HeroSection = () => {
      const containerRef = useRef<HTMLElement>(null);
      const { t, language } = useLanguage();
      const story = STORY[language];

      useGSAP(() => {
            const mm = gsap.matchMedia();
            mm.add('(prefers-reduced-motion: no-preference)', () => {
                  gsap.from('.hv-enter', { y: 24, autoAlpha: 0, duration: 0.8, ease: 'power2.out', stagger: 0.08 });
                  gsap.set('.hs-card', { rotation: -5, svgOrigin: CARD }); // the paper card lies askew
                  const tl = gsap.timeline({
                        defaults: { ease: 'power1.inOut' },
                        scrollTrigger: { trigger: containerRef.current, start: 'top top', end: 'bottom bottom', scrub: 0.6 },
                  });
                  // a step leaves upwards, the next one comes up from below
                  const out = { autoAlpha: 0, y: -16, duration: 0.5 };
                  const into = (step: number, at: number) => tl.fromTo(`.hv-step-${step}`, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.5 }, at);
                  // 1: the lead gives way to the first step, the paper card
                  tl.to('.hv-intro', { autoAlpha: 0, y: -16, duration: 0.6 }, 0.2);
                  into(0, 0.5);
                  // 2: the paper becomes a smart card
                  tl.to('.hv-step-0', out, 1.6)
                        .to('.hs-card', { rotation: 0, svgOrigin: CARD, duration: 1 }, 1.6)
                        .to(['.hs-fold', '.hs-stamp'], { autoAlpha: 0, duration: 0.4 }, 1.6)
                        .to('.hs-corner', { autoAlpha: 1, duration: 0.4 }, 1.8)
                        .to('.hs-plastic', { autoAlpha: 1, duration: 0.8 }, 1.8)
                        .to('.hs-chip', { autoAlpha: 1, duration: 0.5 }, 2.1)
                        .to('.hs-waves', { autoAlpha: 1, duration: 0.5 }, 2.3);
                  into(1, 1.9);
                  // 3: the terminal, and the card on its way to the reader
                  tl.to('.hv-step-1', out, 3.2)
                        .to('.hs-terminal', { autoAlpha: 1, duration: 0.6 }, 3.2)
                        .to('.hs-card', { scale: 0.5, x: -24, y: 56, svgOrigin: CARD, duration: 1 }, 3.2)
                        .to('.hs-waves', { autoAlpha: 0, duration: 0.3 }, 3.2)
                        .to('.hs-card', { x: 0, duration: 0.6, ease: 'power2.out' }, 4.2);
                  into(2, 3.5);
                  // 4: the card goes, the terminal comes to the centre and reads a face
                  tl.to('.hv-step-2', out, 4.8)
                        .to('.hs-card', { autoAlpha: 0, x: -80, duration: 0.5 }, 4.8)
                        .to('.hs-terminal', { x: -138, duration: 1 }, 4.8)
                        .to('.hs-face', { autoAlpha: 1, duration: 0.5 }, 5.3)
                        .fromTo('.hs-scan', { autoAlpha: 0, y: 0 }, { autoAlpha: 1, y: 108, duration: 0.8, ease: 'none' }, 5.3)
                        .to('.hs-scan', { autoAlpha: 0, duration: 0.2 }, 6.1)
                        .to('.hs-pad-waves', { autoAlpha: 0, duration: 0.2 }, 6.0)
                        .to('.hs-pad-check', { autoAlpha: 1, duration: 0.3 }, 6.1);
                  into(3, 5.1);
                  // 5: the canteen, where only a validated pass counts a meal
                  tl.to('.hv-step-3', out, 6.6)
                        .to('.hs-terminal', { x: -286, scale: 0.72, svgOrigin: TERMINAL, duration: 1 }, 6.6)
                        .to('.hs-panel', { autoAlpha: 1, duration: 0.7 }, 7.0)
                        .to({}, { duration: 0.9 }, 7.7);
                  into(4, 6.9);
            });
            mm.add('(prefers-reduced-motion: reduce)', () => {
                  // the final picture, still: the terminal that read a face, and the canteen panel
                  gsap.set('.hs-card', { autoAlpha: 0 });
                  gsap.set('.hs-terminal', { autoAlpha: 1, x: -286, scale: 0.72, svgOrigin: TERMINAL });
                  gsap.set(['.hs-face', '.hs-pad-check', '.hs-panel'], { autoAlpha: 1 });
                  gsap.set('.hs-pad-waves', { autoAlpha: 0 });
            });
      }, { scope: containerRef });

      return (
            <section ref={containerRef} id="hero" className="hero-v2">
                  <div className="hv-stage">
                        <h1 className="hv-title hv-enter">
                              <span>{t.hero.h1_line1}</span>
                              <span>{t.hero.h1_line2}</span>
                        </h1>
                        <div className="hv-split">
                              <div className="hv-swap">
                                    <div className="hv-intro">
                                          <p className="hv-lead hv-enter">
                                                <strong>{t.hero.lead_strong}</strong>
                                                {t.hero.lead_rest}
                                          </p>
                                          <div className="hv-actions hv-enter">
                                                <a className="hv-btn" href="#work">{t.hero.cta_project}</a>
                                          </div>
                                    </div>
                                    {/* keyed by position: a change of language keeps the elements the timeline animates */}
                                    {story.steps.map((step, i) => (
                                          <p key={i} className={`hv-step hv-step-${i}`} aria-hidden="true">
                                                <span className="hv-step-n">
                                                      {i + 1} / {story.steps.length}
                                                </span>
                                                <span className="hv-step-t">{step}</span>
                                          </p>
                                    ))}
                                    {/* the same steps as a list: for screen readers, and shown to visitors who prefer less motion */}
                                    <ol className="hv-steps">
                                          {story.steps.map((step, i) => (
                                                <li key={i}>{step}</li>
                                          ))}
                                    </ol>
                              </div>
                              <figure className="hv-object" aria-hidden="true">
                                    <StoryObject text={story} />
                              </figure>
                        </div>
                  </div>
            </section>
      );
};
