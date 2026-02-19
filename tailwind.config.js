/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        nav: '1200px',
      },
      colors: {
        brand: {
          teal: '#008282',
          'teal-dark': '#006666',
          'teal-light': '#e6f5f5',
          grey: '#58595b',
          'grey-light': '#f5f5f5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
