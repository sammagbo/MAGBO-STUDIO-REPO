export const Logo = ({ className = '' }: { className?: string }) => {
      return (
            <svg
                  viewBox="0 0 100 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-auto h-8 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(187,253,106,0.5)] ${className}`}
            >
                  {/*
                  Industrial 'MS' Logo — Simplified geometric letterforms
                  M: clean angular construction
                  S: sharp directional block
                  */}

                  {/* The 'M' — simplified angular */}
                  <path
                        d="M5,55 L5,10 L25,35 L45,10 L45,55 L35,55 L35,28 L25,43 L15,28 L15,55 Z"
                        fill="currentColor"
                  />

                  {/* The 'S' — angular play/forward symbol */}
                  <path
                        d="M55,10 L90,32.5 L55,55 L55,42 L72,32.5 L55,23 Z"
                        fill="currentColor"
                  />

                  {/* Accent mark — top of M, growth indicator */}
                  <path
                        d="M22,10 L25,3 L28,10 Z"
                        className="text-anyflow-lime fill-current"
                  />
            </svg>
      );
};
