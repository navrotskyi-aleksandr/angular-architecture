import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../../app-b/ui/**/src/lib/**/*.stories.ts'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  previewHead: (head) => `${head}`,
  core: {
    disableTelemetry: true,
  },
  docs: { autodocs: 'tag' },
  staticDirs: [{ from: '../../../apps/app-b/src/assets', to: '/assets' }],
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
