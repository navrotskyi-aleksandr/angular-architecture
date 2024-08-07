const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const appAConfig = require('../app-a/tailwind/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [appAConfig],
  content: [
    join(__dirname, '../app-a/ui/src/**/!(*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
