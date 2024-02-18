import React from 'react';
import styled from 'styled-components';
import { hex } from '../enums/hex';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant: 'outline' | 'text' | 'fill';
  disabled: boolean;
}

const OutlineButton = styled.button`
  color: ${(props) => props.theme.glaze};
  background: none;
  border: solid 1px ${(props) => props.theme.glaze};
  transition: all 100ms ease-in;
  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.glaze + hex.H25};
  }
  &:disabled {
    color: ${(props) => props.theme.disabled};
    border: solid 1px ${(props) => props.theme.disabled};
  }
`;

const FillButton = styled.button`
  color: ${(props) => props.theme.glaze};
  background: ${(props) => props.theme.glaze + hex.H50};
  border: solid 1px ${(props) => props.theme.glaze};
  transition: all 100ms ease-in;
  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.glaze + hex.H25};
  }
  &:disabled {
    border: solid 1px ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.disabled};
    background-color: ${(props) => props.theme.disabled + hex.H50};
  }
`;

const TextButton = styled.button`
  color: ${(props) => props.theme.glaze};
  background-color: ${(props) => props.theme.glaze + hex.H0};
  border: solid 1px ${(props) => props.theme.glaze + hex.H0};
  transition: all 100ms ease-in;
  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.glaze + hex.H25};
    border: solid 1px ${(props) => props.theme.glaze + hex.H25};
  }
  &:disabled {
    border: solid 1px ${(props) => props.theme.disabled + hex.H0};
    color: ${(props) => props.theme.disabled};
  }
`;

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
  const { children, variant, className } = props;
  const styledClass: string = `glz-button ${className ? className : ''}`;

  const renderSwitch = (variant: 'outline' | 'fill' | 'text') => {
    switch (variant) {
      case 'outline':
        return (
          <OutlineButton className={styledClass} {...props}>
            {children}
          </OutlineButton>
        );
      case 'fill':
        return (
          <FillButton className={styledClass} {...props}>
            {children}
          </FillButton>
        );
      case 'text':
        return (
          <TextButton className={styledClass} {...props}>
            {children}
          </TextButton>
        );
    }
  };

  return renderSwitch(variant);
};

Button.defaultProps = {
  variant: 'outline',
  disabled: false
};
