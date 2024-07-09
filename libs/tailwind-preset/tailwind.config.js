const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: { 'sans-serif': ['"Montserrat"', 'arial', 'sans-serif'] },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.4xl') },
      });
    }),
  ],
};
