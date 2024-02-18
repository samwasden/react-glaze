import React from 'react';
import type { Preview } from '@storybook/react';
import { lightTheme, darkTheme } from '../src/themes/glaze-theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/styles/style';

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
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    )
  ]
};

export default preview;
