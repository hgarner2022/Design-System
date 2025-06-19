import type { Preview } from '@storybook/react'
import { DocsPage } from '@storybook/blocks'
import '../src/styles/theme.css'
import '../src/app/globals.css'
import React from 'react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs: {
      page: DocsPage,
    },
    options: {
      storySort: {
        order: [
          'Documentation',
          ['Introduction', 'Getting Started', 'Design Tokens', 'Contributing', 'Changelog'],
          'Design System',
          ['Atoms', 'Blocks', 'Pages'],
        ],
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#0a0a0a',
        },
      ],
    },
  },

  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;
      return React.createElement('div', {
        className: theme === 'dark' ? 'dark' : ''
      }, React.createElement(Story));
    },
  ],
};

export default preview;