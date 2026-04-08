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
            { icon: Code2, value: '8+', label: 'Projects Shipped', color: 'text-mg-blue', dotColor: 'bg-mg-blue' },
            { icon: Globe, value: '5', label: 'Languages Spoken', color: 'text-mg-orange', dotColor: 'bg-mg-orange' },
            { icon: GraduationCap, value: 'Graduação', label: 'Ciência da Computação', color: 'text-mg-turquoise', dotColor: 'bg-mg-turquoise' },
            { icon: Briefcase, value: '10+', label: 'Years in Tech', color: 'text-mg-violet', dotColor: 'bg-mg-violet' },
      ];

      return (
            <section ref={containerRef} id="about" className="relative py-32 lg:py-40 px-6 md:px-12 lg:px-20 xl:px-32 bg-dark-bg">

                  {/* Subtle section divider glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-mg-blue/20 to-transparent" />

                  <div className="max-w-[1200px] mx-auto w-full">

                        {/* Section Label */}
                        <div className="about-animate mb-8 flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full border border-mg-blue/30 overflow-hidden shrink-0">
                                    <img src="/profile_real.png" alt="Sam Magbo" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                              </div>
                              <span className="text-mg-blue font-mono text-xs tracking-[0.25em] uppercase">
                                    01 — About
                              </span>
                        </div>

                        {/* Two Column */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                              {/* Left: Text */}
                              <div>
                                    <h2 className="about-animate font-display font-bold text-dark-text leading-tight tracking-tight mb-8"
                                          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                                          Technology, innovation, and <span className="marker-turquoise">strategic execution</span>.
                                    </h2>

                                    <p className="about-animate text-dark-secondary font-body leading-relaxed mb-6 text-base">
                                          I'm a <span className="marker-blue">Computer Science graduate</span> with experience spanning
                                          <span className="marker-violet"> IT governance</span>, system modernization, and institutional-grade platform development.
                                          My work bridges <span className="marker-orange">public sector innovation</span> —
                                          from state-level IT master plans to <span className="marker-red">full-stack applications</span> serving educational networks.
                                    </p>

                                    <p className="about-animate text-dark-muted font-body leading-relaxed text-base">
                                          Based in <span className="marker-green">Rio de Janeiro</span>, I operate across cultures and languages
                                          (French, Portuguese, English, Spanish, Italian) —
                                          managing <span className="marker-yellow">multicultural teams</span> and delivering projects
                                          where operational clarity and technical precision are non-negotiable.
                                    </p>
                              </div>

                              {/* Right: Bento Stat Cards */}
                              <div className="grid grid-cols-2 gap-4">
                                    {stats.map((stat, i) => (
                                          <div key={i} className="about-animate bento-card p-6 lg:p-8 flex flex-col justify-between min-h-[160px] group">
                                                <stat.icon className={`w-5 h-5 ${stat.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300 mb-6`} />
                                                <div>
                                                      <div className={`font-display font-bold text-2xl lg:text-3xl mb-1 ${stat.color}`}>
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
