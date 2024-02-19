import React from 'react';
import styled from 'styled-components';
import { hex } from '../../enums';

export interface IInputContainerProps extends React.PropsWithChildren {
  invalid?: boolean;
  disabled?: boolean;
  className?: string;
  prefix?: React.ReactElement;
  suffix?: React.ReactElement;
}

const StyledInputContainer = styled.div`
  border: 1px solid ${(props) => props.theme.glaze};
  border-radius: 2px;
  width: min-content;
  height: min-content;
  position: relative;
  padding: 0.25em 0.25em 0.15em;
  color: ${(props) => props.theme.glaze};
  background-color: ${(props) => props.theme.glaze + hex.H0};
  transition: all ${(props) => props.theme.timing}ms ease-in;

  &:focus-within {
    background-color: ${(props) => props.theme.glaze + hex.H25};
  }
`;

export const InputContainer: React.FunctionComponent<IInputContainerProps> = (props) => {
  const { children, invalid, disabled, className, prefix, suffix } = props;

  return (
    <StyledInputContainer className={`glz-input-container ${invalid && 'glz-input-container-invalid'} ${disabled && 'glz-input-container-disabled'} ${className && className}`}>
      {prefix && prefix}
      {children}
      {suffix && suffix}
    </StyledInputContainer>
  );
};

InputContainer.defaultProps = {
  invalid: false,
  disabled: false
};
