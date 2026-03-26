import React from 'react';

export const Logo = ({ className = '' }: { className?: string }) => {
      return (
            <svg
                  viewBox="0 0 100 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-auto h-8 ${className}`}
            >
                  {/*
        Industrial 'MS' Logo Concept
        M incorporates an upward arrow
        S forms a play button
        Sharp angles, no curves.
        */}
                  {/* The 'M' with an upward-pointing right stem */}
                  <path
                        d="M10,50 L10,20 L25,40 L40,10 L40,30 L50,10 L50,50 L40,50 L40,35 L25,55 L10,35 Z"
                        fill="currentColor"
                  />
                  {/* The 'S' shaped like a sharp play button block */}
                  <path
                        d="M60,10 L90,30 L60,50 L60,40 L75,30 L60,20 Z"
                        fill="currentColor"
                  />
                  {/* Upward green arrow explicitly overlaid to show growth/tech */}
                  <path
                        d="M40,10 L50,10 L45,0 Z"
                        className="text-anyflow-lime fill-current"
                  />
            </svg>
      );
};
