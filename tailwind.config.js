/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: '250px',
      xs: '450px',
      sm: '640px',
      md: '768px',
      big: '992px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#ffffff',
        neutral: '#000000',
        secondary: '#1e2022',
        'black-100': '#100d25',
        sand: '#afa18f',
        burger: '#e1dfdd',
      },
      fontFamily: {
        clash: ['"Clash Grotesk"', '"Space Grotesk"', 'Inter', 'sans-serif'],
        montreal: ['"General Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
