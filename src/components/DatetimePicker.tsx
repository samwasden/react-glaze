import React from 'react';
import styled from 'styled-components';

export interface IDatetimePickerProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const StyledDatetimePicker = styled.input`
  color: ${(props) => props.theme.primary};
`;

export const DatetimePicker: React.FunctionComponent<IDatetimePickerProps> = (props) => {
  return <StyledDatetimePicker {...props} type="datetime-local" />;
};
