import { getProjects } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const ProjectsView = () => {
      const { t } = useLanguage();
      const projects = getProjects(t);
      const containerRef = useRef<HTMLElement>(null);
      const titleRef = useRef<HTMLHeadingElement>(null);

      useGSAP(() => {
            const cards = gsap.utils.toArray('.project-card');

            // Title parallax
            gsap.to(titleRef.current, {
                  yPercent: 30,
                  ease: "none",
                  scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                  }
            });

            cards.forEach((card: any) => {
                  gsap.fromTo(card,
                        { y: 150, opacity: 0, scale: 0.95 },
                        {
                              y: 0,
                              opacity: 1,
                              scale: 1,
                              duration: 1.2,
                              ease: "power3.out",
                              scrollTrigger: {
                                    trigger: card,
                                    start: "top 80%",
                              }
                        }
                  );
            });
      }, { scope: containerRef });

      return (
            <section ref={containerRef} className="py-40 bg-anyflow-lime px-6 font-body relative overflow-hidden">

                  {/* Huge background text */}
                  <h2 ref={titleRef} className="absolute left-6 top-10 text-[14vw] font-display font-black leading-none opacity-10 tracking-tighter text-black pointer-events-none">
                        OUR WORK
                  </h2>

                  <div className="container mx-auto relative z-10 max-w-7xl pt-24">
                        <div className="mb-24">
                              <h2 className="text-5xl md:text-7xl font-display font-black uppercase text-anyflow-black leading-[0.85] tracking-tighter max-w-2xl">
                                    {t.projects.title || "SELECTED WORKS FOR ELITE ENGINEERING"}
                              </h2>
                        </div>

                        <div className="flex flex-col gap-16">
                              {projects.map((project, index) => (
                                    <div
                                          key={project.id}
                                          className={`project-card group relative bg-anyflow-black text-white p-10 md:p-16 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                                    >
                                          {/* Decorative Image/Video Placeholder */}
                                          <div className="w-full md:w-1/2 aspect-[4/3] bg-white/5 rounded-[2rem] overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                                                <div className="absolute inset-0 bg-gradient-to-br from-anyflow-lime/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                                {/* Fallback pattern for now */}
                                                <div className="w-full h-full border border-white/10 rounded-[2rem] flex flex-col items-center justify-center">
                                                      <span className="font-mono text-white/20 text-sm tracking-widest">[ PROJECT MEDIA ]</span>
                                                </div>
                                          </div>

                                          <div className="w-full md:w-1/2 flex flex-col justify-between h-full py-8">
                                                <div>
                                                      <div className="flex items-center gap-4 mb-8">
                                                            <span className="px-4 py-1 border border-anyflow-lime text-anyflow-lime rounded-full text-xs font-bold uppercase tracking-widest">
                                                                  {project.status || "COMPLETED"}
                                                            </span>
                                                      </div>
                                                      <h3 className="text-4xl md:text-6xl font-display font-black mb-6 leading-[0.9] tracking-tighter group-hover:text-anyflow-lime transition-colors duration-500">
                                                            {project.title}
                                                      </h3>
                                                      <p className="text-gray-400 leading-relaxed text-lg lg:text-xl font-medium max-w-xl">
                                                            {project.description}
                                                      </p>
                                                </div>

                                                <div className="mt-12">
                                                      <div className="flex flex-wrap gap-3 mb-10">
                                                            {project.stack.map((tech) => (
                                                                  <span key={tech} className="px-5 py-2 bg-white/5 text-white text-sm font-bold border border-white/10 rounded-full hover:bg-white hover:text-black transition-colors cursor-default">
                                                                        {tech}
                                                                  </span>
                                                            ))}
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};
