import { SERVICES_DATA, HISTORY_DATA } from '@/data/services';
import { Shield, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const ExpertiseView = () => {
      const { t } = useLanguage();

      return (
            <section className="py-24 bg-slate-950 border-t border-slate-900 relative px-6">

                  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

                        {/* Services Matrix */}
                        <div>
                              <div className="flex items-center gap-2 mb-12 text-emerald-500">
                                    <Shield className="w-5 h-5" />
                                    <h2 className="font-mono font-bold tracking-widest text-slate-100">{t.expertise.capabilities}</h2>
                              </div>

                              <div className="space-y-6">
                                    {SERVICES_DATA.map((service) => (
                                          <div key={service.id} className="bg-slate-900/50 border border-slate-800 p-6 rounded hover:border-emerald-500/30 transition-colors group">
                                                <div className="flex items-start gap-4">
                                                      <div className="p-3 bg-slate-950 border border-slate-800 rounded group-hover:border-emerald-500/50 transition-colors">
                                                            <service.icon className="w-6 h-6 text-emerald-500" />
                                                      </div>
                                                      <div>
                                                            <h3 className="text-xl font-bold text-slate-100 mb-2">{service.title}</h3>
                                                            <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                                                            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-600">
                                                                  <span>{t.expertise.risk_level}:</span>
                                                                  <span className={service.riskLevel === 'Critical' ? 'text-red-500' : 'text-amber-500'}>
                                                                        [{service.riskLevel.toUpperCase()}]
                                                                  </span>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>

                        {/* History / Audit Log */}
                        <div>
                              <div className="flex items-center gap-2 mb-12 text-emerald-500">
                                    <Clock className="w-5 h-5" />
                                    <h2 className="font-mono font-bold tracking-widest text-slate-100">{t.expertise.events}</h2>
                              </div>

                              <div className="relative border-l border-slate-800 ml-3 space-y-12">
                                    {HISTORY_DATA.map((item, index) => (
                                          <div key={index} className="relative pl-8">
                                                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-950 border border-emerald-500 mb-2" />

                                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                                                      <span className="font-mono text-emerald-500 font-bold">{item.year}</span>
                                                      <span className="hidden sm:inline text-slate-700">//</span>
                                                      <span className="font-mono text-slate-300 text-sm tracking-wider">{item.event}</span>
                                                </div>

                                                <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                                                      {item.description}
                                                </p>
                                          </div>
                                    ))}

                                    <div className="relative pl-8 pt-8">
                                          <div className="absolute -left-[5px] top-10 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                          <div className="inline-block px-3 py-1 bg-emerald-900/20 text-emerald-500 text-xs font-mono border border-emerald-500/30 rounded">
                                                {t.expertise.current_state}
                                          </div>
                                    </div>
                              </div>
                        </div>

                  </div>
            </section>
      );
};
