import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface CRTShutdownProps {
      direction: 'off' | 'on';
      onComplete: () => void;
}

/**
 * Full-screen CRT power-off / power-on overlay.
 *
 * "off" → GUI squeezes to a horizontal phosphor line → fades to black
 * "on"  → reverse: black → phosphor line expands to reveal content
 */
export const CRTShutdown = ({ direction, onComplete }: CRTShutdownProps) => {
      const backdropRef = useRef<HTMLDivElement>(null);
      const lineRef = useRef<HTMLDivElement>(null);

      useEffect(() => {
            const backdrop = backdropRef.current;
            const line = lineRef.current;
            if (!backdrop || !line) return;

            const tl = gsap.timeline({ onComplete });

            if (direction === 'off') {
                  // ── Power Off ──────────────────────────────────
                  // 1. Flash + squeeze content to a thin line
                  tl.fromTo(backdrop,
                        { opacity: 0 },
                        { opacity: 1, duration: 0.15, ease: 'power2.in' }
                  )
                  // 2. Show phosphor line
                  .fromTo(line,
                        { scaleX: 1.1, opacity: 1 },
                        { scaleX: 1.1, opacity: 1, duration: 0.12 }
                  )
                  // 3. Horizontal line shrinks and fades
                  .to(line, {
                        scaleX: 0,
                        opacity: 0,
                        duration: 0.35,
                        ease: 'power3.in',
                  });
            } else {
                  // ── Power On ───────────────────────────────────
                  // 1. Start fully black
                  gsap.set(backdrop, { opacity: 1 });
                  gsap.set(line, { scaleX: 0, opacity: 0 });

                  // 2. Phosphor line appears from center
                  tl.to(line, {
                        scaleX: 1.1,
                        opacity: 1,
                        duration: 0.2,
                        ease: 'power2.out',
                  })
                  // 3. Line stretches and backdrop fades revealing content
                  .to(line, {
                        scaleX: 1.5,
                        scaleY: 200,
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power2.out',
                  })
                  .to(backdrop, {
                        opacity: 0,
                        duration: 0.15,
                        ease: 'power1.out',
                  }, '-=0.15');
            }

            return () => { tl.kill(); };
      }, [direction, onComplete]);

      return (
            <div
                  ref={backdropRef}
                  className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
                  style={{ backgroundColor: '#0a0a0a', opacity: 0 }}
            >
                  {/* Phosphor line */}
                  <div
                        ref={lineRef}
                        className="absolute"
                        style={{
                              width: '100%',
                              height: '2px',
                              backgroundColor: '#BBFD6A',
                              boxShadow:
                                    '0 0 20px rgba(187,253,106,0.6), 0 0 40px rgba(187,253,106,0.3), 0 0 80px rgba(187,253,106,0.15)',
                              opacity: 0,
                              transformOrigin: 'center center',
                        }}
                  />
            </div>
      );
};
