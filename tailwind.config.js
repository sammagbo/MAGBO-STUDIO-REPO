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
                        // Explicitly mapping the requested palette
                        slate: {
                              950: '#020617', // Institutional Dark Background
                              900: '#0f172a', // Surfaces
                        },
                        emerald: {
                              500: '#10b981', // Operational / Success
                        },
                        red: {
                              500: '#ef4444', // Critical / Alert
                        }
                  },
                  fontFamily: {
                        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
                  },
            },
      },
      plugins: [],
}
