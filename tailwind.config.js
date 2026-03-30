/** @type {import('tailwindcss').Config} */
export default {
      content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
      theme: {
            extend: {
                  colors: {
                        // UNIFIED INDUSTRIAL RETRO-FUTURISM PALETTE
                        'anyflow-bg': '#050505',
                        'anyflow-black': '#000000',
                        'anyflow-lime': '#BBFD6A', 
                        'core-bg': '#09090b',
                        'core-surface': '#121214',
                        'core-card': '#1a1a1c',
                        'core-text': '#e4e4e7',
                        'core-dim': '#71717a',
                        'core-muted': '#a1a1aa',
                        'core-border': 'rgba(255,255,255,0.15)',
                  },
                  fontFamily: {
                        display: ['"Syne"', 'sans-serif'],
                        body: ['"Space Grotesk"', 'sans-serif'],
                        mono: ['"JetBrains Mono"', 'monospace'],
                  },
            },
      },
      plugins: [],
};
