export const NoiseOverlay = () => {
      return (
            <div
                  className="fixed inset-0 z-[9990] pointer-events-none"
                  style={{
                        mixBlendMode: 'overlay',
                        opacity: 0.04,
                        willChange: 'opacity',
                  }}
                  aria-hidden="true"
            >
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <filter id="noise">
                              <feTurbulence
                                    type="fractalNoise"
                                    baseFrequency="0.8"
                                    numOctaves="4"
                                    stitchTiles="stitch"
                              />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#noise)" />
                  </svg>
            </div>
      );
};
