import * as React from 'react';

/** Small uppercase label for category, revision, or colorway names. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'solid';
  children?: React.ReactNode;
}
export declare function Tag(props: TagProps): JSX.Element;
