import React, { useState } from 'react';
import styled from 'styled-components';
import { InputContainer } from './general/InputContainer';
import { InputLabel } from './general/InputLabel';

export interface IInputFieldProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
}

const StyledInputField = styled.input`
  color: ${(props) => props.theme.primary};
  border: none;
  background: none;
`;

export const InputField: React.FunctionComponent<IInputFieldProps> = (props) => {
  const { className, label, placeholder } = props;

  const [infocus, setinfocus] = useState<boolean>(false);
  const [holder, setholder] = useState<string | undefined>(placeholder);
  const styledClass: string = `glz-input ${className ? className : ''}`;

  const onFocus = (): void => {
    setinfocus(true);
    setholder(placeholder);
  };

  const onBlur = (): void => {
    setinfocus(false);
    setholder(undefined);
  };

  return (
    <InputContainer className="glz-input-container">
      {label ? <InputLabel className={`glz-label ${infocus ? 'glz-label-focus' : 'glz-label-blur'}`}>{label}</InputLabel> : null}
      <StyledInputField onFocus={() => onFocus()} onBlur={() => onBlur()} placeholder={holder} className={styledClass} {...props} />
    </InputContainer>
  );
};

InputField.defaultProps = {
  label: 'Label',
  placeholder: undefined
};
