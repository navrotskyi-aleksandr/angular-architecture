const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');
const appBConfig = require('../../libs/app-b/tailwind/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [appBConfig],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
