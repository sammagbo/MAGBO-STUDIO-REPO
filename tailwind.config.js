/** @type {import('tailwindcss').Config} */
export default {
      content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
      theme: {
            extend: {
                  colors: {
                        'dark-bg': '#050505',
                        'dark-elevated': '#0a0a0a',
                        'dark-card': 'rgba(255, 255, 255, 0.02)',
                        'dark-border': 'rgba(255, 255, 255, 0.08)',
                        'dark-border-hover': 'rgba(255, 255, 255, 0.16)',
                        'dark-text': '#F3F4F6',
                        'dark-secondary': '#9CA3AF',
                        'dark-muted': '#6B7280',
                        'dark-accent': '#E5E7EB',
                        'accent-blue': '#6366F1',
                        'accent-blue-light': '#818CF8',
                        'accent-purple': '#A78BFA',
                        'accent-cyan': '#22D3EE',
                        'accent-pink': '#EC4899',
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
