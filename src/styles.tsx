import React, { PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';

export interface IGlazeStyleProviderProps extends PropsWithChildren {
  theme: any;
}

export const GlazeStyles = createGlobalStyle`
    @font-face {
      font-family: 'Roboto';
      src: url(./Roboto.otf) format('opentype');
    }
    
    body {
      font-family: 'Roboto', sans-serif;
    }
`;

export const GlazeStyleProvider: React.FunctionComponent<IGlazeStyleProviderProps> = (props) => {
  const { children, theme } = props;

  return (
    <>
      <GlazeStyles theme={theme} />
      {children}
    </>
  );
};
