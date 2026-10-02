import React from 'react';

const files = {
  wordmark: { light: 'omu-wordmark-light.svg', dark: 'omu-wordmark-dark.svg' },
  symbol: { light: 'omu-symbol-light-on-dark.svg', dark: 'omu-symbol-dark-on-light.svg' }
};

export function Logo({ mark = 'wordmark', tone = 'dark', height = 24, assetPath = '../../assets/logo', style, ...rest }) {
  const src = assetPath + '/' + files[mark][tone];
  return <img src={src} alt="OMU" style={{ height, width: 'auto', display: 'block', ...style }} {...rest} />;
}
