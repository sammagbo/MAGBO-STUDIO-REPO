import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowDownRight } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export const HeroSection = () => {
      const containerRef = useRef<HTMLElement>(null);

      useGSAP(() => {
            const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

            // Background massive text reveal (Standard: y: 110% -> 0%)
            tl.fromTo('.hero-bg-text',
                  { y: '110%', opacity: 0, rotateZ: 2 },
                  { y: '0%', opacity: 1, rotateZ: 0, duration: 1.8, stagger: 0.1 },
                  0.2
            );

            // Caricature placeholder reveal
            tl.fromTo('.hero-image-placeholder',
                  { scale: 0.9, opacity: 0, y: 50 },
                  { scale: 1, opacity: 1, y: 0, duration: 1.5 },
                  0.5
            );

            // Foreground overlapping text reveal
            tl.fromTo('.hero-fg-text',
                  { y: '110%', opacity: 0 },
                  { y: '0%', opacity: 1, duration: 1.4, stagger: 0.15 },
                  0.7
            );

            // UI elements fade in
            tl.fromTo('.hero-ui',
                  { opacity: 0 },
                  { opacity: 1, duration: 1, stagger: 0.1 },
                  1.2
            );

      }, { scope: containerRef });

      return (
            <section ref={containerRef} className="relative min-h-[100svh] w-full bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center">

                  {/* Layer 0: Aesthetic Background & Glows */}
                  <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                        <div className="absolute top-0 bottom-0 left-[15%] w-px bg-white/10" />
                        <div className="absolute top-0 bottom-0 right-[15%] w-px bg-white/10" />
                        <div className="absolute top-[25%] left-0 right-0 h-px bg-white/10" />
                        <div className="absolute top-[75%] left-0 right-0 h-px bg-white/10" />
                  </div>
                  <div className="hero-ui absolute -top-[10%] -left-[10%] w-[40vw] h-[40vw] bg-anyflow-lime/10 blur-[120px] rounded-full pointer-events-none z-0" />
                  <div className="hero-ui absolute -bottom-[10%] -right-[10%] w-[40vw] h-[40vw] bg-[#F5A623]/10 blur-[120px] rounded-full pointer-events-none z-0" />

                  {/* Layer 1: Background Typography (Behind Image) */}
                  <div className="absolute inset-0 flex flex-col justify-between py-[15vh] px-4 md:px-12 z-0 pointer-events-none select-none overflow-hidden">
                        <h1 className="hero-bg-text font-display font-extrabold uppercase leading-[0.8] tracking-tighter text-[#1a1a1a]"
                              style={{ fontSize: 'clamp(5rem, 14vw, 20rem)' }}>
                              YOUR
                        </h1>
                        <h1 className="hero-bg-text font-display font-extrabold uppercase leading-[0.8] tracking-tighter text-[#1a1a1a] text-right"
                              style={{ fontSize: 'clamp(5rem, 14vw, 20rem)' }}>
                              SYSTEMS
                        </h1>
                  </div>

                  {/* Layer 2: The Caricature / Image Container */}
                  <div className="hero-image-placeholder relative z-10 w-[85vw] h-[60svh] max-w-[600px] flex items-end justify-center mb-8">
                        <div className="w-full h-full border border-anyflow-lime/40 bg-[#111111]/80 backdrop-blur-sm rounded-[2rem] md:rounded-t-[4rem] group flex flex-col items-center justify-end overflow-hidden relative shadow-2xl">

                              {/* Scanning Line Animation Effect */}
                              <div className="absolute top-0 left-0 w-full h-[2px] bg-anyflow-lime shadow-[0_0_15px_rgba(187,253,106,0.8)] animate-[slideDown_3s_ease-in-out_infinite] opacity-50 z-20 pointer-events-none" />

                              {/* User Caricature */}
                              <img
                                    src="/avatar.png"
                                    alt="Sammy K Magbo"
                                    className="w-full h-full object-cover object-bottom relative z-10 grayscale contrast-125 brightness-90 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                                    onError={(e) => {
                                          // Fallback to placeholder if image not found
                                          e.currentTarget.style.display = 'none';
                                          const fallback = document.getElementById('fallback-placeholder');
                                          if (fallback) fallback.style.display = 'flex';
                                    }}
                              />

                              {/* Fallback Placeholder (shown if avatar.png is missing) */}
                              <div id="fallback-placeholder" className="absolute inset-0 flex-col items-center justify-center p-8 text-center text-anyflow-lime font-mono text-xs md:text-sm hidden tracking-[0.2em]">
                                    <div className="w-16 h-16 border border-anyflow-lime rounded-full flex items-center justify-center mb-4 bg-anyflow-lime/5">
                                          <span className="animate-pulse text-xl">📸</span>
                                    </div>
                                    <p className="mb-2 uppercase font-bold text-white">Image Missing</p>
                                    <p className="text-anyflow-lime/70 leading-relaxed max-w-xs normal-case tracking-normal">
                                          Save your image as <span className="text-white font-bold">public/avatar.png</span> in your repository.
                                    </p>
                              </div>
                        </div>
                  </div>

                  {/* Layer 3: Foreground Typography (Overlaps the Image) */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center z-20 pointer-events-none">

                        <div className="absolute top-[45%] w-full flex justify-center px-2 overflow-hidden">
                              <span className="hero-fg-text font-display font-extrabold uppercase text-transparent tracking-tighter bg-clip-text bg-gradient-to-br from-anyflow-lime to-[#bbfd6a]/40"
                                    style={{
                                          fontSize: 'clamp(4rem, 11vw, 14rem)',
                                          WebkitTextStroke: '2px #bbfd6a',
                                          lineHeight: '0.8',
                                          filter: 'drop-shadow(0 0 20px rgba(187,253,106,0.3))'
                                    }}>
                                    DESERVE
                              </span>
                        </div>

                        <div className="absolute top-[65%] w-full flex justify-center px-4 overflow-hidden">
                              <span className="hero-fg-text font-display font-extrabold uppercase text-white tracking-widest mix-blend-exclusion"
                                    style={{
                                          fontSize: 'clamp(2.5rem, 8vw, 10rem)',
                                          lineHeight: '0.8',
                                    }}>
                                    MORE.
                              </span>
                        </div>
                  </div>

                  {/* Layer 4: Technical UI Overlays */}
                  <div className="hero-ui absolute top-6 left-6 md:left-12 flex flex-col gap-1 z-30 font-mono text-[10px] md:text-xs text-white/40 uppercase tracking-[0.2em]">
                        <span className="text-anyflow-lime">MAGBO STUDIO_</span>
                        <span>ELITE ARCHITECTURE</span>
                  </div>

                  <div className="hero-ui absolute top-6 right-6 md:right-12 hidden md:flex flex-col gap-1 text-right z-30 font-mono text-[10px] md:text-xs text-white/40 uppercase tracking-[0.2em]">
                        <span>[ LAYERED_AESTHETIC ]</span>
                        <span>SYS_TIME: {new Date().toISOString().split('T')[0]}</span>
                  </div>

                  {/* Scroll Indication CTA */}
                  <div className="hero-ui absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 font-mono text-xs text-anyflow-lime uppercase tracking-[0.2em] cursor-pointer pointer-events-auto hover:text-white transition-colors group">
                        <span>Initiate Sequence</span>
                        <div className="w-8 h-8 rounded-full border border-anyflow-lime group-hover:border-white flex items-center justify-center bg-black transition-colors">
                              <ArrowDownRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                        </div>
                  </div>
            </section>
      );
};
