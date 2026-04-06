import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SKILLS } from '@/data/constants';

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
      { key: 'frontend' as const, label: 'Frontend', color: 'text-mg-blue', dotColor: 'bg-mg-blue/50', borderColor: 'border-mg-blue/20' },
      { key: 'backend' as const, label: 'Backend', color: 'text-mg-orange', dotColor: 'bg-mg-orange/50', borderColor: 'border-mg-orange/20' },
      { key: 'infrastructure' as const, label: 'Infrastructure', color: 'text-mg-turquoise', dotColor: 'bg-mg-turquoise/50', borderColor: 'border-mg-turquoise/20' },
      { key: 'other' as const, label: 'Other', color: 'text-mg-violet', dotColor: 'bg-mg-violet/50', borderColor: 'border-mg-violet/20' },
];

export const SkillsSection = () => {
      const containerRef = useRef<HTMLElement>(null);

      useEffect(() => {
            const ctx = gsap.context(() => {
                  gsap.from('.skills-animate', {
                        y: 40,
                        opacity: 0,
                        duration: 0.7,
                        stagger: 0.08,
                        ease: 'power3.out',
                        scrollTrigger: {
                              trigger: containerRef.current,
                              start: 'top 75%',
                        },
                  });
            }, containerRef);
            return () => ctx.revert();
      }, []);

      return (
            <section ref={containerRef} id="skills" className="relative py-32 lg:py-40 px-6 md:px-12 lg:px-20 xl:px-32 bg-dark-bg">

                  {/* Subtle section divider glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-mg-turquoise/20 to-transparent" />

                  <div className="max-w-[1200px] mx-auto w-full">

                        {/* Section Label */}
                        <div className="skills-animate mb-4">
                              <span className="text-mg-turquoise font-mono text-xs tracking-[0.25em] uppercase">
                                    03 — Expertise
                              </span>
                        </div>

                        {/* Section Title */}
                        <h2 className="skills-animate font-display font-bold text-dark-text leading-tight tracking-tight mb-16"
                              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                              Technologies & <span className="marker-turquoise">Skills</span>
                        </h2>

                        {/* Skills Grid — 4 category columns */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                              {CATEGORIES.map((cat) => (
                                    <div key={cat.key} className="skills-animate">
                                          <h3 className={`${cat.color} font-body text-sm font-medium uppercase tracking-wider mb-6 pb-3 border-b ${cat.borderColor}`}>
                                                {cat.label}
                                          </h3>
                                          <ul className="space-y-3">
                                                {SKILLS[cat.key].map((skill) => (
                                                      <li key={skill} className="flex items-center gap-3 text-dark-text font-body text-sm group">
                                                            <span className={`w-1.5 h-1.5 rounded-full ${cat.dotColor} group-hover:shadow-[0_0_6px] transition-all duration-300 shrink-0`} />
                                                            <span className="group-hover:text-dark-text transition-colors duration-300">
                                                                  {skill}
                                                            </span>
                                                      </li>
                                                ))}
                                          </ul>
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};
