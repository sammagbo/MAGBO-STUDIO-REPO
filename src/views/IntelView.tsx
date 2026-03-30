import { useIntelBriefings } from '@/hooks/useData';
import { Terminal, ChevronRight } from 'lucide-react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const IntelView = () => {
      const INTEL_BRIEFINGS = useIntelBriefings();

      const getTlpStyle = (tlp: string) => {
            if (tlp === 'TLP:AMBER') return 'text-amber-500 border-amber-500/30 bg-amber-500/10';
            if (tlp === 'TLP:RED') return 'text-red-500 border-red-500/30 bg-red-500/10';
            if (tlp === 'TLP:GREEN') return 'text-green-500 border-green-500/30 bg-green-500/10';
            return 'text-white/60 border-white/20 bg-white/5';
      };

      const containerRef = useRef<HTMLElement>(null);

      useEffect(() => {
            const ctx = gsap.context(() => {
                  gsap.from(".intel-card", {
                        y: 20,
                        opacity: 0,
                        duration: 0.5,
                        stagger: 0.1,
                        scrollTrigger: {
                              trigger: containerRef.current,
                              start: "top 80%",
                        }
                  });
            }, containerRef);
            return () => ctx.revert();
      }, []);

      return (
            <section ref={containerRef} className="relative pb-32 px-6 md:px-12 bg-core-bg text-core-text font-mono border-b border-white/5">
                  <div className="max-w-[1400px] mx-auto w-full">

                        <div className="flex items-center gap-4 mb-12">
                              <Terminal className="text-anyflow-lime w-6 h-6" />
                              <h3 className="text-2xl font-bold text-white tracking-widest uppercase">
                                    INTEL_BRIEFINGS
                              </h3>
                        </div>

                        {/* Asymmetric staggered layout */}
                        <div className="flex flex-col gap-6">
                              {/* First briefing — full width feature */}
                              {INTEL_BRIEFINGS[0] && (
                                    <div
                                          className="intel-card group bg-core-surface border border-core-border p-8 md:p-10 hover:border-anyflow-lime/30 transition-colors cursor-pointer relative overflow-hidden bevel-cut"
                                    >
                                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-anyflow-lime/30 group-hover:bg-anyflow-lime transition-colors" />
                                          <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                                                <div className="flex-1">
                                                      <div className="flex items-center gap-4 mb-6">
                                                            <div className={`text-[10px] tracking-widest px-2 py-1 border ${getTlpStyle(INTEL_BRIEFINGS[0].tlp)}`}>
                                                                  {INTEL_BRIEFINGS[0].tlp}
                                                            </div>
                                                            <div className="text-core-dim text-xs">
                                                                  {INTEL_BRIEFINGS[0].date}
                                                            </div>
                                                      </div>

                                                      <h4 className="text-white font-display font-bold text-2xl md:text-3xl mb-4 group-hover:text-anyflow-lime transition-colors tracking-tight">
                                                            {INTEL_BRIEFINGS[0].title}
                                                      </h4>

                                                      <p className="text-sm text-core-dim leading-relaxed max-w-2xl">
                                                            {INTEL_BRIEFINGS[0].summary}
                                                      </p>
                                                </div>

                                                <div className="flex items-center gap-2 text-xs text-anyflow-lime font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0 shrink-0 mt-2">
                                                      DECRYPT_FILE <ChevronRight className="w-4 h-4" />
                                                </div>
                                          </div>
                                    </div>
                              )}

                              {/* Remaining briefings — asymmetric 60/40 alternating */}
                              <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6">
                                    {INTEL_BRIEFINGS.slice(1).map((briefing, i) => (
                                          <div
                                                key={briefing.id}
                                                className={`intel-card group bg-core-surface border border-core-border p-8 hover:border-anyflow-lime/30 transition-colors cursor-pointer relative overflow-hidden bevel-cut-sm ${
                                                      i % 2 === 1 ? 'md:col-start-1' : ''
                                                }`}
                                          >
                                                <div className="flex justify-between items-start mb-6">
                                                      <div className={`text-[10px] tracking-widest px-2 py-1 border ${getTlpStyle(briefing.tlp)}`}>
                                                            {briefing.tlp}
                                                      </div>
                                                      <div className="text-core-dim text-xs">
                                                            {briefing.date}
                                                      </div>
                                                </div>

                                                <h4 className="text-white font-bold text-lg mb-4 group-hover:text-anyflow-lime transition-colors">
                                                      {briefing.title}
                                                </h4>

                                                <p className="text-sm text-core-dim leading-relaxed mb-6">
                                                      {briefing.summary}
                                                </p>

                                                <div className="flex items-center gap-2 text-xs text-anyflow-lime font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                                                      DECRYPT_FILE <ChevronRight className="w-4 h-4" />
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>

                  </div>
            </section>
      );
};
