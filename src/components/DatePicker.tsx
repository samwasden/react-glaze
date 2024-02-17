import React from 'react';
import styled from 'styled-components';

export interface IDatePickerProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const StyledDatePicker = styled.input`
  color: ${(props) => props.theme.primary};
`;

export const DatePicker: React.FunctionComponent<IDatePickerProps> = (props) => {
  return <StyledDatePicker {...props} type="date" />;
};
