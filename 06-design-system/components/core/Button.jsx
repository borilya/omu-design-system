import React from 'react';

const base = {
  fontFamily: 'var(--omu-font-body)', border: '1px solid transparent',
  borderRadius: 'var(--omu-radius-pill)', cursor: 'pointer', display: 'inline-flex',
  alignItems: 'center', justifyContent: 'center', gap: 'var(--omu-space-2)',
  transition: 'opacity var(--omu-duration) var(--omu-ease), background var(--omu-duration) var(--omu-ease), border-color var(--omu-duration) var(--omu-ease)',
  textDecoration: 'none', whiteSpace: 'nowrap', lineHeight: 1
};

const sizes = {
  sm: { fontSize: 'var(--omu-text-caption)', padding: '10px 16px' },
  md: { fontSize: 'var(--omu-text-body)', padding: '14px 24px' },
  lg: { fontSize: 'var(--omu-text-lead)', padding: '18px 32px' }
};

const variants = {
  primary: { background: 'var(--omu-black)', color: 'var(--omu-white)' },
  secondary: { background: 'transparent', color: 'var(--omu-black)', borderColor: 'var(--omu-border-strong)' },
  ghost: { background: 'transparent', color: 'var(--omu-black)' },
  inverse: { background: 'var(--omu-white)', color: 'var(--omu-black)' }
};

export function Button({ variant = 'primary', size = 'md', disabled = false, href, children, style, ...rest }) {
  const Tag = href ? 'a' : 'button';
  const s = { ...base, ...sizes[size], ...variants[variant], opacity: disabled ? 0.4 : 1, pointerEvents: disabled ? 'none' : 'auto', ...style };
  return <Tag href={href} disabled={!href ? disabled : undefined} style={s}
    onMouseEnter={e => { e.currentTarget.style.opacity = disabled ? 0.4 : 0.78; }}
    onMouseLeave={e => { e.currentTarget.style.opacity = disabled ? 0.4 : 1; }} {...rest}>{children}</Tag>;
}
