/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        violet: '#9e7f66',
        'light-violet': '#939BF4',
        'very-dark-blue': '#19202D',
        midnight: '#121721',
        white: '#FFFFFF',
        'light-grey': '#F4F6F8',
        'dark-grey': '#6E8098',
        gray: '#9DAEC2',
      },
      fontFamily: {
        sans: ['"Kumbh Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
