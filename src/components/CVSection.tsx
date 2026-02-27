import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const CVSection = () => {
      const { t } = useLanguage();
      const sectionRef = useRef<HTMLElement>(null);
      const headerRef = useRef<HTMLHeadingElement>(null);
      const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

      useGSAP(() => {
            // Animate section header
            gsap.fromTo(headerRef.current,
                  { y: 100, opacity: 0 },
                  {
                        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
                        scrollTrigger: {
                              trigger: headerRef.current,
                              start: 'top 80%',
                        }
                  }
            );

            // Stagger animate CV cards
            gsap.fromTo(cardRefs.current,
                  { y: 50, opacity: 0, scale: 0.95 },
                  {
                        y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out',
                        scrollTrigger: {
                              trigger: sectionRef.current,
                              start: 'top 60%',
                        }
                  }
            );
      }, { scope: sectionRef });

      return (
            <section ref={sectionRef} id="cv" className="py-32 px-6 bg-anyflow-bg border-t border-black/10 relative overflow-hidden">
                  <div className="container mx-auto max-w-[1600px] z-10 relative">

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
                              <h2 ref={headerRef} className="font-display font-black text-[10vw] md:text-[5.5vw] leading-[0.85] tracking-tighter uppercase max-w-4xl">
                                    {t.surface.cv_title} <br /> <span className="text-anyflow-lime drop-shadow-sm">{t.surface.cv_title_accent}</span> {t.surface.cv_title_end}
                              </h2>
                              <div className="text-xl md:text-2xl font-body font-medium max-w-md">
                                    <p>{t.surface.cv_subtitle}</p>
                              </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {/* Experience Card */}
                              <div ref={el => cardRefs.current[0] = el} className="bg-white rounded-[2rem] p-10 shadow-sm border border-black/5 hover:border-anyflow-lime transition-colors group">
                                    <h3 className="font-display font-bold text-3xl mb-8 group-hover:text-anyflow-lime transition-colors">{t.surface.cv_experience}</h3>
                                    <div className="space-y-8">
                                          <div className="border-l-2 border-black/10 pl-6 relative">
                                                <div className="absolute w-3 h-3 bg-anyflow-black rounded-full -left-[7px] top-2 group-hover:bg-anyflow-lime transition-colors" />
                                                <h4 className="font-bold text-xl">{t.surface.cv_exp1_title}</h4>
                                                <p className="text-gray-500 font-medium text-sm mb-2">{t.surface.cv_exp1_company}</p>
                                                <p className="text-gray-700 leading-relaxed">{t.surface.cv_exp1_desc}</p>
                                          </div>
                                          <div className="border-l-2 border-black/10 pl-6 relative">
                                                <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[7px] top-2" />
                                                <h4 className="font-bold text-xl">{t.surface.cv_exp2_title}</h4>
                                                <p className="text-gray-500 font-medium text-sm mb-2">{t.surface.cv_exp2_company}</p>
                                                <p className="text-gray-700 leading-relaxed">{t.surface.cv_exp2_desc}</p>
                                          </div>
                                    </div>
                              </div>

                              {/* Skills Card */}
                              <div ref={el => cardRefs.current[1] = el} className="bg-anyflow-black text-white rounded-[2rem] p-10 shadow-xl border border-white/10 hover:border-anyflow-lime transition-colors group">
                                    <h3 className="font-display font-bold text-3xl mb-8 group-hover:text-anyflow-lime transition-colors">{t.surface.cv_capabilities}</h3>
                                    <div className="flex flex-wrap gap-3">
                                          {['React / Next.js', 'PostgreSQL / Prisma', 'TypeScript', 'Node.js', 'GSAP Animation', 'Tailwind CSS', 'Docker / CI/CD', 'AWS / Vercel'].map((skill) => (
                                                <span key={skill} className="px-5 py-3 rounded-full border border-white/20 text-sm font-medium tracking-wide hover:bg-anyflow-lime hover:text-black hover:border-anyflow-lime transition-colors">
                                                      {skill}
                                                </span>
                                          ))}
                                    </div>
                              </div>

                              {/* Education & Languages Card */}
                              <div ref={el => cardRefs.current[2] = el} className="bg-anyflow-lime text-anyflow-black rounded-[2rem] p-10 shadow-sm border border-anyflow-lime group">
                                    <h3 className="font-display font-bold text-3xl mb-8">{t.surface.cv_profile}</h3>
                                    <div className="space-y-6">
                                          <div>
                                                <h4 className="font-bold text-lg mb-1">{t.surface.cv_education}</h4>
                                                <p className="font-medium opacity-80">{t.surface.cv_education_degree}</p>
                                                <p className="text-sm opacity-70">{t.surface.cv_education_focus}</p>
                                          </div>
                                          <div>
                                                <h4 className="font-bold text-lg mb-2">{t.surface.cv_languages}</h4>
                                                <ul className="space-y-2 font-medium opacity-80">
                                                      <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-black block" /> {t.surface.cv_lang_pt}</li>
                                                      <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-black block" /> {t.surface.cv_lang_en}</li>
                                                      <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-black block" /> {t.surface.cv_lang_es}</li>
                                                      <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-black block" /> {t.surface.cv_lang_fr}</li>
                                                </ul>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
};
