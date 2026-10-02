import React from 'react';

export function Statement({ children, eyebrow, tone = 'default', size = 'display', align = 'left', style, ...rest }) {
  const surface = tone === 'dark' ? { background: 'var(--omu-black)', color: 'var(--omu-white)' }
    : { background: 'transparent', color: 'var(--omu-fg)' };
  const type = size === 'display'
    ? { fontSize: 'var(--omu-text-display)', lineHeight: 'var(--omu-lh-display)', letterSpacing: 'var(--omu-ls-display)' }
    : { fontSize: 'var(--omu-text-h1)', lineHeight: 'var(--omu-lh-h1)', letterSpacing: 'var(--omu-ls-h1)' };
  return <div style={{ ...surface, padding: 'var(--omu-space-16) var(--omu-space-12)', textAlign: align, ...style }} {...rest}>
    {eyebrow && <div style={{ fontFamily: 'var(--omu-font-body)', fontSize: 'var(--omu-text-caption)', letterSpacing: 'var(--omu-ls-label)', textTransform: 'uppercase', opacity: .62, marginBottom: 'var(--omu-space-6)' }}>{eyebrow}</div>}
    <div style={{ fontFamily: 'var(--omu-font-heading)', fontWeight: 700, ...type }}>{children}</div>
  </div>;
}
