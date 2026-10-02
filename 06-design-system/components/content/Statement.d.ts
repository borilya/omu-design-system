import * as React from 'react';

/**
 * Full-width type statement — taglines and message pillars set large on a quiet plane.
 * @startingPoint section="Content" subtitle="Full-bleed tagline block" viewport="700x260"
 */
export interface StatementProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  tone?: 'default' | 'dark';
  size?: 'display' | 'h1';
  align?: 'left' | 'center';
  children?: React.ReactNode;
}
export declare function Statement(props: StatementProps): JSX.Element;
