import React from 'react';

export function Divider({ tone = 'default', spacing = 'var(--omu-space-6)', style, ...rest }) {
  return <hr style={{
    border: 0, borderTop: '1px solid ' + (tone === 'inverse' ? 'rgba(215,210,203,.24)' : 'var(--omu-border)'),
    margin: spacing + ' 0', ...style
  }} {...rest} />;
}
