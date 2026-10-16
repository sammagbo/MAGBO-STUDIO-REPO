/** @type {import('tailwindcss').Config} */
export default {
      content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
      theme: {
            extend: {
                  // Only what the mobile menu still uses; every section styles itself with its own CSS file.
                  colors: {
                        'dark-bg': 'var(--bg)',
                        'dark-text': 'var(--text-primary)',
                        'dark-secondary': 'var(--text-secondary)',
                  },
                  fontFamily: {
                        display: ['"Funnel Display"', 'sans-serif'],
                        body: ['"Funnel Sans"', 'system-ui', 'sans-serif'],
                  },
            },
      },
      plugins: [],
};
