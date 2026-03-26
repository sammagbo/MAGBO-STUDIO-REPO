import React, { useEffect, useRef } from 'react';

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

            // Characters for the stream: binary + tech hex
            const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789§±#¶'.split('');
            const fontSize = 14;
            const columns = canvas.width / fontSize;
            const drops: number[] = [];

            for (let x = 0; x < columns; x++) {
                  drops[x] = 1;
            }

            let animationFrameId: number;

            const draw = () => {
                  // Translucent black background creates trail effect
                  ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
                  ctx.fillRect(0, 0, canvas.width, canvas.height);

                  ctx.fillStyle = '#CCDA00'; // anyflow-lime color
                  ctx.font = `${fontSize}px monospace`;

                  for (let i = 0; i < drops.length; i++) {
                        const text = chars[Math.floor(Math.random() * chars.length)];
                        
                        // Occasionally render a fading white character for 'sparkle'
                        if (Math.random() > 0.95) {
                              ctx.fillStyle = '#FFFFFF';
                        } else {
                              ctx.fillStyle = '#CCDA00';
                        }
                        
                        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                        // Reset drop to top randomly
                        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                              drops[i] = 0;
                        }
                        drops[i]++;
                  }
                  animationFrameId = requestAnimationFrame(draw);
            };

            draw();

            return () => {
                  window.removeEventListener('resize', resize);
                  cancelAnimationFrame(animationFrameId);
            };
      }, []);

      return (
            <canvas
                  ref={canvasRef}
                  className="fixed inset-0 pointer-events-none opacity-20 z-0"
                  style={{ mixBlendMode: 'screen' }}
            />
      );
};
