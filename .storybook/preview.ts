import type { Preview } from '@storybook/vue3'
import '../src/style.css'

const preview: Preview = {
  parameters: {
    // Sort stories: Docs tab first, then alphabetical
    docs: {
      toc: true, // table of contents in docs pages
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Consistent viewport presets for responsive testing
    viewport: {
      viewports: {
        mobile: { name: 'Mobile', styles: { width: '375px', height: '812px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1280px', height: '800px' } },
      },
    },
    // Default background options
    backgrounds: {
      values: [
        { name: 'Light', value: '#ffffff' },
        { name: 'Dark', value: '#1e293b' },
        { name: 'Gray', value: '#f1f5f9' },
      ],
    },
  },

  // Global decorators — wrap every story with consistent padding
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="padding: 2rem;"><story /></div>',
    }),
  ],
}

export default preview
