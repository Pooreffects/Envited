/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        headingText: '#4F4F4F',
        purpleGR: '#8456EC',
        pinkGR: '#E87BF8',
        heading: '#240D57',
        headingLight: '#828282',
      },
      fontFamily: {
        primary: ['Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
