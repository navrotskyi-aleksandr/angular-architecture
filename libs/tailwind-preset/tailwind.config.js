const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    fontFamily: { 'sans-serif': ['"Montserrat"', 'arial', 'sans-serif'] },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      replaceMeWithRealColor: { 100: '#ffffff', 900: '#000000' },
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
