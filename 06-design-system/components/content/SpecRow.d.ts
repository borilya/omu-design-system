import * as React from 'react';

/** One label/value line in a specification list, separated by a hairline rule. */
export interface SpecRowProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  value: React.ReactNode;
  tone?: 'default' | 'inverse';
}
export declare function SpecRow(props: SpecRowProps): JSX.Element;
