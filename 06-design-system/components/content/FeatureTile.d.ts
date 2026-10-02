import * as React from 'react';

/**
 * One cell of the eight-tile web feature block: big heading, one explaining line, an image.
 * @startingPoint section="Content" subtitle="Feature tile from the eight-tile web block" viewport="700x300"
 */
export interface FeatureTileProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  /** One short line. A full stop, never an exclamation mark. */
  body?: string;
  image?: string;
  imageAlt?: string;
  /** `tile` = light grey, `dark` = Black. */
  tone?: 'tile' | 'dark';
  /** CSS aspect-ratio for the tile. */
  aspect?: string;
}
export declare function FeatureTile(props: FeatureTileProps): JSX.Element;
