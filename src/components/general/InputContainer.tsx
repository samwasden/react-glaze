import React from 'react';
import styled from 'styled-components';

export interface IInputContainerProps extends React.PropsWithChildren {
  invalid?: boolean;
}

const StyledInputContainer = styled.div`
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 2px;
  width: min-content;
  height: min-content;
  position: relative;
  padding: 0.25em 0.25em 0.15em;
  color: ${(props) => props.theme.primary};
`;

export const InputContainer: React.FunctionComponent<IInputContainerProps> = (props) => {
  const { children, invalid } = props;

  return <StyledInputContainer className={`glz-input-container ${invalid && 'glz-input-container-invalid'}`}>{children}</StyledInputContainer>;
};

InputContainer.defaultProps = {
  invalid: false
};
