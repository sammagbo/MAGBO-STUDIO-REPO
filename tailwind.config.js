/** @type {import('tailwindcss').Config} */
export default {
      content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
      theme: {
            extend: {
                  colors: {
                        // THE SURFACE — Light luxurious
                        'anyflow-bg': '#F4F4F4',
                        'anyflow-black': '#000000',
                        'anyflow-lime': '#BBFD6A',
                        // THE CORE — Dark hacker
                        'core-bg': '#0a0a0a',
                        'core-surface': '#1a1a2e',
                        'core-card': '#22223b',
                        'core-text': '#e0e0e0',
                        'core-dim': '#a3a3a3',
                        'core-muted': '#9ca3af',
                        'core-border': 'rgba(255,255,255,0.08)',
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
