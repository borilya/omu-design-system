import * as React from 'react';

/** Square 20px checkbox, 6px radius; checked state is a solid Black fill. */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  disabled?: boolean;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
