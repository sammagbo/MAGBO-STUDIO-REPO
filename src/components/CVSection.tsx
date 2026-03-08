import { useProfile, useSkills } from '@/hooks/useData';
import { Download, ShieldCheck, MapPin, Cpu } from 'lucide-react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const CVSection = () => {
      const PROFILE = useProfile();
      const SKILLS = useSkills();
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

      return (
            <section
                  ref={containerRef}
                  id="cv"
                  className="relative min-h-[100svh] py-32 px-6 md:px-12 bg-anyflow-bg text-anyflow-black border-t border-black/5"
            >
                  <div className="max-w-[1400px] mx-auto w-full">
                        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                              <div>
                                    <h2 className="font-display font-extrabold text-[4rem] md:text-[6rem] leading-[0.9] tracking-tighter uppercase">
                                          PROFILE
                                          <br />
                                          <span className="text-gray-300 italic font-mono lowercase tracking-normal text-3xl block mt-2">
                                                data_log
                                          </span>
                                    </h2>
                              </div>
                              <button className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-anyflow-lime hover:text-black transition-colors group">
                                    <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                                    Download Resume
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
                                                ID: 001
                                          </div>
                                    </div>
                                    <div className="mt-12">
                                          <h3 className="font-display font-bold text-4xl tracking-tighter mb-2">
                                                {PROFILE.name}
                                          </h3>
                                          <p className="font-mono text-sm tracking-wide text-core-dim mb-6 uppercase">
                                                {PROFILE.role}
                                          </p>
                                          <div className="flex items-center gap-2 text-core-dim">
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
                                                OVERVIEW: 002
                                          </div>
                                    </div>
                                    <div className="flex-grow flex items-end">
                                          <p className="font-body text-xl md:text-[1.75rem] leading-snug font-medium text-gray-800">
                                                "{PROFILE.bio}"
                                          </p>
                                    </div>
                              </div>

                              {/* Card 3: Skills Grid */}
                              <div ref={card3Ref} className="bg-black rounded-[2.5rem] p-10 md:p-12 shadow-sm flex flex-col lg:col-span-3 mt-12 lg:mt-0">
                                    <div className="flex items-start justify-between mb-12">
                                          <h3 className="font-display font-bold text-white text-3xl tracking-tighter">
                                                CAPABILITIES
                                          </h3>
                                          <div className="bg-white/10 text-core-muted font-mono text-[10px] px-3 py-1 rounded-full uppercase tracking-widest">
                                                STACK: 003
                                          </div>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                          {SKILLS.map((skill, i) => (
                                                <div
                                                      key={i}
                                                      className="bg-white/5 text-white border border-white/10 px-6 py-3 rounded-full font-mono text-sm tracking-wide hover:bg-anyflow-lime hover:text-black hover:border-anyflow-lime transition-colors cursor-default"
                                                >
                                                      {skill}
                                                </div>
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
};
