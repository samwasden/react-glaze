import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { hex } from '../enums';
import { Button, FillButton, OutlineButton, TextButton } from './Button';

export interface IButtonGroupProps extends React.PropsWithChildren {
  variant?: 'outline' | 'fill' | 'text';
  className?: string;
  disabled?: boolean;
}

const OutlineButtonGroup = styled.div<IButtonGroupProps>`
  color: ${(props) => props.theme.glaze};
  background: none;
  border: solid 1px ${(props) => (props.disabled ? props.theme.disabled : props.theme.glaze)};
  transition: all ${(props) => props.theme.timing}ms ease-in;
  ${OutlineButton} {
    border: 0px solid ${(props) => props.theme.glaze + hex.H0};
    border-radius: 0;
  }
  ${OutlineButton}:not(:last-child) {
    border-right: 1px solid ${(props) => (props.disabled ? props.theme.disabled : props.theme.glaze)};
  }
  ${OutlineButton}:first-child {
    border-radius: ${(props) => props.theme.radius}px 0 0 ${(props) => props.theme.radius}px;
  }
  ${OutlineButton}:last-child {
    border-radius: 0 ${(props) => props.theme.radius}px ${(props) => props.theme.radius}px 0;
  }
`;

const FillButtonGroup = styled.div<IButtonGroupProps>`
  color: ${(props) => props.theme.glaze};
  background: none;
  border: solid 1px ${(props) => (props.disabled ? props.theme.disabled : props.theme.glaze)};
  transition: all ${(props) => props.theme.timing}ms ease-in;
  ${FillButton} {
    border: 0px solid ${(props) => props.theme.glaze + hex.H0};
    border-radius: 0;
  }
  ${FillButton}:not(:last-child) {
    border-right: 1px solid ${(props) => (props.disabled ? props.theme.disabled : props.theme.glaze)};
  }
  ${FillButton}:first-child {
    border-radius: ${(props) => props.theme.radius}px 0 0 ${(props) => props.theme.radius}px;
  }
  ${FillButton}:last-child {
    border-radius: 0 ${(props) => props.theme.radius}px ${(props) => props.theme.radius}px 0;
  }
`;

const TextButtonGroup = styled.div<IButtonGroupProps>`
  color: ${(props) => props.theme.glaze};
  background-color: ${(props) => props.theme.glaze + hex.H0};
  border: solid 1px ${(props) => (props.disabled ? props.theme.disabled + hex.H0 : props.theme.glaze + hex.H0)};
  transition: all ${(props) => props.theme.timing}ms ease-in;
  ${TextButton} {
    border: 0px solid ${(props) => props.theme.glaze + hex.H0};
    border-radius: 0;
  }
  ${TextButton}:not(:last-child) {
    border-right: 1px solid ${(props) => (props.disabled ? props.theme.disabled : props.theme.glaze)};
  }
  ${TextButton}:first-child {
    border-radius: ${(props) => props.theme.radius}px 0 0 ${(props) => props.theme.radius}px;
  }
  ${TextButton}:last-child {
    border-radius: 0 ${(props) => props.theme.radius}px ${(props) => props.theme.radius}px 0;
  }
`;

export const ButtonGroup: React.FunctionComponent<IButtonGroupProps> = (props) => {
  const { variant = 'outline', className, children, disabled = false } = props;
  const styleClass: string = `${className ? className : ''} glz-button-group ${disabled && 'glz-button-group-disabled'}`;

  const getChildren = (children: ReactNode): ReactElement[] | any => {
    if (Array.isArray(children)) {
      return children
        .filter((child) => child.type === Button)
        .map((child) => (
          <Button variant={variant} disabled={disabled ? disabled : child.props.disabled} {...child.props}>
            {...child.props.children}
          </Button>
        ));
    }
    return children;
  };

  const renderSwitch = (variant: 'outline' | 'fill' | 'text') => {
    switch (variant) {
      case 'outline':
        return (
          <OutlineButtonGroup disabled={disabled} className={styleClass} {...props}>
            {getChildren(children)}
          </OutlineButtonGroup>
        );
      case 'fill':
        return (
          <FillButtonGroup disabled={disabled} className={styleClass} {...props}>
            {getChildren(children)}
          </FillButtonGroup>
        );
      case 'text':
        return (
          <TextButtonGroup disabled={disabled} className={styleClass} {...props}>
            {getChildren(children)}
          </TextButtonGroup>
        );
    }
  };

  return renderSwitch(variant);
};
