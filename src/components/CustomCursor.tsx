import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export const CustomCursor = () => {
      const cursorRef = useRef<HTMLDivElement>(null);
      const [isHovering, setIsHovering] = useState(false);

      useEffect(() => {
            if (!cursorRef.current) return;

            const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.4, ease: "power3" });
            const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.4, ease: "power3" });

            const updateMousePosition = (e: MouseEvent) => {
                  xTo(e.clientX - 8);
                  yTo(e.clientY - 8);
            };

            const handleMouseOver = (e: MouseEvent) => {
                  const target = e.target as HTMLElement;
                  // Check if hovering over interactive elements
                  if (target.tagName.toLowerCase() === 'button' || target.tagName.toLowerCase() === 'a' || target.closest('button') || target.closest('a')) {
                        setIsHovering(true);
                  } else {
                        setIsHovering(false);
                  }
            };

            window.addEventListener('mousemove', updateMousePosition);
            window.addEventListener('mouseover', handleMouseOver);

            return () => {
                  window.removeEventListener('mousemove', updateMousePosition);
                  window.removeEventListener('mouseover', handleMouseOver);
            };
      }, []);

      useEffect(() => {
            if (!cursorRef.current) return;
            gsap.to(cursorRef.current, {
                  scale: isHovering ? 2.5 : 1,
                  duration: 0.3,
                  ease: "back.out(1.7)"
            });
      }, [isHovering]);

      return (
            <div
                  ref={cursorRef}
                  className="fixed top-0 left-0 w-4 h-4 rounded-full bg-anyflow-lime mix-blend-difference pointer-events-none z-[9999]"
            />
      );
};
