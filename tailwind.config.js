/** @type {import('tailwindcss').Config} */
export default {
      content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
      theme: {
            extend: {
                  colors: {
                        'dark-bg': 'var(--bg)',
                        'dark-elevated': 'var(--bg-elevated)',
                        'dark-card': 'var(--bg-card)',
                        'dark-border': 'var(--border)',
                        'dark-border-hover': 'var(--border-hover)',
                        'dark-text': 'var(--text-primary)',
                        'dark-secondary': 'var(--text-secondary)',
                        'dark-muted': 'var(--text-muted)',
                        'dark-accent': 'var(--accent)',
                        /* MAGBO Palette */
                        'mg-red': '#E53935',
                        'mg-orange': '#FB8C00',
                        'mg-brown': '#8D6E63',
                        'mg-yellow': '#FDD835',
                        'mg-green': '#7CB342',
                        'mg-turquoise': '#26C6DA',
                        'mg-blue': '#1E88E5',
                        'mg-violet': '#8E24AA',
                        'mg-pink': '#EC407A',
                        'mg-white': '#FAFAFA',
                        'mg-gray': '#9E9E9E',
                        'mg-black': '#212121',
                  },
                  fontFamily: {
                        display: ['"Syne"', 'sans-serif'],
                        body: ['"Space Grotesk"', 'sans-serif'],
                        mono: ['"JetBrains Mono"', 'monospace'],
                  },
                  animation: {
                        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                        'ticker': 'tickerScroll 30s linear infinite',
                        'gradient': 'gradientShift 6s ease infinite',
                  },
                  keyframes: {
                        fadeInUp: {
                              '0%': { opacity: '0', transform: 'translateY(30px)' },
                              '100%': { opacity: '1', transform: 'translateY(0)' },
                        },
                  },
            },
      },
      plugins: [],
};
