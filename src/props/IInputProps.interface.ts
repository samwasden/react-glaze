import React from 'react';

export interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, React.PropsWithChildren {
  label?: string;
  labelClass?: string;
  invalid: boolean;
  hint?: string;
  error?: string;
}
