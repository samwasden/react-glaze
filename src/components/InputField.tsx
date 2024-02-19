import React from 'react';
import styled from 'styled-components';
import { InputContainer } from './general/InputContainer';
import { InputLabel } from './general/InputLabel';
import { InputHint } from './general/InputHint';
import { IInputProps } from '../props/IInputProps.interface';

export interface IInputFieldProps extends IInputProps {}

const StyledInputField = styled.input`
  color: ${(props) => props.theme.primary};
  border: none;
  background: none;
  outline: none;
  border-radius: 2px;
  min-width: 140px;
  line-height: 1em;
`;

export const InputField: React.FunctionComponent<IInputFieldProps> = (props) => {
  const { className, label, labelClass, invalid, hint, error } = props;

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
    <InputContainer invalid={invalid}>
      {label ? (
        <InputLabel className={labelClass} focus={hasfocus}>
          {label}
        </InputLabel>
      ) : null}
      <StyledInputField onFocus={(e) => onFocus(e)} onBlur={(e) => onBlur(e)} ref={inputRef} className={styledClass} {...props} />
      {hint && !(invalid && error) ? <InputHint>{hint}</InputHint> : null}
      {invalid && error ? <InputHint invalid={true}>{error}</InputHint> : null}
    </InputContainer>
  );
};

InputField.defaultProps = {
  label: undefined,
  placeholder: undefined,
  invalid: false
};
