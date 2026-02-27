import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const CapabilitiesSection = () => {
      const { t } = useLanguage();
      const sectionRef = useRef<HTMLElement>(null);
      const containerRef = useRef<HTMLDivElement>(null);

      useGSAP(() => {
            const sections = gsap.utils.toArray('.capability-item');

            gsap.to(sections, {
                  xPercent: -100 * (sections.length - 1),
                  ease: "none",
                  scrollTrigger: {
                        trigger: sectionRef.current,
                        pin: true,
                        scrub: 1,
                        snap: 1 / (sections.length - 1),
                        end: () => "+=" + containerRef.current?.offsetWidth
                  }
            });
      }, { scope: sectionRef });

      return (
            <section ref={sectionRef} id="capabilities" className="relative h-screen bg-anyflow-black text-white overflow-hidden flex items-center">

                  {/* Absolute Label */}
                  <div className="absolute top-12 left-12 z-20 hidden md:block">
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-anyflow-lime">{t.surface.capabilities_label}</span>
                  </div>

                  {/* Horizontal Scroll Container */}
                  <div ref={containerRef} className="flex h-full w-[300vw] items-center">

                        {/* Title Slide */}
                        <div className="capability-item w-screen h-full flex flex-col justify-center items-center shrink-0 border-r border-white/10 relative">
                              {/* Rotating Radar Design */}
                              <div className="absolute opacity-20 pointer-events-none mix-blend-screen w-[60vh] h-[60vh] rounded-full border border-anyflow-lime/30 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                                    <div className="w-1 h-full bg-gradient-to-b from-transparent via-anyflow-lime to-transparent" />
                                    <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-anyflow-lime to-transparent" />
                                    <div className="absolute w-[40vh] h-[40vh] rounded-full border border-anyflow-lime/20" />
                              </div>

                              <h2 className="font-display font-black text-[14vw] md:text-[9vw] leading-[0.85] tracking-tighter uppercase relative z-10 text-center drop-shadow-2xl">
                                    {t.surface.capabilities_title}<br />
                                    <span className="text-anyflow-lime">{t.surface.capabilities_title_accent}</span>
                              </h2>
                        </div>

                        {/* Engineering Slide */}
                        <div className="capability-item w-screen h-full flex flex-col justify-center items-start shrink-0 px-12 md:px-32 relative group">
                              <h3 className="font-display font-bold text-6xl md:text-8xl text-transparent stroke-text mb-8 opacity-50 group-hover:opacity-100 transition-opacity duration-500 uppercase">{t.surface.capabilities_slide1_label}</h3>
                              <h2 className="font-display font-black text-5xl md:text-7xl mb-12 uppercase text-white max-w-4xl">{t.surface.capabilities_slide1_title}</h2>
                              <div className="flex flex-wrap gap-4 max-w-3xl">
                                    {['React/Next.js/TS', 'Node.js/Go', 'PostgreSQL/Prisma', 'AWS/GCP/Vercel'].map((tech) => (
                                          <span key={tech} className="px-6 py-4 border border-white/20 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-anyflow-lime hover:text-black transition-colors">{tech}</span>
                                    ))}
                              </div>
                        </div>

                        {/* Motion Slide */}
                        <div className="capability-item w-screen h-full flex flex-col justify-center items-start shrink-0 px-12 md:px-32 relative group">
                              <h3 className="font-display font-bold text-6xl md:text-8xl text-transparent stroke-text mb-8 opacity-50 group-hover:opacity-100 transition-opacity duration-500 uppercase">{t.surface.capabilities_slide2_label}</h3>
                              <h2 className="font-display font-black text-5xl md:text-7xl mb-12 uppercase text-white max-w-4xl">{t.surface.capabilities_slide2_title}</h2>
                              <div className="flex flex-wrap gap-4 max-w-3xl">
                                    {['GSAP ScrollTrigger', 'Framer Motion', 'Three.js / WebGL', 'Lenis Smooth Scroll'].map((tech) => (
                                          <span key={tech} className="px-6 py-4 border border-white/20 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-anyflow-lime hover:text-black transition-colors">{tech}</span>
                                    ))}
                              </div>
                        </div>

                  </div>

                  {/* Stroke text CSS within component for isolation */}
                  <style>{`
                        .stroke-text {
                              -webkit-text-stroke: 1px rgba(255,255,255,0.8);
                        }
                  `}</style>
            </section>
      );
};
