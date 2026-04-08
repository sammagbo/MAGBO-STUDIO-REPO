import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useProjects } from '@/hooks/useData';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const LANG_COLORS: Record<string, string> = {
      TypeScript: 'border-mg-blue/50 text-mg-blue',
      JavaScript: 'border-mg-yellow/50 text-mg-yellow',
      Java: 'border-mg-orange/50 text-mg-orange',
      'C#': 'border-mg-green/50 text-mg-green',
};

export const WorkSection = () => {
      const PROJECTS = useProjects();
      const containerRef = useRef<HTMLElement>(null);
      const { t } = useLanguage();

      useEffect(() => {
            const ctx = gsap.context(() => {
                  gsap.from('.work-animate', {
                        y: 50,
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
            <section ref={containerRef} id="work" className="relative py-32 lg:py-40 px-6 md:px-12 lg:px-20 xl:px-32 bg-dark-bg">

                  {/* Subtle section divider glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-mg-violet/20 to-transparent" />

                  <div className="max-w-[1200px] mx-auto w-full">

                        {/* Section Label */}
                        <div className="work-animate mb-4">
                              <span className="text-mg-violet font-mono text-xs tracking-[0.25em] uppercase">
                                    {t.ui.work_badge}
                              </span>
                        </div>

                        {/* Section Title */}
                        <div className="work-animate flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                              <h2 className="font-display font-bold text-dark-text leading-tight tracking-tight"
                                    style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                                    dangerouslySetInnerHTML={{ __html: t.ui.work_title }}
                              />
                              <a href="https://github.com/sammagbo" target="_blank" rel="noopener noreferrer"
                                    className="text-dark-muted font-body text-sm hover:text-mg-blue transition-colors duration-300 flex items-center gap-2">
                                    <Github className="w-4 h-4" />
                                    {t.surface?.footer_social || 'View all on GitHub'}
                              </a>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              {PROJECTS.map((project) => {
                                    const tProjDesc = t.proj?.[project.id] as string;
                                    return (
                                    <div
                                          key={project.id}
                                          className="work-animate bento-card p-8 lg:p-10 flex flex-col justify-between group min-h-[280px]"
                                    >
                                          {/* Top: language badge + links */}
                                          <div className="flex items-center justify-between mb-8">
                                                <span className={`font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1 border rounded-full ${LANG_COLORS[project.language] || 'border-dark-border text-dark-muted'}`}>
                                                      {project.language}
                                                </span>
                                                <div className="flex items-center gap-3">
                                                      {project.github && (
                                                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                                                            className="text-dark-muted hover:text-mg-blue transition-colors duration-300"
                                                            aria-label={`GitHub: ${project.name}`}>
                                                            <Github className="w-4 h-4" />
                                                      </a>
                                                      )}
                                                      {project.live && (
                                                            <a href={project.live} target="_blank" rel="noopener noreferrer"
                                                                  className="text-dark-muted hover:text-mg-turquoise transition-colors duration-300"
                                                                  aria-label={`Live: ${project.name}`}>
                                                                  <ExternalLink className="w-4 h-4" />
                                                            </a>
                                                      )}
                                                </div>
                                          </div>

                                          {/* Title */}
                                          <div className="flex-1">
                                                <h3 className="font-display font-bold text-dark-text text-xl lg:text-2xl mb-3 group-hover:text-mg-blue transition-colors duration-300">
                                                      {project.name}
                                                </h3>
                                                <p className="text-dark-muted font-body text-sm leading-relaxed mb-6">
                                                      {tProjDesc || project.description}
                                                </p>
                                          </div>

                                          {/* Tech Tags */}
                                          <div className="flex flex-wrap gap-2 pt-6 border-t border-dark-border">
                                                {project.stack.map(tech => (
                                                      <span key={tech} className="font-mono text-[10px] tracking-wider uppercase text-dark-secondary px-2.5 py-1 border border-dark-border rounded-full hover:border-mg-blue/30 hover:text-mg-blue transition-all duration-300">
                                                            {tech}
                                                      </span>
                                                ))}
                                          </div>
                                    </div>
                              )})}
                        </div>
                  </div>
            </section>
      );
};
