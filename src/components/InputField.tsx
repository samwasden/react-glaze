import React from 'react';
import styled from 'styled-components';

export interface IInputFieldProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const StyledInputField = styled.input`
  color: ${(props) => props.theme.primary};
`;

export const InputField: React.FunctionComponent<IInputFieldProps> = (props) => {
  return <StyledInputField {...props} />;
};
