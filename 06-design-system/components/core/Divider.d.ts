import * as React from 'react';

/** Hairline rule. OMU separates with space first, a rule only when structure demands it. */
export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  tone?: 'default' | 'inverse';
  /** CSS length for vertical margin. */
  spacing?: string;
}
export declare function Divider(props: DividerProps): JSX.Element;
