import { useEffect, useRef } from 'react';

export const DataStream = () => {
      const canvasRef = useRef<HTMLCanvasElement>(null);

      useEffect(() => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            const resize = () => {
                  canvas.width = window.innerWidth;
                  canvas.height = window.innerHeight;
            };
            window.addEventListener('resize', resize);
            resize();

            const chars = '01ABCDEF0123456789§±#¶'.split('');
            const fontSize = 14;
            // Reduce density: use 2x spacing between columns
            const columns = Math.floor(canvas.width / (fontSize * 2));
            const drops: number[] = [];

            for (let x = 0; x < columns; x++) {
                  drops[x] = 1;
            }

            let animationFrameId: number;
            let frameCount = 0;
            let isVisible = true;

            // Pause when tab is not visible
            const handleVisibility = () => {
                  isVisible = !document.hidden;
            };
            document.addEventListener('visibilitychange', handleVisibility);

            const draw = () => {
                  animationFrameId = requestAnimationFrame(draw);

                  // Throttle to ~30fps by skipping every other frame
                  frameCount++;
                  if (frameCount % 2 !== 0 || !isVisible) return;

                  ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
                  ctx.fillRect(0, 0, canvas.width, canvas.height);

                  ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

                  for (let i = 0; i < drops.length; i++) {
                        const text = chars[Math.floor(Math.random() * chars.length)];

                        // Occasional white sparkle
                        if (Math.random() > 0.95) {
                              ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
                        } else {
                              ctx.fillStyle = '#BBFD6A';
                        }

                        ctx.fillText(text, i * fontSize * 2, drops[i] * fontSize);

                        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                              drops[i] = 0;
                        }
                        drops[i]++;
                  }
            };

            draw();

            return () => {
                  window.removeEventListener('resize', resize);
                  document.removeEventListener('visibilitychange', handleVisibility);
                  cancelAnimationFrame(animationFrameId);
            };
      }, []);

      return (
            <canvas
                  ref={canvasRef}
                  className="fixed inset-0 pointer-events-none opacity-[0.15] z-0"
                  style={{ mixBlendMode: 'screen' }}
            />
      );
};
