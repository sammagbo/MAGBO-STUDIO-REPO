import { ExternalLink, Lock } from 'lucide-react';
import type { Project } from '@/hooks/useData';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface ProjectCardProps {
      project: Project;
      index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
      const cardRef = useRef<HTMLDivElement>(null);

      useEffect(() => {
            const yOffset = 100 * (index % 2 === 0 ? 1 : 1.5);

            const ctx = gsap.context(() => {
                  gsap.fromTo(cardRef.current,
                        { y: yOffset },
                        { y: -yOffset, ease: "none", scrollTrigger: { trigger: cardRef.current, start: "top bottom", end: "bottom top", scrub: true } }
                  );
            }, cardRef);

            return () => ctx.revert();
      }, [index]);

      return (
            <div
                  ref={cardRef}
                  className="bg-black text-white rounded-[3rem] p-10 md:p-12 shadow-2xl shadow-black/20 flex flex-col justify-between group overflow-hidden relative min-h-[500px]"
            >
                  {/* Decorative background elements */}
                  <div className="absolute -right-20 -top-20 opacity-5">
                        <Lock className="w-96 h-96" />
                  </div>

                  <div className="relative z-10">
                        <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/10">
                              <div className="font-mono text-anyflow-lime text-xs tracking-widest uppercase">
                                    [{project.sector}]
                              </div>
                              <div className="font-mono text-core-muted text-xs px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-anyflow-lime animate-pulse"></span>
                                    {project.status}
                              </div>
                        </div>

                        <h3 className="font-display font-bold text-4xl lg:text-5xl tracking-tighter mb-6 group-hover:text-anyflow-lime transition-colors">
                              {project.codename}
                        </h3>

                        <p className="font-body text-core-muted text-lg leading-relaxed mb-12">
                              {project.description}
                        </p>
                  </div>

                  <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-white/10">
                        <div className="flex flex-wrap gap-2">
                              {project.stack.map(tech => (
                                    <span key={tech} className="font-mono text-[10px] tracking-wider uppercase bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-core-text">
                                          {tech}
                                    </span>
                              ))}
                        </div>
                        {project.link ? (
                              <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-anyflow-lime text-black flex items-center justify-center flex-shrink-0 group-hover:scale-110 active:scale-95 transition-transform">
                                    <ExternalLink className="w-6 h-6 group-hover:rotate-45 transition-transform" />
                              </a>
                        ) : (
                              <button className="w-16 h-16 rounded-full bg-anyflow-lime text-black flex items-center justify-center flex-shrink-0 group-hover:scale-110 active:scale-95 transition-transform">
                                    <ExternalLink className="w-6 h-6 group-hover:rotate-45 transition-transform" />
                              </button>
                        )}
                  </div>
            </div>
      );
};
