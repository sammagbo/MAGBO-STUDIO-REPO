import { Shield, Lock, FileText, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const IntelView = () => {
      const { t } = useLanguage();

      const briefings = [
            {
                  id: 'intel-001',
                  title: 'DDoS Mitigation Strategies for Gov Infrastructure',
                  date: '2024-03-01',
                  tlp: 'WHITE',
                  summary: 'Analysis of recent volumetric attacks against critical sector endpoints and deployed countermeasures.',
            },
            {
                  id: 'intel-002',
                  title: 'Zero-Trust Implementation in Healthcare Environments',
                  date: '2024-02-15',
                  tlp: 'AMBER',
                  summary: 'Case study on preventing lateral movement within hospital networks while maintaining clinical workflow efficiency.',
            },
            {
                  id: 'intel-003',
                  title: 'Supply Chain Attack Analysis: 2024 Vector Review',
                  date: '2024-01-20',
                  tlp: 'WHITE',
                  summary: 'Comprehensive review of software supply chain vulnerabilities identified in Q4 2023 / Q1 2024.',
            },
            {
                  id: 'intel-004',
                  title: 'Quantum-Resistant Encryption Standards',
                  date: '2023-12-10',
                  tlp: 'AMBER',
                  summary: 'Preparing federal agencies for the transition to post-quantum cryptographic algorithms.',
            }
      ];

      return (
            <section className="py-24 bg-slate-950 px-6 font-sans border-t border-slate-900">
                  <div className="container mx-auto max-w-4xl">

                        <div className="flex items-center gap-4 mb-16">
                              <div className="h-px flex-1 bg-slate-800" />
                              <div className="flex items-center gap-2 text-slate-400">
                                    <FileText className="w-5 h-5 text-emerald-500" />
                                    <h2 className="text-2xl font-mono font-bold tracking-widest">{t.intel.title}</h2>
                              </div>
                              <div className="h-px flex-1 bg-slate-800" />
                        </div>

                        <div className="flex justify-center mb-12">
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-500 tracking-widest">
                                    <Shield className="w-3 h-3" />
                                    {t.intel.subtitle}
                              </div>
                        </div>

                        <div className="space-y-4">
                              {briefings.map((item) => (
                                    <div key={item.id} className="group relative bg-slate-900/40 border border-slate-800 hover:border-emerald-500/30 p-6 rounded transition-all hover:bg-slate-900/60">
                                          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                                <div>
                                                      <div className="flex items-center gap-3 mb-2">
                                                            <span className={`px-2 py-0.5 text-[10px] font-bold font-mono rounded border ${item.tlp === 'WHITE'
                                                                  ? 'bg-slate-800 text-slate-300 border-slate-700'
                                                                  : 'bg-amber-900/20 text-amber-500 border-amber-900/40'
                                                                  }`}>
                                                                  TLP:{item.tlp}
                                                            </span>
                                                            <span className="text-xs font-mono text-slate-500 uppercase">
                                                                  {t.intel.disclosed}: {item.date}
                                                            </span>
                                                      </div>
                                                      <h3 className="text-xl font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">
                                                            {item.title}
                                                      </h3>
                                                </div>

                                                {item.tlp === 'AMBER' && (
                                                      <Lock className="w-4 h-4 text-amber-500/50 shrink-0" />
                                                )}
                                          </div>

                                          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mb-6">
                                                {item.summary}
                                          </p>

                                          <div className="flex items-center justify-end">
                                                {item.tlp === 'WHITE' ? (
                                                      <button className="text-xs font-mono font-bold text-emerald-500 flex items-center gap-2 hover:gap-3 transition-all uppercase">
                                                            {t.intel.read_more}
                                                            <ChevronRight className="w-3 h-3" />
                                                      </button>
                                                ) : (
                                                      <button className="text-xs font-mono font-bold text-amber-500/80 flex items-center gap-2 hover:text-amber-500 transition-colors uppercase border border-amber-900/30 px-3 py-1.5 rounded hover:bg-amber-900/10">
                                                            <Lock className="w-3 h-3" />
                                                            {t.intel.access_btn}
                                                      </button>
                                                )}
                                          </div>
                                    </div>
                              ))}
                        </div>

                        <div className="mt-16 pt-8 border-t border-slate-900 text-center">
                              <p className="text-xs text-slate-600 font-mono">
                                    MAGBO_STUDIO // INTELLIGENCE_DIVISION // AUTH_REQUIRED_FOR_RESTRICTED_ASSETS
                              </p>
                        </div>

                  </div>
            </section>
      );
};
