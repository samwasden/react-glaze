import React from 'react';
import styled from 'styled-components';
import { InputContainer } from './general/InputContainer';
import { InputLabel } from './general/InputLabel';
import { IInputProps } from '../props/IInputProps.interface';
import { InputHint } from './general/InputHint';

export interface IDatePickerProps extends IInputProps {}

const StyledDatePicker = styled.input`
  color: ${(props) => props.theme.primary};
  border: none;
  background: none;
  outline: none;
  border-radius: 2px;
  min-width: 140px;
  line-height: 1em;
  opacity: 1;
`;

export const DatePicker: React.FunctionComponent<IDatePickerProps> = (props) => {
  const { className, label, labelClass, invalid, hint, error } = props;

  const inputRef: React.RefObject<HTMLInputElement> = React.useRef<null | HTMLInputElement>(null);
  const styledClass: string = `glz-input ${className ? className : ''}`;

  const onFocus = (event: React.FocusEvent<HTMLInputElement, Element>): void => {
    if (props.onFocus) props.onFocus(event);
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement, Element>): void => {
    if (props.onBlur) props.onBlur(event);
  };

  return (
    <InputContainer invalid={invalid}>
      {label ? (
        <InputLabel className={labelClass} focus={true}>
          {label}
        </InputLabel>
      ) : null}
      <StyledDatePicker type="date" onFocus={(e) => onFocus(e)} onBlur={(e) => onBlur(e)} ref={inputRef} className={styledClass} {...props} />
      {hint && !(invalid && error) ? <InputHint>{hint}</InputHint> : null}
      {invalid && error ? <InputHint invalid={true}>{error}</InputHint> : null}
    </InputContainer>
  );
};
