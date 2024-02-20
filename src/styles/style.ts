import { createGlobalStyle } from 'styled-components';
import { hex } from '../enums';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(./Roboto.otf) format('opentype');
  }
  
  body {
    font-family: 'Roboto', sans-serif;
  }

  .glz-button-group {
    outline: none;
    border-radius: ${(props) => props.theme.radius}px;
    font-size: 1em;
    user-select: none;
    cursor: pointer;
    width: min-content;
    display: flex;
    align-items: center;
  }

  .glz-button {
    outline: none;
    border-radius: ${(props) => props.theme.radius}px;
    padding: 0.25em 1em 0.15em;
    font-size: 1em;
    user-select: none;
    cursor: pointer;
    white-space: nowrap;
  }

  .glz-button:not(:disabled):active {
    box-shadow: 0px 0px 4px 1px ${(props) => props.theme.glaze};
  }

  .glz-input-container-disabled {
    border-color: ${(props) => props.theme.disabled};
  }

  .glz-input::placeholder {
    opacity: 1;
    color: ${(props) => props.theme.glaze + hex.H50};
    transition: all ${(props) => props.theme.timing}ms ease-in;
  }

  .glz-input:not(:focus)::placeholder {
    opacity: 0;
  }

  .glz-label-focus {
    top: -80%;
    font-size: .5em;
  }

  .glz-label-blur {
    top: 0%;
  }
`;
