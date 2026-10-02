import * as React from 'react';

/**
 * Product tile for shop grids: studio render on a light grey plane, name, meta line, price.
 * @startingPoint section="Content" subtitle="Shop grid product card" viewport="700x400"
 */
export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  /** Short spec line, e.g. "3× Universal · 1.8m cable". */
  meta?: string;
  price?: string;
  image: string;
  imageAlt?: string;
  footer?: React.ReactNode;
}
export declare function ProductCard(props: ProductCardProps): JSX.Element;
