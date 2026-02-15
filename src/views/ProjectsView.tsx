import { PROJECTS_DATA } from '@/data/projects';
import { Server, ShieldAlert, Cpu, Lock, Archive } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export const ProjectsView = () => {
      return (
            <section className="py-24 bg-slate-950 px-6 font-sans">
                  <div className="container mx-auto">
                        <div className="flex items-center gap-4 mb-16">
                              <div className="h-px flex-1 bg-slate-800" />
                              <h2 className="text-2xl font-mono font-bold text-slate-400 tracking-widest flex items-center gap-2">
                                    <Archive className="w-5 h-5 text-emerald-500" />
                                    CASE_LOGS // CLASSIFIED
                              </h2>
                              <div className="h-px flex-1 bg-slate-800" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              {PROJECTS_DATA.map((project, index) => (
                                    <motion.div
                                          key={project.id}
                                          initial={{ opacity: 0, y: 20 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: true }}
                                          transition={{ duration: 0.5, delay: index * 0.1 }}
                                          className="group relative bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 p-8 rounded-sm overflow-hidden"
                                          whileHover={{
                                                boxShadow: "0 0 20px -5px rgba(16, 185, 129, 0.2)",
                                                scale: 1.01
                                          }}
                                    >
                                          {/* Card Header Decoration */}
                                          <div className="absolute top-0 left-0 w-full h-1 bg-slate-800 group-hover:bg-emerald-500 transition-colors duration-300" />
                                          <div className="absolute top-4 right-4 text-xs font-mono text-slate-600 group-hover:text-emerald-500 transition-colors">
                                                ID: {project.id}
                                          </div>

                                          {/* Secure Badge */}
                                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-950 border border-slate-800 rounded mb-6 text-xs font-mono text-slate-400">
                                                {project.type === 'Critical Safety' && <ShieldAlert className="w-3 h-3 text-red-500" />}
                                                {project.type === 'High Scale' && <Server className="w-3 h-3 text-blue-500" />}
                                                {(project.type === 'GovTech' || project.type === 'HealthTech') && <Cpu className="w-3 h-3 text-amber-500" />}
                                                {project.type.toUpperCase()}
                                          </div>

                                          <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-emerald-400 transition-colors">
                                                {project.title}
                                          </h3>

                                          <p className="text-slate-400 mb-6 leading-relaxed border-l-2 border-slate-800 pl-4 py-1 text-sm">
                                                {project.description}
                                          </p>

                                          <div className="flex flex-wrap gap-2 mb-8">
                                                {project.stack.map((tech) => (
                                                      <span key={tech} className="px-2 py-1 bg-slate-950 text-slate-500 text-xs font-mono border border-slate-800 rounded">
                                                            {tech}
                                                      </span>
                                                ))}
                                          </div>

                                          <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-800/[0.5]">
                                                <div className="flex items-center gap-2">
                                                      <span className={cn(
                                                            "w-2 h-2 rounded-full animate-pulse",
                                                            project.status === 'Production' ? "bg-emerald-500" : "bg-amber-500"
                                                      )} />
                                                      <span className="text-xs font-mono text-slate-500 uppercase">{project.status}</span>
                                                </div>

                                                <button className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-emerald-500 transition-colors uppercase tracking-wider">
                                                      <Lock className="w-3 h-3" />
                                                      Restricted Access
                                                </button>
                                          </div>
                                    </motion.div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};
