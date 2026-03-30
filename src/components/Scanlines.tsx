/**
 * Scanlines — Reusable CRT scanline overlay.
 * Apply to any container for the industrial phosphor-screen texture.
 * Uses the `.scanlines` CSS class defined in index.css.
 */
export const Scanlines = ({ className = '' }: { className?: string }) => {
      return (
            <div
                  className={`absolute inset-0 pointer-events-none ${className}`}
                  aria-hidden="true"
                  style={{
                        opacity: 0.08,
                        background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5) 50%)',
                        backgroundSize: '100% 4px',
                  }}
            />
      );
};
