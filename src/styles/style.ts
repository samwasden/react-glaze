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

  .glz-input {
    outline: none;
    border-radius: 2px;
    font-size: 1em;
    min-width: 140px;
  }

  .glz-input:focus::placeholder {
    color: transparent;
  }

  .glz-input-container {
    border: 1px solid ${(props) => props.theme.primary};
    color: ${(props) => props.theme.primary};
  }

  .glz-label {
    color: ${(props) => props.theme.primary};
    transition: all 200ms;
  }

  .glz-label-focus {
    top: -50%;
    font-size: .5em;
  }

  .glz-label-blur {
    top: 0%;
  }
`;
