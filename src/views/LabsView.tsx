import { useLanguage } from '@/context/LanguageContext';
import { Microscope, Terminal, Layers, Code, Play } from 'lucide-react';

export const LabsView = () => {
      const { t } = useLanguage();

      const labs = [
            {
                  id: 'MEDIA_OPS',
                  icon: <Play className="w-5 h-5" />,
                  data: t.labs.items.media_ops
            },
            {
                  id: 'JAVA_INIT',
                  icon: <Terminal className="w-5 h-5" />,
                  data: t.labs.items.java_init
            },
            {
                  id: 'IDENTITY_V1',
                  icon: <Layers className="w-5 h-5" />,
                  data: t.labs.items.identity
            }
      ];

      return (
            <section className="py-24 bg-slate-950 px-6 border-t border-slate-900">
                  <div className="container mx-auto">
                        <div className="flex items-center gap-4 mb-16">
                              <div className="h-px flex-1 bg-slate-800" />
                              <h2 className="text-2xl font-mono font-bold text-slate-400 tracking-widest flex items-center gap-2">
                                    <Microscope className="w-5 h-5 text-emerald-500" />
                                    {t.labs.title}
                              </h2>
                              <div className="h-px flex-1 bg-slate-800" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {labs.map((lab) => (
                                    <div key={lab.id} className="group relative bg-slate-900/50 border border-slate-800 p-6 hover:border-emerald-500/30 transition-all hover:bg-slate-900 glow-lime-hover">
                                          <div className="flex items-start justify-between mb-4">
                                                <div className="p-2 bg-slate-950 rounded border border-slate-800 text-emerald-500 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
                                                      {lab.icon}
                                                </div>
                                                <span className="text-[10px] font-mono text-slate-600 border border-slate-800 px-2 py-0.5 rounded group-hover:text-emerald-500/70 group-hover:border-emerald-500/30">
                                                      LAB_ID: {lab.id}
                                                </span>
                                          </div>

                                          <h3 className="font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">
                                                {lab.data.title}
                                          </h3>
                                          <p className="text-slate-500 text-xs font-mono mb-4 h-8">
                                                {lab.data.tagline}
                                          </p>

                                          <div className="space-y-4">
                                                <div className="flex flex-wrap gap-2">
                                                      {lab.data.stack.map((tech: string) => (
                                                            <span key={tech} className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-900">
                                                                  {tech}
                                                            </span>
                                                      ))}
                                                </div>

                                                <div className="pt-4 border-t border-slate-800/50 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                                      <p className="text-slate-400 text-xs leading-relaxed mb-4">
                                                            {lab.data.description}
                                                      </p>
                                                      <div className="flex gap-4">
                                                            <button className="text-xs font-bold text-emerald-500 hover:text-emerald-400 flex items-center gap-1 uppercase tracking-wider">
                                                                  <Code className="w-3 h-3" />
                                                                  {t.labs.view_source}
                                                            </button>
                                                            <button className="text-xs font-bold text-slate-400 hover:text-emerald-500 flex items-center gap-1 uppercase tracking-wider">
                                                                  {t.labs.preview}
                                                            </button>
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
