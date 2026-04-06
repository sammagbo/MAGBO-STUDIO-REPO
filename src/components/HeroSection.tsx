import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { PROFILE, SKILLS_FLAT } from '@/data/constants';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export const HeroSection = () => {
      const containerRef = useRef<HTMLElement>(null);

      useGSAP(() => {
            const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.2 } });

            tl.fromTo('.hero-greeting', { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, 0.2);
            tl.fromTo('.hero-name', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.4 }, 0.4);
            tl.fromTo('.hero-role', { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, 0.7);
            tl.fromTo('.hero-bio', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 0.9);
            tl.fromTo('.hero-photo', { y: 30, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 1 }, 0.6);
            tl.fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, 1.1);
            tl.fromTo('.hero-socials', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 1.3);
            tl.fromTo('.hero-ticker', { opacity: 0 }, { opacity: 1, duration: 1 }, 1.5);
            tl.fromTo('.hero-scroll-hint', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.8 }, 1.7);

<<<<<<< HEAD
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
=======
            gsap.to('.hero-scroll-arrow', {
                  y: 6, duration: 1.5, repeat: -1, yoyo: true, ease: 'power1.inOut',
            });
      }, { scope: containerRef });

      return (
            <section ref={containerRef} id="hero" className="relative min-h-[100svh] w-full bg-dark-bg flex flex-col">
>>>>>>> 8f5b7ad471d843c612ef60d9e881810bac8db82f

                  {/* ─── Ambient gradient glow ─── */}
                  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-[10%] left-[30%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-mg-blue/[0.04] blur-[150px] rounded-full" />
                        <div className="absolute top-[40%] right-[10%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-mg-violet/[0.03] blur-[120px] rounded-full" />
                        <div className="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-mg-turquoise/[0.02] blur-[100px] rounded-full" />
                  </div>

                  {/* ─── Main Content ─── */}
<<<<<<< HEAD
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
=======
                  <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-20 px-6 md:px-12 lg:px-20 xl:px-32 pt-32 pb-16 max-w-[1400px] mx-auto w-full">

                        {/* Left: Text Content */}
                        <div className="flex-1 max-w-2xl">
                              {/* Greeting line */}
                              <div className="hero-greeting mb-6 opacity-0">
                                    <span className="inline-flex items-center gap-2 text-dark-muted font-mono text-xs tracking-[0.25em] uppercase">
                                          <span className="w-2 h-2 rounded-full accent-dot animate-pulse" />
                                          Available for work — {PROFILE.location}
                                    </span>
                              </div>

                              {/* Name */}
                              <h1 className="hero-name font-display font-extrabold text-white leading-[0.95] tracking-tight mb-6 opacity-0"
                                    style={{ fontSize: 'clamp(2.8rem, 8vw, 6.5rem)' }}>
                                    Sammy K{'\n'}
                                    <span className="block">Magbo<span className="gradient-text">.</span></span>
                              </h1>

                              {/* Role with markers */}
                              <p className="hero-role font-body leading-relaxed mb-8 opacity-0"
                                    style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
                                    <span className="marker-blue font-medium text-white">Software Engineer</span>
                                    {' & '}
                                    <span className="marker-violet font-medium text-white">Security Architect</span>
                              </p>

                              {/* Bio */}
                              <p className="hero-bio font-body text-dark-secondary leading-relaxed max-w-2xl mb-12 opacity-0"
                                    style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)' }}>
                                    I build <span className="marker-turquoise">resilient software</span> for critical environments.
                                    With a Computer Science background and hands-on experience in
                                    <span className="marker-orange"> systems implementation</span>,
                                    process modernization, and operational management across public and private sectors,
                                    I focus on crafting architectures that are as{' '}
                                    <span className="marker-green">secure</span> as they are{' '}
                                    <span className="marker-yellow">scalable</span>.
                              </p>

                              {/* CTAs */}
                              <div className="flex items-center gap-6 flex-wrap mb-12">
                                    <a href="#work"
                                          className="hero-cta px-8 py-3.5 bg-mg-blue text-white font-body font-medium text-sm tracking-wide rounded-full hover:bg-mg-blue/80 hover:shadow-[0_0_30px_rgba(30,136,229,0.3)] transition-all duration-400 opacity-0">
                                          View Work
                                    </a>
                                    <a href="#contact"
                                          className="hero-cta px-8 py-3.5 border border-white/20 text-white font-body font-medium text-sm tracking-wide rounded-full hover:border-mg-turquoise/50 hover:text-mg-turquoise transition-all duration-300 opacity-0">
                                          Get in touch →
                                    </a>
                              </div>

                              {/* Social links */}
                              <div className="hero-socials flex items-center gap-5 opacity-0">
                                    <a href={PROFILE.github} target="_blank" rel="noopener noreferrer"
                                          className="text-dark-muted hover:text-mg-blue transition-colors duration-300"
                                          aria-label="GitHub">
                                          <Github className="w-5 h-5" />
                                    </a>
                                    <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"
                                          className="text-dark-muted hover:text-mg-blue transition-colors duration-300"
                                          aria-label="LinkedIn">
                                          <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href={`mailto:${PROFILE.email}`}
                                          className="text-dark-muted hover:text-mg-orange transition-colors duration-300"
                                          aria-label="Email">
                                          <Mail className="w-5 h-5" />
>>>>>>> 8f5b7ad471d843c612ef60d9e881810bac8db82f
                                    </a>
                              </div>
                        </div>

<<<<<<< HEAD
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
=======
                        {/* Right: Profile Photo */}
                        <div className="hero-photo opacity-0 flex-shrink-0">
                              <div className="photo-frame w-[280px] h-[340px] lg:w-[320px] lg:h-[400px] xl:w-[360px] xl:h-[440px]">
                                    {/* Replace src with your actual photo path */}
>>>>>>> 8f5b7ad471d843c612ef60d9e881810bac8db82f
                                    <img
                                          src="/profile.jpg"
                                          alt="Sammy K Magbo — Software Engineer"
                                          className="w-full h-full"
                                          onError={(e) => {
                                                // Fallback: show styled initials if photo is missing
                                                const target = e.currentTarget;
                                                target.style.display = 'none';
                                                const fallback = target.nextElementSibling as HTMLElement;
                                                if (fallback) fallback.style.display = 'flex';
                                          }}
                                    />
                                    <div
                                          className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-mg-blue/10 to-mg-violet/10"
                                          style={{ display: 'none' }}
                                    >
                                          <span className="font-display font-bold text-6xl lg:text-7xl gradient-text select-none">
                                                SM
                                          </span>
                                    </div>
                              </div>
                        </div>
                  </div>

<<<<<<< HEAD
                  {/* ─── Bottom: Skills Ticker ─── */}
                  <div className="hero-skills-ticker relative z-10 w-full border-t border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm">
                        <div className="overflow-hidden py-4 md:py-5">
                              <div className="flex animate-[tickerScroll_25s_linear_infinite] whitespace-nowrap">
                                    {[...SKILLS, ...SKILLS].map((skill, i) => (
                                          <span key={i} className="flex items-center mx-6 md:mx-10 text-white/50 font-body text-sm md:text-base tracking-[0.15em] uppercase shrink-0">
                                                <span className="inline-block w-1.5 h-1.5 bg-[#BBFD6A]/50 mr-3" />
=======
                  {/* ─── Skills Ticker ─── */}
                  <div className="hero-ticker relative z-10 w-full border-t border-mg-blue/10 opacity-0">
                        <div className="overflow-hidden py-4">
                              <div className="flex animate-[tickerScroll_30s_linear_infinite] whitespace-nowrap">
                                    {[...SKILLS_FLAT, ...SKILLS_FLAT].map((skill, i) => (
                                          <span key={i} className="flex items-center mx-8 text-dark-muted font-body text-xs tracking-[0.2em] uppercase shrink-0">
                                                <span className="inline-block w-1 h-1 bg-mg-blue/40 rounded-full mr-3" />
>>>>>>> 8f5b7ad471d843c612ef60d9e881810bac8db82f
                                                {skill}
                                          </span>
                                    ))}
                              </div>
                        </div>
                  </div>

                  {/* ─── Scroll hint ─── */}
                  <div className="hero-scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-0">
                        <span className="text-dark-muted font-mono text-[10px] tracking-widest uppercase">Scroll</span>
                        <ArrowDown className="hero-scroll-arrow w-4 h-4 text-mg-blue/60" />
                  </div>
            </section>
      );
};
