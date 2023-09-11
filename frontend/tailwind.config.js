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
      'project-black': '#0c0c0d',
    },
    extend: {
      keyframes: {
        shadowPop: {
          '0%': {
            transform: 'translateX(0) translateY(0)',
            boxShadow: '0 0 0 0 #00b4d8',
          },
          '100%': {
            transform: 'translateX(-4px) translateY(-4px)',
            boxShadow:
              '1px 1px #00b4d8, 2px 2px #00b4d8, 3px 3px #00b4d8, 4px 4px #00b4d8',
          },
        },
        imgPop: {
          '0%': {
            transform: 'translateX(0) translateY(0)',
          },
          '100%': {
            transform: 'translateX(-8px) translateY(-8px)',
          },
        },
        bgDrop: {
          '0%': {
            transform: 'translateX(0) translateY(0)',
          },
          '100%': {
            transform: 'translateX(4px) translateY(4px)',
          },
        },
        textFadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        fadeIn: {
          '0%': {
            opacity: '.5',
          },
          '100%': {
            opacity: '1',
          },
        },
        fadeOut: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '.5',
          },
        },
        slideRightToLeft: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        slideLeftToRight: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        cardHoverUp: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(-10px)',
          },
        },
        cardHoverDown: {
          '0%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
    },
    animation: {
      shadowPop: 'shadowPop 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both',
      imgPop: 'imgPop 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both',
      bgDrop: 'bgDrop 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both',
      textFadeIn:
        'textFadeIn .5s cubic-bezier(0.470, 0.000, 0.745, 0.715) both',
      fadeIn: 'fadeIn .2s cubic-bezier(0.470, 0.000, 0.745, 0.715) both',
      fadeOut: 'fadeOut .2s cubic-bezier(0.470, 0.000, 0.745, 0.715) both',
      slideRightToLeft:
        'slideRightToLeft .4s cubic-bezier(0.470, 0.000, 0.745, 0.715) both',
      slideLeftToRight:
        'slideLeftToRight .4s cubic-bezier(0.470, 0.000, 0.745, 0.715) both',
      cardHoverUp:
        'cardHoverUp .3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both',
      cardHoverDown:
        'cardHoverDown .3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both',
    },
  },
  plugins: [],
};
