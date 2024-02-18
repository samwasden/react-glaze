import React from 'react';
import styled from 'styled-components';
import { InputContainer } from './general/InputContainer';
import { InputLabel } from './general/InputLabel';

export interface IInputFieldProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  labelClass?: string;
  invalid: boolean;
}

const StyledInputField = styled.input`
  color: ${(props) => props.theme.primary};
  border: none;
  background: none;
`;

export const InputField: React.FunctionComponent<IInputFieldProps> = (props) => {
  const { className, label, labelClass, invalid, children } = props;

  console.log(children);

  const inputRef: React.RefObject<HTMLInputElement> = React.useRef<null | HTMLInputElement>(null);
  const [hasfocus, sethasfocus] = React.useState<boolean>(false);
  const styledClass: string = `glz-input ${className ? className : ''}`;

  const onFocus = (event: React.FocusEvent<HTMLInputElement, Element>): void => {
    sethasfocus(true);
    if (props.onFocus) props.onFocus(event);
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement, Element>): void => {
    if (inputRef.current?.value === '') sethasfocus(false);
    if (props.onBlur) props.onBlur(event);
  };

  return (
    <InputContainer className={`glz-input-container ${invalid && 'glz-input-container-invalid'}`}>
      {label ? <InputLabel className={`glz-label ${hasfocus ? 'glz-label-focus' : 'glz-label-blur'} ${labelClass && labelClass}`}>{label}</InputLabel> : null}
      <StyledInputField onFocus={(e) => onFocus(e)} onBlur={(e) => onBlur(e)} ref={inputRef} className={styledClass} {...props} />
    </InputContainer>
  );
};

InputField.defaultProps = {
  label: undefined,
  placeholder: undefined,
  invalid: false
};
