import * as React from 'react';

/**
 * Selectable dot for one of the five production colorways; the split fill shows shell and panel.
 * @startingPoint section="Content" subtitle="Five-colorway picker" viewport="700x150"
 */
export interface ColorwaySwatchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colorway?: 'warm-grey' | 'black' | 'terracotta' | 'olive' | 'navy';
  selected?: boolean;
  size?: number;
  showLabel?: boolean;
}
export declare function ColorwaySwatch(props: ColorwaySwatchProps): JSX.Element;
