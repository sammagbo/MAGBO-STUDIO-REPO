import { METRICS } from '@/data/constants';
import { Activity, ServerCrash, Shield, Zap, GitCommit } from 'lucide-react';

export const StatusView = () => {
      return (
            <section className="relative py-24 px-6 md:px-12 bg-core-bg text-core-text font-mono border-t border-white/5">
                  <div className="max-w-[1400px] mx-auto w-full">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 pb-8 border-b border-core-border">
                              <div>
                                    <div className="text-anyflow-lime text-xs tracking-widest uppercase mb-4 flex items-center gap-3">
                                          <span className="w-2 h-2 bg-anyflow-lime rounded-full animate-pulse shadow-[0_0_10px_rgba(187,253,106,0.5)]"></span>
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

                        {/* Metrics Dashboard */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                              {/* Central Uptime Panel */}
                              <div
                                    className="col-span-1 sm:col-span-2 lg:col-span-2 bg-core-surface border border-core-border p-8 rounded-2xl flex flex-col justify-between hover:scale-[0.98] transition-transform duration-300"
                              >
                                    <div className="flex items-center justify-between mb-12">
                                          <Activity className="text-anyflow-lime w-6 h-6" />
                                          <span className="text-[10px] tracking-widest uppercase text-core-dim">UPTIME_90D</span>
                                    </div>
                                    <div>
                                          <div className="font-display font-bold text-7xl text-white tracking-tighter mb-2">
                                                {METRICS.uptime}
                                          </div>
                                          <div className="text-anyflow-lime text-sm uppercase tracking-widest">
                                                Operational
                                          </div>
                                    </div>
                              </div>

                              {/* Secondary Panels */}
                              <div className="flex flex-col gap-4">
                                    <div className="bg-core-surface border border-core-border p-6 rounded-2xl flex-1 flex flex-col justify-between">
                                          <Zap className="text-core-dim w-5 h-5 mb-6" />
                                          <div>
                                                <div className="text-sm text-core-dim mb-1">LATENCY</div>
                                                <div className="text-2xl text-white font-bold">{METRICS.latency}</div>
                                          </div>
                                    </div>
                                    <div className="bg-core-surface border border-core-border p-6 rounded-2xl flex-1 flex flex-col justify-between">
                                          <GitCommit className="text-core-dim w-5 h-5 mb-6" />
                                          <div>
                                                <div className="text-sm text-core-dim mb-1">DEPLOYMENTS</div>
                                                <div className="text-2xl text-white font-bold">{METRICS.deploymentsThisMonth} <span className="text-xs text-core-dim">/mo</span></div>
                                          </div>
                                    </div>
                              </div>

                              <div className="flex flex-col gap-4">
                                    <div className="bg-core-surface border border-anyflow-lime/20 p-6 rounded-2xl flex-1 flex flex-col justify-between relative overflow-hidden">
                                          <div className="absolute inset-0 bg-anyflow-lime/5"></div>
                                          <Shield className="text-anyflow-lime w-5 h-5 mb-6 relative z-10" />
                                          <div className="relative z-10">
                                                <div className="text-sm text-anyflow-lime/80 mb-1">SECURITY SCORE</div>
                                                <div className="text-2xl text-anyflow-lime font-bold">{METRICS.securityScore}</div>
                                          </div>
                                    </div>
                                    <div className="bg-core-surface border border-core-border p-6 rounded-2xl flex-1 flex flex-col justify-between">
                                          <ServerCrash className="text-core-dim w-5 h-5 mb-6" />
                                          <div>
                                                <div className="text-sm text-core-dim mb-1">LAST INCIDENT</div>
                                                <div className="text-sm text-white font-bold">{METRICS.lastIncident}</div>
                                          </div>
                                    </div>
                              </div>

                              {/* Graph Placeholder */}
                              <div className="col-span-1 sm:col-span-2 lg:col-span-1 bg-core-surface border border-core-border p-6 rounded-2xl flex flex-col justify-between opacity-50 grayscale">
                                    <div className="text-xs text-core-dim tracking-widest mb-6">NETWORK_TRAFFIC</div>
                                    <div className="flex items-end gap-1 h-20">
                                          {[40, 70, 45, 90, 65, 85, 30, 60, 50, 80].map((h, i) => (
                                                <div key={i} className="flex-1 bg-core-border rounded-t-sm" style={{ height: `${h}%` }}></div>
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
};
