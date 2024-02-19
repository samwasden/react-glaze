import React from 'react';
import styled from 'styled-components';

export interface IInputLabelProps extends React.PropsWithChildren {
  focus: boolean;
  className?: string;
}

const StyledInputLabel = styled.label`
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 1em;
  padding: 1px 2px;
  color: ${(props) => props.theme.primary};
  transition: all 200ms;
  opacity: 0.75;
`;

export const InputLabel: React.FunctionComponent<IInputLabelProps> = (props) => {
  const { children, focus, className } = props;

  return <StyledInputLabel className={`glz-label ${focus ? 'glz-label-focus' : 'glz-label-blur'} ${className ? className : ''}`}>{children}</StyledInputLabel>;
};

InputLabel.defaultProps = {
  focus: false
};
