/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'blue-gray': '#2C3333',
      'dark-teal': '#2E4F4F',
      'light-teal': '#0E8388',
      'sky-blue': '#CBE4DE',
      'dark-gray': '#18191A',
      white: '#FFFFFF',
      'dark-white': 'rgba(255, 255, 255 , 90%)',
      'dark-blue': '#093a4a',
      'light-blue': '#00b4d8',
      'btn-blue': '#0c4d62',
    },
    extend: {},
  },
  plugins: [],
};
