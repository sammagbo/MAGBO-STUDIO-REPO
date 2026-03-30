import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { PROFILE, SKILLS } from '../data/constants';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(useGSAP);

export const HeroSection = () => {
      const containerRef = useRef<HTMLElement>(null);
      const { t } = useLanguage();

      useGSAP(() => {
            const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

            // Decorative rings scale in
            tl.fromTo('.hero-ring',
                  { scale: 0, opacity: 0 },
                  { scale: 1, opacity: 1, duration: 1.4, stagger: 0.15 },
                  0
            );

            // Photo reveal
            tl.fromTo('.hero-photo',
                  { scale: 1.1, opacity: 0, y: 60 },
                  { scale: 1, opacity: 1, y: 0, duration: 1.6, ease: 'power3.out' },
                  0.3
            );

            // Decorative arrows
            tl.fromTo('.hero-arrow',
                  { x: -30, opacity: 0 },
                  { x: 0, opacity: 1, duration: 1, stagger: 0.1 },
                  0.6
            );

            // Text reveal - staggered from left
            tl.fromTo('.hero-text-line',
                  { x: -80, opacity: 0 },
                  { x: 0, opacity: 1, duration: 1.2, stagger: 0.12 },
                  0.5
            );

            // Buttons fade in
            tl.fromTo('.hero-btn',
                  { y: 20, opacity: 0 },
                  { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
                  1.0
            );

            // Skills ticker fade in
            tl.fromTo('.hero-skills-ticker',
                  { opacity: 0, y: 20 },
                  { opacity: 1, y: 0, duration: 1 },
                  1.2
            );

            // ── Scroll-driven ring behaviors (replaces perpetual rotation) ──
            // Outer ring: rotates slowly with page scroll
            gsap.to('.hero-ring-outer', {
                  rotation: 90,
                  ease: 'none',
                  scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 2,
                  }
            });

            // Middle ring: counter-rotates on scroll
            gsap.to('.hero-ring-middle', {
                  rotation: -60,
                  ease: 'none',
                  scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 3,
                  }
            });

            // Chevrons: subtle pulse on scroll instead of perpetual loop
            gsap.to('.hero-chevron-group', {
                  x: 6,
                  ease: 'none',
                  scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1,
                  }
            });

      }, { scope: containerRef });

      return (
            <section ref={containerRef} id="hero" className="relative min-h-[100svh] w-full bg-[#0a0a0a] overflow-hidden flex flex-col">

                  {/* ─── Background Ambient Glows ─── */}
                  <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute top-[10%] left-[20%] w-[35vw] h-[35vw] bg-[#BBFD6A]/8 blur-[180px] rounded-full" />
                        <div className="absolute bottom-[5%] right-[10%] w-[30vw] h-[30vw] bg-[#BBFD6A]/5 blur-[140px] rounded-full" />
                  </div>

                  {/* ─── Main Content ─── */}
                  <div className="relative z-10 flex-1 w-full h-full flex items-center justify-center">

                        {/* ─── Left: Text Content ─── */}
                        <div className="absolute left-[5%] top-[20%] lg:top-[25%] z-20 flex flex-col items-start text-left max-w-3xl mix-blend-difference pointer-events-none">

                              {/* Hello with accent dot */}
                              <div className="hero-text-line mb-3">
                                    <span className="font-display font-bold italic text-[#BBFD6A]"
                                          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                                          {t.hero.title_start}
                                    </span>
                                    {t.hero.title_gradient && (
                                          <span className="font-display font-bold italic text-white ml-2"
                                                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                                                {t.hero.title_gradient}
                                          </span>
                                    )}
                                    <span className="inline-block w-3 h-3 bg-[#BBFD6A] ml-1 mb-1" />
                              </div>

                              {/* Name with left accent line */}
                              <div className="hero-text-line flex items-center gap-4 mb-2">
                                    <div className="hidden lg:block w-12 h-[2px] bg-white/40" />
                                    <span className="font-body text-white/80 tracking-wide"
                                          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)' }}>
                                          I'm Sammy K. Magbo
                                    </span>
                               </div>

                              {/* Role / Title */}
                              <h1 className="hero-text-line font-display font-extrabold text-white leading-[1.05] tracking-tight mb-8"
                                    style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)' }}>
                                    Prompt<br />
                                    <span className="text-white">Engineer</span>
                              </h1>

                              {/* Action Buttons — angular, not rounded */}
                              <div className="flex items-center gap-6 pointer-events-auto">
                                    <a href="#projects"
                                          className="hero-btn px-7 py-3 bg-[#BBFD6A] text-black font-body font-semibold text-sm tracking-wide hover:bg-[#d0fe99] transition-all duration-300 hover:shadow-[0_0_30px_rgba(187,253,106,0.3)]"
                                          style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)' }}>
                                          Got a project?
                                    </a>
                                    <a href="#cv"
                                          className="hero-btn px-7 py-3 border border-white/30 text-white font-body font-semibold text-sm tracking-wide hover:border-white/60 hover:bg-white/5 transition-all duration-300"
                                          style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)' }}>
                                          My resume
                                    </a>
                              </div>
                        </div>

                        {/* ─── Right: Photo with Decorative Elements ─── */}
                        <div className="absolute right-[-10%] lg:right-[5%] top-[10%] lg:top-[15%] z-10 flex items-center justify-center opacity-80 pointer-events-none">

                              {/* Outer ring — dashed, scroll-driven rotation */}
                              <div className="hero-ring hero-ring-outer absolute w-[80vw] max-w-[550px] h-[100vw] max-h-[700px] rounded-full border-2 border-dashed border-[#BBFD6A]/25 pointer-events-none" />

                              {/* Middle solid ring — counter-rotates on scroll */}
                              <div className="hero-ring hero-ring-middle absolute w-[70vw] max-w-[480px] h-[88vw] max-h-[620px] rounded-full border-[3px] border-[#BBFD6A]/50 pointer-events-none phosphor-glow-box" />

                              {/* Inner glow ring */}
                              <div className="hero-ring absolute w-[60vw] max-w-[420px] h-[75vw] max-h-[540px] rounded-full bg-gradient-to-br from-[#BBFD6A]/8 to-transparent pointer-events-none" />

                              {/* Decorative Chevrons (right side) */}
                              <div className="hero-arrow hero-chevron-group absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 pointer-events-none">
                                    {[...Array(3)].map((_, i) => (
                                          <svg key={i} width="20" height="30" viewBox="0 0 20 30" className="text-[#BBFD6A]/35">
                                                <polyline points="2,2 18,15 2,28" fill="none" stroke="currentColor" strokeWidth="2" />
                                          </svg>
                                    ))}
                              </div>

                              {/* Decorative Chevrons (left side, mirrored) */}
                              <div className="hero-arrow absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 pointer-events-none">
                                    {[...Array(2)].map((_, i) => (
                                          <svg key={i} width="20" height="30" viewBox="0 0 20 30" className="text-white/10 rotate-180">
                                                <polyline points="2,2 18,15 2,28" fill="none" stroke="currentColor" strokeWidth="2" />
                                          </svg>
                                    ))}
                              </div>

                              {/* The Photo */}
                              <div className="hero-photo relative z-10 w-[75vw] max-w-[500px]">
                                    <img
                                          src="/avatar_new.png"
                                          alt={PROFILE.name}
                                          className="w-full h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
                                          onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                const fallback = document.getElementById('hero-fallback');
                                                if (fallback) fallback.style.display = 'flex';
                                          }}
                                    />
                                    <div id="hero-fallback" className="hidden w-full aspect-[3/4] flex-col items-center justify-center text-center text-white/40 font-mono text-xs">
                                          <span className="text-3xl mb-2">📸</span>
                                          <p>Save your photo as<br /><span className="text-white font-bold">public/avatar.png</span></p>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* ─── Bottom: Skills Ticker ─── */}
                  <div className="hero-skills-ticker relative z-10 w-full border-t border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm">
                        <div className="overflow-hidden py-4 md:py-5">
                              <div className="flex animate-[tickerScroll_25s_linear_infinite] whitespace-nowrap">
                                    {[...SKILLS, ...SKILLS].map((skill, i) => (
                                          <span key={i} className="flex items-center mx-6 md:mx-10 text-white/50 font-body text-sm md:text-base tracking-[0.15em] uppercase shrink-0">
                                                <span className="inline-block w-1.5 h-1.5 bg-[#BBFD6A]/50 mr-3" />
                                                {skill}
                                          </span>
                                    ))}
                              </div>
                        </div>
                  </div>
            </section>
      );
};
