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
    min-width: 140px;
    line-height: 1em;
  }

  .glz-input::placeholder {
    opacity: 1;
    transition: all 200ms ease-in;
  }

  .glz-input:not(:focus)::placeholder {
    opacity: 0;
  }

  .glz-input-container {
    padding: 0.25em 0.25em 0.15em;
    border: 1px solid ${(props) => props.theme.primary};
    color: ${(props) => props.theme.primary};
  }

  .glz-label {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 1em;
    padding: 1px 2px;
    color: ${(props) => props.theme.primary};
    transition: all 200ms;
    opacity: .75;
  }

  .glz-label-focus {
    top: -70%;
    font-size: .5em;
    opacity: 1;
  }

  .glz-label-blur {
    top: 0%;
  }
`;
