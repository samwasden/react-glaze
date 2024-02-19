import React from 'react';
import styled from 'styled-components';

export interface IInputHintProps extends React.PropsWithChildren {
  className?: string;
  invalid?: boolean;
}

const StyledInputHint = styled.div`
  font-size: 0.5em;
  color: ${(props) => props.theme.glaze};
  position: absolute;
  top: 110%;
  padding: 1px 2px;
`;

export const InputHint: React.FunctionComponent<IInputHintProps> = (props) => {
  const { children, className, invalid } = props;

  return <StyledInputHint className={`glz-input-hint ${invalid && 'glz-input-hint-invalid'} ${className && className}`}>{children}</StyledInputHint>;
};

InputHint.defaultProps = {
  invalid: false
};
