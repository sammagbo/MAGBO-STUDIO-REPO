import { useMetrics } from '@/hooks/useData';
import { Activity, ServerCrash, Shield, Zap, GitCommit } from 'lucide-react';
import { Scanlines } from '@/components/Scanlines';

export const StatusView = () => {
      const METRICS = useMetrics();
      return (
            <section className="relative py-24 px-6 md:px-12 bg-core-bg text-core-text font-mono border-t border-white/5">
                  <div className="max-w-[1400px] mx-auto w-full">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 pb-8 border-b border-core-border">
                              <div>
                                    <div className="text-anyflow-lime text-xs tracking-widest uppercase mb-4 flex items-center gap-3">
                                          <span className="w-2 h-2 bg-anyflow-lime animate-pulse shadow-[0_0_10px_rgba(187,253,106,0.5)]" />
                                          SYS_STATUS: ONLINE
                                    </div>
                                    <h2 className="font-display font-extrabold text-[3rem] md:text-[5rem] leading-[1] tracking-tighter uppercase text-white">
                                          SYSTEM CORE
                                    </h2>
                              </div>
                              <p className="text-xs text-core-dim tracking-widest max-w-[200px] text-right">
                                    LIVE TELEMETRY FROM GLOBAL INFRASTRUCTURE
                              </p>
                        </div>

                        {/* Metrics Dashboard — Asymmetric grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-4">
                              {/* Central Uptime Panel — spanning height, left accent */}
                              <div
                                    className="lg:row-span-2 bg-core-surface border border-core-border p-8 flex flex-col justify-between hover:scale-[0.98] transition-transform duration-300 relative overflow-hidden bevel-cut"
                              >
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-anyflow-lime" />
                                    <Scanlines />
                                    <div className="relative z-10 flex items-center justify-between mb-12">
                                          <Activity className="text-anyflow-lime w-6 h-6" />
                                          <span className="text-[10px] tracking-widest uppercase text-core-dim">UPTIME_90D</span>
                                    </div>
                                    <div className="relative z-10">
                                          <div className="font-display font-bold text-7xl text-white tracking-tighter mb-2">
                                                {METRICS.uptime}
                                          </div>
                                          <div className="text-anyflow-lime text-sm uppercase tracking-widest">
                                                Operational
                                          </div>
                                    </div>
                              </div>

                              {/* Latency */}
                              <div className="bg-core-surface border border-core-border p-6 flex flex-col justify-between bevel-cut-sm">
                                    <Zap className="text-core-dim w-5 h-5 mb-6" />
                                    <div>
                                          <div className="text-sm text-core-dim mb-1">LATENCY</div>
                                          <div className="text-2xl text-white font-bold">{METRICS.latency}</div>
                                    </div>
                              </div>

                              {/* Security Score — Accent border */}
                              <div className="bg-core-surface border border-anyflow-lime/20 p-6 flex flex-col justify-between relative overflow-hidden bevel-cut-sm">
                                    <div className="absolute inset-0 bg-anyflow-lime/5" />
                                    <Shield className="text-anyflow-lime w-5 h-5 mb-6 relative z-10" />
                                    <div className="relative z-10">
                                          <div className="text-sm text-anyflow-lime/80 mb-1">SECURITY SCORE</div>
                                          <div className="text-2xl text-anyflow-lime font-bold">{METRICS.securityScore}</div>
                                    </div>
                              </div>

                              {/* Deployments */}
                              <div className="bg-core-surface border border-core-border p-6 flex flex-col justify-between bevel-cut-sm">
                                    <GitCommit className="text-core-dim w-5 h-5 mb-6" />
                                    <div>
                                          <div className="text-sm text-core-dim mb-1">DEPLOYMENTS</div>
                                          <div className="text-2xl text-white font-bold">{METRICS.deploymentsThisMonth} <span className="text-xs text-core-dim">/mo</span></div>
                                    </div>
                              </div>

                              {/* Last Incident */}
                              <div className="bg-core-surface border border-core-border p-6 flex flex-col justify-between bevel-cut-sm">
                                    <ServerCrash className="text-core-dim w-5 h-5 mb-6" />
                                    <div>
                                          <div className="text-sm text-core-dim mb-1">LAST INCIDENT</div>
                                          <div className="text-sm text-white font-bold">{METRICS.lastIncident}</div>
                                    </div>
                              </div>
                        </div>

                        {/* Network Traffic — Full width bar at bottom */}
                        <div className="mt-4 bg-core-surface border border-core-border p-6 bevel-cut relative overflow-hidden">
                              <Scanlines className="opacity-50" />
                              <div className="relative z-10">
                                    <div className="text-xs text-core-dim tracking-widest mb-6">NETWORK_TRAFFIC</div>
                                    <div className="flex items-end gap-[3px] h-16">
                                          {[40, 70, 45, 90, 65, 85, 30, 60, 50, 80, 55, 75, 42, 88, 62, 48, 72, 58, 82, 38].map((h, i) => (
                                                <div
                                                      key={i}
                                                      className="flex-1 bg-anyflow-lime/20 hover:bg-anyflow-lime/50 transition-colors"
                                                      style={{ height: `${h}%`, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                                                />
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
};
