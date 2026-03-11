import { useProfile, useSkills } from '@/hooks/useData';
import { useLanguage } from '@/context/LanguageContext';
import { Download, ShieldCheck, MapPin, Cpu, Briefcase, GraduationCap, Globe } from 'lucide-react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const CVSection = () => {
      const PROFILE = useProfile();
      const SKILLS = useSkills();
      const { t } = useLanguage();
      const containerRef = useRef<HTMLElement>(null);
      const card1Ref = useRef<HTMLDivElement>(null);
      const card2Ref = useRef<HTMLDivElement>(null);
      const card3Ref = useRef<HTMLDivElement>(null);

      useEffect(() => {
            const ctx = gsap.context(() => {
                  gsap.fromTo(card1Ref.current, { y: 100 }, { y: -100, ease: "none", scrollTrigger: { trigger: containerRef.current, start: "top bottom", end: "bottom top", scrub: true } });
                  gsap.fromTo(card2Ref.current, { y: 150 }, { y: -150, ease: "none", scrollTrigger: { trigger: containerRef.current, start: "top bottom", end: "bottom top", scrub: true } });
                  gsap.fromTo(card3Ref.current, { y: 200 }, { y: -200, ease: "none", scrollTrigger: { trigger: containerRef.current, start: "top bottom", end: "bottom top", scrub: true } });
            }, containerRef);
            return () => ctx.revert();
      }, []);

      const experienceEntries = [
            { title: t.surface.cv_exp1_title, company: t.surface.cv_exp1_company, desc: t.surface.cv_exp1_desc },
            { title: t.surface.cv_exp2_title, company: t.surface.cv_exp2_company, desc: t.surface.cv_exp2_desc },
      ];

      return (
            <section
                  ref={containerRef}
                  id="cv"
                  className="relative min-h-[200svh] py-32 px-6 md:px-12 bg-anyflow-bg text-anyflow-black border-t border-black/5"
            >
                  <div className="max-w-[1400px] mx-auto w-full">
                        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                              <div>
                                    <h2 className="font-display font-extrabold text-[4rem] md:text-[6rem] leading-[0.9] tracking-tighter uppercase whitespace-pre-line">
                                          {t.surface.cv_title}
                                          <br />
                                          <span className="text-anyflow-lime italic">{t.surface.cv_title_accent}</span> {t.surface.cv_title_end}
                                    </h2>
                                    <p className="text-gray-400 font-mono mt-6 max-w-md uppercase tracking-widest text-xs">
                                          {t.surface.cv_subtitle}
                                    </p>
                              </div>
                              <button className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-anyflow-lime hover:text-black transition-colors group">
                                    <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                                    {t.commands.download_cv}
                              </button>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                              {/* Card 1: Identity */}
                              <div ref={card1Ref} className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-sm border border-black/5 flex flex-col justify-between aspect-square lg:aspect-auto">
                                    <div className="flex items-start justify-between">
                                          <div className="w-16 h-16 rounded-full bg-anyflow-lime flex items-center justify-center shadow-lg shadow-anyflow-lime/20">
                                                <ShieldCheck className="text-black w-8 h-8" />
                                          </div>
                                          <div className="bg-gray-100 text-gray-500 font-mono text-[10px] px-3 py-1 rounded-full uppercase tracking-widest">
                                                {t.surface.cv_profile}: 001
                                          </div>
                                    </div>
                                    <div className="mt-12">
                                          <h3 className="font-display font-bold text-4xl tracking-tighter mb-2 italic">
                                                {PROFILE.name}
                                          </h3>
                                          <p className="font-mono text-sm tracking-wide text-gray-600 mb-6 uppercase">
                                                {PROFILE.role}
                                          </p>
                                          <div className="flex items-center gap-2 text-gray-500">
                                                <MapPin className="w-4 h-4" />
                                                <span className="text-sm font-medium">{PROFILE.location} / {PROFILE.ops}</span>
                                          </div>
                                    </div>
                              </div>

                              {/* Card 2: Bio */}
                              <div ref={card2Ref} className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-sm border border-black/5 flex flex-col lg:col-span-2">
                                    <div className="flex items-start justify-between mb-12">
                                          <Cpu className="text-gray-300 w-10 h-10" />
                                          <div className="bg-gray-100 text-gray-500 font-mono text-[10px] px-3 py-1 rounded-full uppercase tracking-widest">
                                                {t.hero.stats.systems.split(' ')[0]}: 002
                                          </div>
                                    </div>
                                    <div className="flex-grow flex items-end">
                                          <p className="font-body text-xl md:text-[1.75rem] leading-snug font-medium text-gray-800">
                                                "{t.hero.description}"
                                          </p>
                                    </div>
                              </div>

                              {/* Card 3: Experience & Info Grid */}
                              <div ref={card3Ref} className="bg-black rounded-[2.5rem] p-10 md:p-12 shadow-sm flex flex-col lg:col-span-3 mt-12 mb-12">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-white">
                                          {/* Skills */}
                                          <div className="lg:col-span-2">
                                                <div className="flex items-center gap-4 mb-8">
                                                      <Cpu className="text-anyflow-lime w-6 h-6" />
                                                      <h3 className="font-display font-bold text-2xl uppercase tracking-tighter">{t.surface.cv_capabilities}</h3>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                      {SKILLS.map((skill, i) => (
                                                            <span key={i} className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full font-mono text-[11px] tracking-wider uppercase text-gray-300">
                                                                  {skill}
                                                            </span>
                                                      ))}
                                                </div>
                                          </div>

                                          {/* Languages */}
                                          <div className="lg:col-span-1">
                                                <div className="flex items-center gap-4 mb-8">
                                                      <Globe className="text-anyflow-lime w-6 h-6" />
                                                      <h3 className="font-display font-bold text-2xl uppercase tracking-tighter">{t.surface.cv_languages}</h3>
                                                </div>
                                                <ul className="space-y-4 font-mono text-xs uppercase tracking-widest">
                                                      <li className="flex justify-between border-b border-white/5 pb-2">
                                                            <span className="text-gray-400">FR</span> <span>{t.surface.cv_lang_fr}</span>
                                                      </li>
                                                      <li className="flex justify-between border-b border-white/5 pb-2">
                                                            <span className="text-gray-400">PT</span> <span>{t.surface.cv_lang_pt}</span>
                                                      </li>
                                                      <li className="flex justify-between border-b border-white/5 pb-2">
                                                            <span className="text-gray-400">EN</span> <span>{t.surface.cv_lang_en}</span>
                                                      </li>
                                                      <li className="flex justify-between border-b border-white/5 pb-2">
                                                            <span className="text-gray-400">ES</span> <span>{t.surface.cv_lang_es}</span>
                                                      </li>
                                                </ul>
                                          </div>

                                          {/* Education */}
                                          <div className="lg:col-span-1">
                                                <div className="flex items-center gap-4 mb-8">
                                                      <GraduationCap className="text-anyflow-lime w-6 h-6" />
                                                      <h3 className="font-display font-bold text-2xl uppercase tracking-tighter">{t.surface.cv_education}</h3>
                                                </div>
                                                <div className="font-mono text-xs italic tracking-tight text-anyflow-lime mb-2">2018 - 2025</div>
                                                <div className="font-bold text-sm mb-1 uppercase tracking-tighter">{t.surface.cv_education_degree}</div>
                                                <div className="text-gray-400 text-xs uppercase tracking-widest">{t.surface.cv_education_focus}</div>
                                          </div>
                                    </div>
                              </div>

                              {/* Experience List - full width below */}
                              <div className="lg:col-span-3 space-y-4">
                                    <div className="flex items-center gap-4 mb-8 text-black mt-12">
                                          <Briefcase className="text-anyflow-lime w-8 h-8" />
                                          <h3 className="font-display font-bold text-4xl uppercase tracking-tighter">{t.surface.cv_experience}</h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                          {experienceEntries.map((exp, i) => (
                                                <div key={i} className="bg-white border border-black/5 hover:border-anyflow-lime/50 p-8 rounded-[2rem] transition-all duration-500 group">
                                                      <div className="flex justify-between items-start mb-6">
                                                            <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-black group-hover:bg-anyflow-lime transition-colors">
                                                                  <Briefcase className="w-5 h-5" />
                                                            </div>
                                                            <div className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">EXPERIENCE: 00{i+4}</div>
                                                      </div>
                                                      <h4 className="font-display font-bold text-2xl mb-1 uppercase">{exp.title}</h4>
                                                      <div className="font-mono text-[11px] text-anyflow-lime mb-6 uppercase tracking-widest">{exp.company}</div>
                                                      <p className="text-gray-600 text-sm leading-relaxed">{exp.desc}</p>
                                                </div>
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
};
