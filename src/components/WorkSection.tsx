import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useProjects } from '@/hooks/useData';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LANG_COLORS: Record<string, string> = {
      TypeScript: 'border-accent-blue/40 text-accent-blue',
      JavaScript: 'border-yellow-500/40 text-yellow-400',
      Java: 'border-orange-500/40 text-orange-400',
      'C#': 'border-green-500/40 text-green-400',
};

export const WorkSection = () => {
      const PROJECTS = useProjects();
      const containerRef = useRef<HTMLElement>(null);

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
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-accent-purple/20 to-transparent" />

                  <div className="max-w-[1200px] mx-auto w-full">

                        {/* Section Label */}
                        <div className="work-animate mb-4">
                              <span className="text-accent-purple font-mono text-xs tracking-[0.25em] uppercase">
                                    02 — Work
                              </span>
                        </div>

                        {/* Section Title */}
                        <div className="work-animate flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                              <h2 className="font-display font-bold text-white leading-tight tracking-tight"
                                    style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                                    Selected <span className="gradient-text">Projects</span>
                              </h2>
                              <a href="https://github.com/sammagbo" target="_blank" rel="noopener noreferrer"
                                    className="text-dark-muted font-body text-sm hover:text-accent-blue-light transition-colors duration-300 flex items-center gap-2">
                                    <Github className="w-4 h-4" />
                                    View all on GitHub
                              </a>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              {PROJECTS.map((project) => (
                                    <div
                                          key={project.id}
                                          className="work-animate bento-card p-8 lg:p-10 flex flex-col justify-between group min-h-[280px]"
                                    >
                                          {/* Top: language badge + links */}
                                          <div className="flex items-center justify-between mb-8">
                                                <span className={`font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1 border rounded-full ${LANG_COLORS[project.language] || 'border-white/[0.08] text-dark-muted'}`}>
                                                      {project.language}
                                                </span>
                                                <div className="flex items-center gap-3">
                                                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                                                            className="text-dark-muted hover:text-accent-blue-light transition-colors duration-300"
                                                            aria-label={`GitHub: ${project.name}`}>
                                                            <Github className="w-4 h-4" />
                                                      </a>
                                                      {project.live && (
                                                            <a href={project.live} target="_blank" rel="noopener noreferrer"
                                                                  className="text-dark-muted hover:text-accent-cyan transition-colors duration-300"
                                                                  aria-label={`Live: ${project.name}`}>
                                                                  <ExternalLink className="w-4 h-4" />
                                                            </a>
                                                      )}
                                                </div>
                                          </div>

                                          {/* Title */}
                                          <div className="flex-1">
                                                <h3 className="font-display font-bold text-white text-xl lg:text-2xl mb-3 group-hover:text-accent-blue-light transition-colors duration-300">
                                                      {project.name}
                                                </h3>
                                                <p className="text-dark-muted font-body text-sm leading-relaxed mb-6">
                                                      {project.description}
                                                </p>
                                          </div>

                                          {/* Tech Tags */}
                                          <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.06]">
                                                {project.stack.map(tech => (
                                                      <span key={tech} className="font-mono text-[10px] tracking-wider uppercase text-dark-secondary px-2.5 py-1 border border-white/[0.08] rounded-full hover:border-accent-blue/30 hover:text-accent-blue-light transition-all duration-300">
                                                            {tech}
                                                      </span>
                                                ))}
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};
