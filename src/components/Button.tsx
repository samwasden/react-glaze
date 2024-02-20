import React from 'react';
import styled from 'styled-components';
import { hex } from '../enums/hex';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'outline' | 'text' | 'fill';
  value?: any;
}

export const OutlineButton = styled.button<IButtonProps>`
  color: ${(props) => props.theme.glaze};
  background: none;
  border: solid 1px ${(props) => props.theme.glaze};
  transition: all ${(props) => props.theme.timing}ms ease-in;
  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.glaze + hex.H25};
  }
  &:disabled {
    color: ${(props) => props.theme.disabled};
    border: solid 1px ${(props) => props.theme.disabled};
  }
`;

export const FillButton = styled.button<IButtonProps>`
  color: ${(props) => props.theme.glaze};
  background: ${(props) => props.theme.glaze + hex.H25};
  border: solid 1px ${(props) => props.theme.glaze};
  transition: all ${(props) => props.theme.timing}ms ease-in;
  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.glaze + hex.H50};
  }
  &:disabled {
    border: solid 1px ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.disabled};
    background-color: ${(props) => props.theme.disabled + hex.H50};
  }
`;

export const TextButton = styled.button<IButtonProps>`
  color: ${(props) => props.theme.glaze};
  background-color: ${(props) => props.theme.glaze + hex.H0};
  border: solid 1px ${(props) => props.theme.glaze + hex.H0};
  transition: all ${(props) => props.theme.timing}ms ease-in;
  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.glaze + hex.H25};
  }
  &:disabled {
    border: solid 1px ${(props) => props.theme.disabled + hex.H0};
    color: ${(props) => props.theme.disabled};
  }
`;

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
  const { children, variant = 'outline', className } = props;
  const styleClass: string = `glz-button ${className ? className : ''}`;

  const renderSwitch = (variant: 'outline' | 'fill' | 'text') => {
    switch (variant) {
      case 'outline':
        return (
          <OutlineButton className={styleClass} {...props}>
            {children}
          </OutlineButton>
        );
      case 'fill':
        return (
          <FillButton className={styleClass} {...props}>
            {children}
          </FillButton>
        );
      case 'text':
        return (
          <TextButton className={styleClass} {...props}>
            {children}
          </TextButton>
        );
    }
  };

  return renderSwitch(variant);
};
