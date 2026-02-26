import { useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export const HeroSection = () => {
      const { t } = useLanguage();
      const containerRef = useRef<HTMLElement>(null);
      const textRefs = useRef<(HTMLHeadingElement | HTMLSpanElement | null)[]>([]);
      const floatingElementRef = useRef<HTMLDivElement>(null);
      const leftContentRef = useRef<HTMLDivElement>(null);

      useGSAP(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            // Animate headers in right column
            tl.fromTo(textRefs.current,
                  { y: 150, opacity: 0, rotationX: -15 },
                  { y: 0, opacity: 1, rotationX: 0, duration: 1.2, stagger: 0.1 }
            )
                  // Left content fade in
                  .fromTo(leftContentRef.current,
                        { opacity: 0, x: -30 },
                        { opacity: 1, x: 0, duration: 1 },
                        "-=0.8"
                  )
                  // Floating element pop in
                  .fromTo(floatingElementRef.current,
                        { scale: 0, rotation: -45, opacity: 0 },
                        { scale: 1, rotation: 15, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.5)" },
                        "-=0.6"
                  );

      }, { scope: containerRef });

      // Mouse parallax for floating element
      useEffect(() => {
            const handleMouseMove = (e: MouseEvent) => {
                  if (!floatingElementRef.current) return;
                  const x = (e.clientX / window.innerWidth - 0.5) * 40;
                  const y = (e.clientY / window.innerHeight - 0.5) * 40;

                  gsap.to(floatingElementRef.current, {
                        x: x,
                        y: y,
                        rotation: 15 + (x * 0.2),
                        duration: 1,
                        ease: "power2.out"
                  });
            };

            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
      }, []);

      return (
            <section ref={containerRef} id="hero" className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#F4F4F4]">
                  {/* Subtle Hexagon Pattern Background (Anyflow style) */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'103.92304845413264\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 103.92304845413264L0 86.60254037844386 V51.96152422706632L30 34.64101615137754L60 51.96152422706632V86.60254037844386Z\' fill=\'none\' stroke=\'%23000000\' stroke-width=\'1\'/%3E%3Cpath d=\'M30 34.64101615137754L0 17.32050807568877 V-17.32050807568877L30 -34.64101615137754L60 -17.32050807568877V17.32050807568877Z\' fill=\'none\' stroke=\'%23000000\' stroke-width=\'1\'/%3E%3C/svg%3E")', backgroundSize: '120px 207px', backgroundPosition: 'center' }}></div>

                  <div className="container mx-auto px-6 z-10 w-full">
                        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full h-full relative border-l border-black/5 pl-4 md:pl-0 mx-auto max-w-[1600px]">

                              {/* Left Column */}
                              <div ref={leftContentRef} className="w-full md:w-[35%] flex flex-col items-start gap-8 mt-12 md:mt-0 relative z-20 md:pr-12 md:border-r border-black/10 h-full justify-center">
                                    <p className="text-xl md:text-2xl font-body font-medium leading-tight max-w-[400px]">
                                          {t.hero.description || "We design immersive, motion-driven systems that command attention and guide users to act. Clean builds. Sharp strategy. Zero fluff."}
                                    </p>
                                    <button className="bg-anyflow-lime text-black font-display font-bold uppercase tracking-wide text-xl px-6 py-2 shadow-sm hover:scale-105 transition-transform duration-300">
                                          LET'S TALK
                                    </button>

                                    {/* Left decorative Hexagons */}
                                    <div className="hidden md:block absolute bottom-[-40%] left-0 w-64 h-64 border-[0.5px] border-anyflow-lime/40 rounded-full blur-[2px] pointer-events-none"></div>
                              </div>

                              {/* Right Column (Massive Text) */}
                              <div className="w-full md:w-[65%] flex flex-col md:pl-12 pt-24 md:pt-0 relative z-10 perspective-[1000px]">
                                    <h1 className="font-display font-black text-[15vw] md:text-[11vw] leading-[0.85] tracking-tight uppercase flex flex-col whitespace-nowrap">
                                          <div className="overflow-hidden inline-block"><span ref={el => textRefs.current[0] = el} className="inline-block origin-bottom transform-gpu">YOUR SYSTEMS</span></div>
                                          <div className="overflow-hidden inline-block"><span ref={el => textRefs.current[1] = el} className="inline-block origin-bottom transform-gpu text-anyflow-lime drop-shadow-md">DESERVE</span><span ref={el => textRefs.current[2] = el} className="inline-block origin-bottom transform-gpu pl-[2vw]">MORE</span></div>
                                          <div className="overflow-hidden inline-block"><span ref={el => textRefs.current[3] = el} className="inline-block origin-bottom transform-gpu">THAN A NORMAL</span></div>
                                          <div className="overflow-hidden inline-block"><span ref={el => textRefs.current[4] = el} className="inline-block origin-bottom transform-gpu">INTERFACE.</span></div>
                                    </h1>
                              </div>

                              {/* Center Floating 3D Element Simulation (Green '&' or Shape) */}
                              <div
                                    ref={floatingElementRef}
                                    className="absolute left-[30%] md:left-[35%] top-[60%] md:top-[45%] -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none hidden sm:flex justify-center items-center drop-shadow-2xl"
                                    style={{
                                          textShadow: '0px 10px 20px rgba(0,0,0,0.15), 4px 4px 0px #9ee558, 8px 8px 0px #7ab343'
                                    }}
                              >
                                    {/* Using a large & symbol customized to look 3D and thick */}
                                    <span className="font-display font-black text-[30vw] md:text-[25vw] text-anyflow-lime leading-none select-none tracking-tighter opacity-95">
                                          &
                                    </span>
                              </div>

                        </div>
                  </div>
            </section>
      );
};
