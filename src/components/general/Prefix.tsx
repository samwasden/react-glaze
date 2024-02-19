import React from 'react';
import styled from 'styled-components';

export interface IPrefixProps extends React.PropsWithChildren {}

const StyledPrefix = styled.div``;

export const Prefix: React.FunctionComponent<IPrefixProps> = (props) => {
  const { children } = props;
  return <StyledPrefix>{children}</StyledPrefix>;
};
