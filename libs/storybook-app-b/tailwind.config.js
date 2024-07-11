const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const appBConfig = require('../app-b/tailwind/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [appBConfig],
  content: [
    join(__dirname, '../app-b/ui/src/**/!(*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
