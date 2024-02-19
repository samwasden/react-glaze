import React from 'react';

export interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  labelClass?: string;
  invalid: boolean;
  hint?: string;
  error?: string;
}
