import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Globe, GraduationCap, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
      const containerRef = useRef<HTMLElement>(null);

      useEffect(() => {
            const ctx = gsap.context(() => {
                  gsap.from('.about-animate', {
                        y: 40,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.12,
                        ease: 'power3.out',
                        scrollTrigger: {
                              trigger: containerRef.current,
                              start: 'top 75%',
                        },
                  });
            }, containerRef);
            return () => ctx.revert();
      }, []);

      const stats = [
            { icon: Code2, value: '7+', label: 'Projects Shipped', accentClass: 'text-accent-blue' },
            { icon: Globe, value: '4', label: 'Languages Spoken', accentClass: 'text-accent-purple' },
            { icon: GraduationCap, value: 'B.Sc.', label: 'Computer Engineering', accentClass: 'text-accent-cyan' },
            { icon: Briefcase, value: '4+', label: 'Years in Tech', accentClass: 'text-accent-pink' },
      ];

      return (
            <section ref={containerRef} id="about" className="relative py-32 lg:py-40 px-6 md:px-12 lg:px-20 xl:px-32 bg-dark-bg">

                  {/* Subtle section divider glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent" />

                  <div className="max-w-[1200px] mx-auto w-full">

                        {/* Section Label */}
                        <div className="about-animate mb-4">
                              <span className="text-accent-blue font-mono text-xs tracking-[0.25em] uppercase">
                                    01 — About
                              </span>
                        </div>

                        {/* Two Column */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                              {/* Left: Text */}
                              <div>
                                    <h2 className="about-animate font-display font-bold text-white leading-tight tracking-tight mb-8"
                                          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                                          Building <span className="gradient-text">resilient software</span> for critical environments.
                                    </h2>

                                    <p className="about-animate text-dark-secondary font-body leading-relaxed mb-6 text-base">
                                          I'm a fullstack engineer with a focus on security architecture and institutional-grade platforms.
                                          My work spans from React SPAs with GPU-accelerated animations to Spring Boot microservices
                                          handling sensitive data flows.
                                    </p>

                                    <p className="about-animate text-dark-muted font-body leading-relaxed text-base">
                                          Based in Rio de Janeiro, I work across time zones building systems where uptime and data
                                          integrity are non-negotiable. I combine strong technical execution with experience in
                                          project management and multilingual communication (French, Portuguese, English, Spanish).
                                    </p>
                              </div>

                              {/* Right: Bento Stat Cards */}
                              <div className="grid grid-cols-2 gap-4">
                                    {stats.map((stat, i) => (
                                          <div key={i} className="about-animate bento-card p-6 lg:p-8 flex flex-col justify-between min-h-[160px] group">
                                                <stat.icon className={`w-5 h-5 ${stat.accentClass} opacity-60 group-hover:opacity-100 transition-opacity duration-300 mb-6`} />
                                                <div>
                                                      <div className={`font-display font-bold text-2xl lg:text-3xl mb-1 ${stat.accentClass}`}>
                                                            {stat.value}
                                                      </div>
                                                      <div className="text-dark-muted font-body text-xs tracking-wide uppercase">
                                                            {stat.label}
                                                      </div>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>
            </section>
      );
};
