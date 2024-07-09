const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    fontFamily: { 'sans-serif': ['"Montserrat"', 'arial', 'sans-serif'] },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      red: {
        300: '#EF6373',
        400: '#ff6464',
        500: '#ec4f3d',
      },
      lime: {
        500: '#83b135',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.4xl') },
      });
    }),
  ],
};
