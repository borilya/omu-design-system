import * as React from 'react';

/**
 * OMU button. Pill-shaped, matte, no gradients; hover is an opacity fade, never a color pop.
 * @startingPoint section="Core" subtitle="Pill buttons in four variants" viewport="700x160"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual weight. `inverse` is for dark (Black) surfaces. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** Renders an <a> instead of a <button>. */
  href?: string;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
