import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  // Co-located stories — lives right next to each component
  stories: ['../src/**/*.stories.@(ts|tsx)'],

  addons: [
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-onboarding',
    '@storybook/experimental-addon-test',
  ],

  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },

  docs: {},
}

export default config
