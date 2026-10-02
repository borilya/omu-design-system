import * as React from 'react';

/** The OMU wordmark or circle symbol, served from assets/logo. Never redraw the mark. */
export interface LogoProps extends React.HTMLAttributes<HTMLImageElement> {
  /** `wordmark` = lowercase `omu`; `symbol` = the `m` in a circle (avatar, favicon). */
  mark?: 'wordmark' | 'symbol';
  /** `dark` for light backgrounds, `light` for the Black surface. */
  tone?: 'dark' | 'light';
  height?: number;
  /** Relative path to assets/logo from the consuming page. */
  assetPath?: string;
}
export declare function Logo(props: LogoProps): JSX.Element;
