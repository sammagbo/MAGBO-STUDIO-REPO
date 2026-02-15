import { ArrowRight, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export const HeroSection = () => {
      const { t } = useLanguage();

      return (
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

                  {/* Background Grid Effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

                  <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl">
                              <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-mono mb-6"
                              >
                                    <span className="relative flex h-2 w-2">
                                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    {t.hero.status}
                              </motion.div>

                              <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
                              >
                                    {t.hero.title_start} <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">{t.hero.title_gradient}</span><br />
                                    {t.hero.title_middle} <br />
                                    <span className="text-emerald-500">{t.hero.title_end}</span>
                              </motion.h1>

                              <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed font-mono"
                              >
                                    {t.hero.description.split("").map((char, index) => (
                                          <motion.span
                                                key={index}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.05, delay: 0.5 + index * 0.01 }}
                                          >
                                                {char}
                                          </motion.span>
                                    ))}
                              </motion.p>

                              <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.5 }}
                                    className="flex flex-col sm:flex-row gap-4"
                              >
                                    <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded flex items-center justify-center gap-2 transition-all">
                                          {t.hero.cta_primary}
                                          <ArrowRight className="w-4 h-4" />
                                    </button>
                                    <button className="px-8 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 rounded flex items-center justify-center gap-2 transition-all font-mono">
                                          {t.hero.cta_secondary}
                                          <Lock className="w-4 h-4" />
                                    </button>
                              </motion.div>

                              <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-8">
                                    <div>
                                          <div className="text-3xl font-bold text-white mb-1">50+</div>
                                          <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">{t.hero.stats.systems}</div>
                                    </div>
                                    <div>
                                          <div className="text-3xl font-bold text-white mb-1">99.99%</div>
                                          <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">{t.hero.stats.uptime}</div>
                                    </div>
                                    <div>
                                          <div className="text-3xl font-bold text-white mb-1">Zero</div>
                                          <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">{t.hero.stats.security}</div>
                                    </div>
                                    <div>
                                          <div className="text-3xl font-bold text-white mb-1">Global</div>
                                          <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">{t.hero.stats.global}</div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
};
