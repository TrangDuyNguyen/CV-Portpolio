/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#E8ECF2',
        neu: {
          bg: '#E8ECF2',
          surface: '#E8ECF2',
          dark: '#C4D0DE',
          light: '#FFFFFF',
          text: '#1E293B',
          muted: '#64748B',
        },
        primary: {
          50: '#f0fdf4',
          400: '#10b981',
          500: '#059669',
          600: '#047857',
        },
        cyan: {
          400: '#0284c7',
          500: '#0369a1',
          600: '#075985',
        },
        macro: {
          carbs: '#0284c7',
          fat: '#e11d48',
          protein: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'neu-flat': '7px 7px 15px #c2cee0, -7px -7px 15px #ffffff',
        'neu-flat-sm': '4px 4px 8px #c5d1e2, -4px -4px 8px #ffffff',
        'neu-flat-lg': '12px 12px 24px #bed0e2, -12px -12px 24px #ffffff',
        'neu-inset': 'inset 4px 4px 8px #c2cee0, inset -4px -4px 8px #ffffff',
        'neu-inset-sm': 'inset 2px 2px 5px #c5d1e2, inset -2px -2px 5px #ffffff',
      },
    },
  },
  plugins: [],
}
