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

            gsap.to('.hero-scroll-arrow', {
                  y: 6, duration: 1.5, repeat: -1, yoyo: true, ease: 'power1.inOut',
            });
      }, { scope: containerRef });

      return (
            <section ref={containerRef} id="hero" className="relative min-h-[100svh] w-full bg-dark-bg flex flex-col">

                  {/* ─── Ambient gradient glow ─── */}
                  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-[10%] left-[30%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-mg-blue/[0.04] blur-[150px] rounded-full" />
                        <div className="absolute top-[40%] right-[10%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-mg-violet/[0.03] blur-[120px] rounded-full" />
                        <div className="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-mg-turquoise/[0.02] blur-[100px] rounded-full" />
                  </div>

                  {/* ─── Main Content ─── */}
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
                                    </a>
                              </div>
                        </div>

                        {/* Right: Profile Photo */}
                        <div className="hero-photo opacity-0 flex-shrink-0">
                              <div className="photo-frame w-[280px] h-[340px] lg:w-[320px] lg:h-[400px] xl:w-[360px] xl:h-[440px]">
                                    {/* Replace src with your actual photo path */}
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

                  {/* ─── Skills Ticker ─── */}
                  <div className="hero-ticker relative z-10 w-full border-t border-mg-blue/10 opacity-0">
                        <div className="overflow-hidden py-4">
                              <div className="flex animate-[tickerScroll_30s_linear_infinite] whitespace-nowrap">
                                    {[...SKILLS_FLAT, ...SKILLS_FLAT].map((skill, i) => (
                                          <span key={i} className="flex items-center mx-8 text-dark-muted font-body text-xs tracking-[0.2em] uppercase shrink-0">
                                                <span className="inline-block w-1 h-1 bg-mg-blue/40 rounded-full mr-3" />
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
