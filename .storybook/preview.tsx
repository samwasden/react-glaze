import React from 'react';
import type { Preview } from '@storybook/react';
import { lightTheme, darkTheme } from '../src/themes/glaze-theme';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(./Roboto.otf) format('opentype');
  }
  
  body {
    font-family: 'Roboto', sans-serif;
  }

  .glz-button {
    border-radius: 2px;
    padding: 0.25em 1em 0.15em;
    font-size: 1em;
    user-select: none;
    cursor: pointer;
  }
`;

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
