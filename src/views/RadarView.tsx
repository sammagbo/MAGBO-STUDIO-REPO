import { Radar, Disc, PlayCircle, StopCircle, Info } from 'lucide-react';
import { getRadarData, RadarQuadrant } from '@/data/radar';
import { useLanguage } from '@/context/LanguageContext';

export const RadarView = () => {
      const { t } = useLanguage();
      const radarData = getRadarData(t);

      const renderQuadrant = (quadrant: RadarQuadrant, title: string, icon: React.ReactNode, colorClass: string, bgClass: string) => {
            const items = radarData.filter(item => item.quadrant === quadrant);

            return (
                  <div className={`p-6 border border-slate-800 rounded bg-opacity-30 ${bgClass} relative overflow-hidden group glow-lime-hover`}>
                        <div className="flex items-center gap-3 mb-6">
                              <div className={`p-2 rounded bg-slate-950 border border-slate-800 ${colorClass}`}>
                                    {icon}
                              </div>
                              <h3 className="font-mono font-bold text-slate-200 tracking-wider text-sm">{title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-3">
                              {items.map(item => (
                                    <div key={item.id} className="relative group/idx">
                                          <div className="px-3 py-1.5 bg-slate-950 border border-slate-700 text-slate-300 text-xs font-mono rounded cursor-help hover:border-slate-500 transition-colors">
                                                {item.name}
                                          </div>

                                          {/* Tooltip */}
                                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-slate-900 border border-slate-700 rounded shadow-xl opacity-0 group-hover/idx:opacity-100 transition-opacity pointer-events-none z-20">
                                                <p className="text-[10px] text-slate-400 leading-tight">{item.description}</p>
                                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-700"></div>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            );
      };

      return (
            <section className="py-24 bg-slate-950 px-6 border-t border-slate-900">
                  <div className="container mx-auto">
                        <div className="flex items-center gap-4 mb-16">
                              <div className="h-px flex-1 bg-slate-800" />
                              <h2 className="text-2xl font-mono font-bold text-slate-400 tracking-widest flex items-center gap-2">
                                    <Radar className="w-5 h-5 text-indigo-500" />
                                    {t.radar.title}
                              </h2>
                              <div className="h-px flex-1 bg-slate-800" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                              {renderQuadrant('adopt', t.radar.quadrants.adopt, <Disc className="w-4 h-4" />, 'text-emerald-500', 'bg-emerald-900/10')}
                              {renderQuadrant('trial', t.radar.quadrants.trial, <PlayCircle className="w-4 h-4" />, 'text-blue-500', 'bg-blue-900/10')}
                              {renderQuadrant('assess', t.radar.quadrants.assess, <Info className="w-4 h-4" />, 'text-amber-500', 'bg-amber-900/10')}
                              {renderQuadrant('hold', t.radar.quadrants.hold, <StopCircle className="w-4 h-4" />, 'text-red-500', 'bg-red-900/10')}
                        </div>
                  </div>
            </section>
      );
};
