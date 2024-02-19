import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(./Roboto.otf) format('opentype');
  }
  
  body {
    font-family: 'Roboto', sans-serif;
  }

  .glz-button {
    outline: none;
    border-radius: 2px;
    padding: 0.25em 1em 0.15em;
    font-size: 1em;
    user-select: none;
    cursor: pointer;
  }

  .glz-input::placeholder {
    opacity: 1;
    transition: all 200ms ease-in;
  }

  .glz-input:not(:focus)::placeholder {
    opacity: 0;
  }

  .glz-label-focus {
    top: -80%;
    font-size: .5em;
    opacity: 1;
  }

  .glz-label-blur {
    top: 0%;
  }
`;
