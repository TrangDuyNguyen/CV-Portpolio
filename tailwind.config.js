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
        void: '#08090A',
        surface: '#0E131F',
        'surface-raised': '#141C2E',
        bone: '#F4F2EA',
        'bone-muted': '#8E96A4',
        flare: '#FF6417',
        amber: {
          glow: '#FFB648',
          500: '#f59e0b',
        },
        'white-hot': '#FFF4DE',
        ember: '#C22B0D',
      },
      fontFamily: {
        display: ['Bodoni Moda', 'Georgia', 'serif'],
        sans: ['Geist', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
