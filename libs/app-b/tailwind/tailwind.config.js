const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');
const sharedTailwindConfig = require('../../tailwind-preset/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedTailwindConfig],
  theme: {
    fontFamily: { sans: ['"Roboto"', 'Helvetica Neue', 'sans-serif'] },
    extend: {
      colors: {
        lime: {
          500: '#EF6373',
        },
      },
    },
  },
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
