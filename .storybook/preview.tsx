import React from 'react';
import type { Preview } from '@storybook/react';
import { defaultTheme } from '../src/themes/glaze-theme';
import { ThemeProvider } from 'styled-components';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    )
  ]
};

export default preview;
