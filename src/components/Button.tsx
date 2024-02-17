import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant: 'outline' | 'fill' | 'text';
}

const OutlineButton = styled.button`
  color: ${(props) => props.theme.primary};
`;

const FillButton = styled.button`
  color: ${(props) => props.theme.secondary};
`;

const TextButton = styled.button`
  color: ${(props) => props.theme.tertiary};
`;

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
  const { children, variant } = props;

  const renderSwitch = (variant: 'outline' | 'fill' | 'text'): ReactElement => {
    switch (variant) {
      case 'outline':
        return <OutlineButton {...props}>{children}</OutlineButton>;
      case 'fill':
        return <FillButton {...props}>{children}</FillButton>;
      case 'text':
        return <TextButton {...props}>{children}</TextButton>;
    }
  };

  return renderSwitch(variant);
};

Button.defaultProps = {
  variant: 'outline'
};
