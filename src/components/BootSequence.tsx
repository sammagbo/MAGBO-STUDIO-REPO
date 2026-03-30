import React, { useEffect, useState } from 'react';

interface BootSequenceProps {
      onComplete: () => void;
}

export const BootSequence = ({ onComplete }: BootSequenceProps) => {
      const [progress, setProgress] = useState(0);
      const [logs, setLogs] = useState<string[]>([]);

      useEffect(() => {
            const bootLogs = [
                  "INITIALIZING MAGBO OS_CORE...",
                  "LOADING AESTHETIC PARADIGMS...",
                  "CONNECTING TO CREATIVE FLOW_NET...",
                  "DECRYPTING NEO-BRUTALIST VECTORS...",
                  "SYSTEM READY."
            ];

            let logIndex = 0;
            const logInterval = setInterval(() => {
                  if (logIndex < bootLogs.length) {
                        setLogs(prev => [...prev, bootLogs[logIndex]]);
                        logIndex++;
                  }
            }, 400);

            const startTime = Date.now();
            const duration = 2500; // 2.5 seconds boot

            const updateProgress = () => {
                  const elapsed = Date.now() - startTime;
                  const newProgress = Math.min((elapsed / duration) * 100, 100);
                  setProgress(newProgress);

                  if (newProgress < 100) {
                        requestAnimationFrame(updateProgress);
                  } else {
                        setTimeout(onComplete, 500); // Wait a half second at 100%
                  }
            };
            requestAnimationFrame(updateProgress);

            return () => clearInterval(logInterval);
      }, [onComplete]);

      // Calculate the segmented progress bar like [██████░░░░]
      const totalBlocks = 20;
      const filledBlocks = Math.floor((progress / 100) * totalBlocks);
      const blocksString = "█".repeat(filledBlocks) + "░".repeat(totalBlocks - filledBlocks);

      return (
            <div className="fixed inset-0 z-[100] bg-[#050505] text-white flex flex-col items-center justify-center font-mono selection:bg-anyflow-lime selection:text-black">
                  <div className="w-full max-w-2xl px-8 flex flex-col gap-6">
                        
                        <div className="flex flex-col gap-1 text-sm text-core-dim">
                              {logs.map((log, i) => (
                                    <div key={i} className="animate-fade-in">&gt; {log}</div>
                              ))}
                              {progress < 100 && <div className="animate-pulse">&gt; _</div>}
                        </div>

                        <div className="flex flex-col gap-2 mt-8">
                              <div className="flex justify-between items-end text-xs tracking-widest text-anyflow-lime uppercase">
                                    <span>Processing Creative Flow</span>
                                    <span>{Math.floor(progress)}%</span>
                              </div>
                              <div className="text-anyflow-lime text-2xl tracking-[0.2em] animate-pulse glow-text">
                                    [{blocksString}]
                              </div>
                        </div>

                  </div>
                  {/* Noise overlay */}
                  <div className="pointer-events-none fixed inset-0 opacity-[0.03] mix-blend-overlay" aria-hidden="true">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                              <filter id="boot-noise">
                                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
                              </filter>
                              <rect width="100%" height="100%" filter="url(#boot-noise)" />
                        </svg>
                  </div>
                  
                  <style dangerouslySetInnerHTML={{__html: `
                        .glow-text {
                              text-shadow: 0 0 10px rgba(187, 253, 106, 0.4), 0 0 20px rgba(187, 253, 106, 0.15);
                        }
                  `}} />
            </div>
      );
};
