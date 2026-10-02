import React from 'react';

const tones = {
  neutral: { background: 'transparent', color: 'var(--omu-fg-muted)', borderColor: 'var(--omu-border)' },
  solid: { background: 'var(--omu-black)', color: 'var(--omu-white)', borderColor: 'transparent' }
};

export function Tag({ tone = 'neutral', children, style, ...rest }) {
  return <span style={{
    display: 'inline-flex', alignItems: 'center', borderRadius: 'var(--omu-radius-pill)',
    border: '1px solid', padding: '5px 12px', fontFamily: 'var(--omu-font-body)',
    fontSize: 'var(--omu-text-caption)', lineHeight: 1.2, letterSpacing: 'var(--omu-ls-label)',
    textTransform: 'uppercase', ...tones[tone], ...style
  }} {...rest}>{children}</span>;
}
