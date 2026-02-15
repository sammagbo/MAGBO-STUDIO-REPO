import { useState, useEffect } from 'react';
import { Shield, Activity, Server, CheckCircle2, History } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const StatusView = () => {
      const { t } = useLanguage();
      const [threatCount, setThreatCount] = useState(14502);

      useEffect(() => {
            const interval = setInterval(() => {
                  setThreatCount(prev => prev + Math.floor(Math.random() * 3));
            }, 3000);
            return () => clearInterval(interval);
      }, []);

      const services = [
            { id: 'api', name: t.status.services.api, status: 'operational' },
            { id: 'portals', name: t.status.services.portals, status: 'operational' },
            { id: 'encryption', name: t.status.services.encryption, status: 'secure' },
      ];

      return (
            <section className="py-24 bg-slate-950 px-6 font-sans border-t border-slate-900">
                  <div className="container mx-auto max-w-5xl">

                        <div className="flex items-center gap-2 mb-12 text-emerald-500">
                              <Activity className="w-5 h-5" />
                              <h2 className="font-mono font-bold tracking-widest text-slate-100">{t.status.title}</h2>
                        </div>

                        {/* Metrics Dashboard */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                              {/* Uptime */}
                              <div className="bg-slate-900/50 border border-slate-800 p-6 rounded relative overflow-hidden group">
                                    <div className="flex justify-between items-start mb-4">
                                          <span className="text-xs font-mono text-slate-500 uppercase">{t.status.uptime}</span>
                                          <Activity className="w-4 h-4 text-emerald-500" />
                                    </div>
                                    <div className="text-4xl font-bold text-slate-100 mb-2">99.99%</div>

                                    {/* Fake Graph */}
                                    <div className="h-8 flex items-end gap-1">
                                          {[...Array(20)].map((_, i) => (
                                                <div
                                                      key={i}
                                                      className="w-full bg-emerald-500/20 rounded-t-sm"
                                                      style={{ height: `${Math.random() * 60 + 40}%` }}
                                                />
                                          ))}
                                    </div>
                              </div>

                              {/* Latency */}
                              <div className="bg-slate-900/50 border border-slate-800 p-6 rounded relative overflow-hidden group">
                                    <div className="flex justify-between items-start mb-4">
                                          <span className="text-xs font-mono text-slate-500 uppercase">{t.status.latency}</span>
                                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    </div>
                                    <div className="text-4xl font-bold text-slate-100 mb-2">24ms</div>
                                    <div className="text-xs text-slate-500 font-mono">Global CDN Average</div>
                              </div>

                              {/* Threats */}
                              <div className="bg-slate-900/50 border border-slate-800 p-6 rounded relative overflow-hidden group">
                                    <div className="flex justify-between items-start mb-4">
                                          <span className="text-xs font-mono text-slate-500 uppercase">{t.status.threats}</span>
                                          <Shield className="w-4 h-4 text-emerald-500" />
                                    </div>
                                    <div className="text-4xl font-bold text-slate-100 mb-2 font-mono">
                                          {threatCount.toLocaleString()}
                                    </div>
                                    <div className="text-xs text-emerald-500/80 font-mono flex items-center gap-1">
                                          <Shield className="w-3 h-3" />
                                          Active Protection
                                    </div>
                              </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                              {/* Services List */}
                              <div className="lg:col-span-2">
                                    <h3 className="text-sm font-bold text-slate-400 mb-6 flex items-center gap-2">
                                          <Server className="w-4 h-4" />
                                          SYSTEM_SERVICES
                                    </h3>
                                    <div className="space-y-4">
                                          {services.map(service => (
                                                <div key={service.id} className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded">
                                                      <div className="flex items-center gap-4">
                                                            <div className={`w-2 h-2 rounded-full ${service.status === 'secure' ? 'bg-emerald-500' : 'bg-emerald-500 animate-pulse'}`} />
                                                            <span className="font-mono text-slate-300 text-sm">{service.name}</span>
                                                      </div>
                                                      <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold uppercase tracking-wider">
                                                            {service.status === 'operational' ? t.status.operational : t.status.secure}
                                                            <CheckCircle2 className="w-4 h-4" />
                                                      </div>
                                                </div>
                                          ))}
                                    </div>
                              </div>

                              {/* Incident History */}
                              <div>
                                    <h3 className="text-sm font-bold text-slate-400 mb-6 flex items-center gap-2">
                                          <History className="w-4 h-4" />
                                          {t.status.history}
                                    </h3>
                                    <div className="relative border-l border-slate-800 ml-2 space-y-8">
                                          <div className="relative pl-6">
                                                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-600" />
                                                <div className="text-xs text-slate-500 font-mono mb-1">2024-03-10 // 04:00 UTC</div>
                                                <div className="text-slate-300 text-sm mb-2">{t.status.maintenance}</div>
                                                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-900/20 text-emerald-500 text-[10px] font-bold uppercase border border-emerald-500/20">
                                                      <CheckCircle2 className="w-3 h-3" />
                                                      {t.status.resolved}
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>

                  </div>
            </section>
      );
};
