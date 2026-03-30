import { useProjects } from '@/hooks/useData';
import { ProjectCard } from '@/components/ProjectCard';

export const ProjectsView = () => {
      const PROJECTS = useProjects();
      return (
            <section
                  id="projects-section"
                  className="relative min-h-[100svh] py-32 px-6 md:px-12 bg-core-bg text-core-text"
            >
                  <div className="max-w-[1400px] mx-auto w-full relative z-10">
                        {/* Section Header */}
                        <div className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
                              <div>
                                    <div className="font-mono text-anyflow-lime text-xs tracking-widest uppercase mb-4 font-bold border border-core-border inline-block px-4 py-2 rounded-sm">
                                          003 — Case Logs
                                    </div>
                                    <h2 className="font-display font-extrabold text-[4rem] md:text-[6rem] leading-[0.9] tracking-tighter uppercase">
                                          CONFIDENTIAL
                                          <br />
                                          <span className="text-white/30 font-display">OPERATIONS</span>
                                    </h2>
                              </div>
                              <p className="font-body max-w-sm text-lg font-medium">
                                    Systems built to withstand harsh environments, processing sensitive data with zero trust implicitly guaranteed.
                              </p>
                        </div>

                        {/* Projects Asymmetric Flow */}
                        <div className="flex flex-col gap-16 lg:gap-32 w-full mt-12">
                              {PROJECTS.map((project, index) => (
                                    <div key={project.id} className={`${index % 2 === 1 ? "lg:ml-auto lg:w-[60%]" : "lg:w-[65%]"} will-change-transform`}>
                                          <ProjectCard
                                                project={project}
                                                index={index}
                                          />
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};
