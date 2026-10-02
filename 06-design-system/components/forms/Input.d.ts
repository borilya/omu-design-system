import * as React from 'react';

/** Single-line text field with an uppercase label above and optional hint below. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  invalid?: boolean;
}
export declare function Input(props: InputProps): JSX.Element;
