import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const ProcessSection = () => {
      const sectionRef = useRef<HTMLElement>(null);
      const textRefs = useRef<(HTMLHeadingElement | null)[]>([]);

      useGSAP(() => {
            gsap.fromTo(textRefs.current,
                  { y: 150, opacity: 0, rotationX: -20 },
                  {
                        y: 0, opacity: 1, rotationX: 0, duration: 1.2, stagger: 0.1, ease: 'power3.out',
                        scrollTrigger: {
                              trigger: sectionRef.current,
                              start: 'top 70%',
                        }
                  }
            );
      }, { scope: sectionRef });

      return (
            <section ref={sectionRef} id="process" className="relative min-h-[90svh] flex flex-col justify-center items-center py-32 px-6 bg-anyflow-bg overflow-hidden border-t border-black/10">

                  {/* Decorative Hexagon Cluster Left */}
                  <div className="absolute left-[5%] md:left-[10%] top-[20%] opacity-40 pointer-events-none hidden md:block" style={{ transform: 'scale(1.5)' }}>
                        <svg width="120" height="200" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M30 51.96L0 34.64V0L30 -17.32L60 0V34.64Z" fill="#BBFD6A" fillOpacity="0.2" stroke="#BBFD6A" strokeWidth="1" />
                              <path d="M90 51.96L60 34.64V0L90 -17.32L120 0V34.64Z" fill="none" stroke="#BBFD6A" strokeWidth="1" />
                              <path d="M60 103.92L30 86.6V51.96L60 34.64L90 51.96V86.6Z" fill="#BBFD6A" stroke="#BBFD6A" strokeWidth="1" className="drop-shadow-[0_0_15px_rgba(187,253,106,0.8)]" />
                              <path d="M30 155.88L0 138.56V103.92L30 86.6L60 103.92V138.56Z" fill="none" stroke="#BBFD6A" strokeWidth="1" />
                        </svg>
                  </div>

                  {/* Decorative Hexagon Cluster Right */}
                  <div className="absolute right-[5%] md:right-[15%] bottom-[10%] opacity-40 pointer-events-none hidden md:block" style={{ transform: 'scale(2)' }}>
                        <svg width="120" height="200" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M30 51.96L0 34.64V0L30 -17.32L60 0V34.64Z" fill="#BBFD6A" stroke="#BBFD6A" strokeWidth="1" className="drop-shadow-[0_0_15px_rgba(187,253,106,0.8)]" />
                              <path d="M90 51.96L60 34.64V0L90 -17.32L120 0V34.64Z" fill="#BBFD6A" fillOpacity="0.2" stroke="#BBFD6A" strokeWidth="1" />
                              <path d="M60 103.92L30 86.6V51.96L60 34.64L90 51.96V86.6Z" fill="none" stroke="#BBFD6A" strokeWidth="1" />
                        </svg>
                  </div>

                  <div className="container mx-auto z-10 w-full flex flex-col justify-center items-start md:items-center text-left md:text-center perspective-[1000px]">
                        <h2 className="font-display font-black text-[18vw] md:text-[14vw] leading-[0.85] tracking-tighter uppercase w-full max-w-[1400px]">
                              <div className="overflow-hidden"><div ref={el => textRefs.current[0] = el} className="origin-bottom transform-gpu">WE BELIEVE <span className="text-anyflow-lime drop-shadow-sm">IN A</span></div></div>
                              <div className="overflow-hidden"><div ref={el => textRefs.current[1] = el} className="origin-bottom transform-gpu text-anyflow-lime mix-blend-difference drop-shadow-md">PROCESS</div></div>
                              <div className="overflow-hidden"><div ref={el => textRefs.current[2] = el} className="origin-bottom transform-gpu">THAT WORKS.</div></div>
                        </h2>
                  </div>
            </section>
      );
};
