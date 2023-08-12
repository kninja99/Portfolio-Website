/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      Gray: '#2C3333',
      'dark-teal': '#2E4F4F',
      'light-teal': '#0E8388',
      'sky-blue': '#CBE4DE',
    },
    extend: {},
  },
  plugins: [],
};
