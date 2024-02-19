import React from 'react';
import styled from 'styled-components';

export interface ISuffixProps extends React.PropsWithChildren {}

const StyledSuffix = styled.div``;

export const Suffix: React.FunctionComponent<ISuffixProps> = (props) => {
  const { children } = props;
  return <StyledSuffix>{children}</StyledSuffix>;
};
