/** @type {import('tailwindcss').Config} */
export default {
      content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
            extend: {
                  colors: {
                        background: "var(--background)",
                        foreground: "var(--foreground)",
                        // New Anyflow Palette
                        anyflow: {
                              bg: '#F4F4F4',
                              lime: '#BBFD6A',
                              black: '#000000',
                              grey: '#E5E5E5'
                        }
                  },
                  fontFamily: {
                        display: ['Syne', 'sans-serif'],
                        body: ['"Space Grotesk"', 'sans-serif'],
                        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
                  },
            },
      },
      plugins: [],
}
