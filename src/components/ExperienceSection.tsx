import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useExperience, useEducation } from '@/hooks/useData';

gsap.registerPlugin(ScrollTrigger);

export const ExperienceSection = () => {
      const EXPERIENCE = useExperience();
      const EDUCATION = useEducation();
      const containerRef = useRef<HTMLElement>(null);

      useEffect(() => {
            const ctx = gsap.context(() => {
                  gsap.from('.exp-animate', {
                        y: 40,
                        opacity: 0,
                        duration: 0.7,
                        stagger: 0.1,
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
            <section ref={containerRef} id="experience" className="relative py-32 lg:py-40 px-6 md:px-12 lg:px-20 xl:px-32 bg-dark-bg">

                  {/* Subtle section divider */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-mg-orange/20 to-transparent" />

                  <div className="max-w-[1200px] mx-auto w-full">

                        {/* Section Label */}
                        <div className="exp-animate mb-4">
                              <span className="text-mg-orange font-mono text-xs tracking-[0.25em] uppercase">
                                    02 — Experience
                              </span>
                        </div>

                        {/* Section Title */}
                        <h2 className="exp-animate font-display font-bold text-dark-text leading-tight tracking-tight mb-20"
                              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                              Professional <span className="marker-orange">Trajectory</span>
                        </h2>

                        {/* ─── Timeline ─── */}
                        <div className="relative">
                              {/* Vertical line */}
                              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-mg-orange/30 via-dark-border to-transparent" />

                              <div className="space-y-16">
                                    {EXPERIENCE.map((exp) => (
                                          <div key={exp.id} className="exp-animate relative pl-8 md:pl-20">
                                                {/* Timeline dot */}
                                                <div className="absolute left-0 md:left-8 top-1.5 -translate-x-1/2">
                                                      <div className="w-2.5 h-2.5 rounded-full bg-dark-bg border-2 border-mg-orange/60" />
                                                </div>

                                                {/* Period & Type badge */}
                                                <div className="flex items-center gap-4 mb-3">
                                                      <span className="text-dark-muted font-mono text-xs tracking-wider">
                                                            {exp.period}
                                                      </span>
                                                      <span className="text-dark-muted font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 border border-dark-border rounded-full">
                                                            {exp.type}
                                                      </span>
                                                </div>

                                                {/* Role */}
                                                <h3 className="font-display font-bold text-dark-text text-xl lg:text-2xl tracking-tight mb-1">
                                                      {exp.role}
                                                </h3>

                                                {/* Company & Location */}
                                                <p className="text-dark-secondary font-body text-sm mb-6">
                                                      {exp.company}
                                                      <span className="text-dark-muted"> · {exp.location}</span>
                                                </p>

                                                {/* Bullets */}
                                                <ul className="space-y-2.5">
                                                      {exp.bullets.map((bullet, i) => (
                                                            <li key={i} className="flex items-start gap-3 text-dark-muted font-body text-sm leading-relaxed">
                                                                  <span className="w-1 h-1 rounded-full bg-mg-orange/40 mt-2 shrink-0" />
                                                                  {bullet}
                                                            </li>
                                                      ))}
                                                </ul>
                                          </div>
                                    ))}
                              </div>
                        </div>

                        {/* ─── Education Block ─── */}
                        <div className="mt-32">
                              <div className="exp-animate mb-4">
                                    <span className="text-mg-turquoise font-mono text-xs tracking-[0.25em] uppercase">
                                          Education
                                    </span>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                                    {EDUCATION.map((edu) => (
                                          <div key={edu.id} className="exp-animate border-l-2 border-mg-turquoise/30 pl-8 py-2">
                                                <div className="flex items-baseline gap-3 mb-1">
                                                      <span className="font-display font-bold text-dark-text text-xl tracking-tight">
                                                            {edu.degree}
                                                      </span>
                                                      <span className="text-dark-muted font-mono text-xs tracking-wider">
                                                            {edu.period}
                                                      </span>
                                                </div>
                                                <p className="text-dark-secondary font-body text-sm mb-1">
                                                      {edu.field}
                                                </p>
                                                <p className="text-dark-muted font-body text-sm">
                                                      {edu.institution}
                                                </p>
                                                {edu.note && (
                                                      <p className="text-mg-turquoise/60 font-mono text-[11px] mt-2 tracking-wide">
                                                            {edu.note}
                                                      </p>
                                                )}
                                          </div>
                                    ))}
                              </div>
                        </div>

                  </div>
            </section>
      );
};
