import React from 'react';

export function Input({ label, hint, invalid = false, style, id, ...rest }) {
  const inputId = id || 'omu-input-' + (label || 'field').toLowerCase().replace(/\s+/g, '-');
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--omu-space-2)', fontFamily: 'var(--omu-font-body)' }}>
    {label && <label htmlFor={inputId} style={{ fontSize: 'var(--omu-text-caption)', letterSpacing: 'var(--omu-ls-label)', textTransform: 'uppercase', color: 'var(--omu-fg-muted)' }}>{label}</label>}
    <input id={inputId} style={{
      appearance: 'none', background: 'transparent', color: 'var(--omu-fg)',
      border: '1px solid ' + (invalid ? 'var(--omu-black)' : 'var(--omu-border-strong)'),
      borderRadius: 'var(--omu-radius-sm)', padding: '14px 16px',
      fontFamily: 'var(--omu-font-body)', fontSize: 'var(--omu-text-body)', lineHeight: 1.2,
      outline: 'none', transition: 'border-color var(--omu-duration) var(--omu-ease)', ...style
    }}
      onFocus={e => { e.currentTarget.style.borderColor = 'var(--omu-black)'; }}
      onBlur={e => { e.currentTarget.style.borderColor = invalid ? 'var(--omu-black)' : 'var(--omu-border-strong)'; }}
      {...rest} />
    {hint && <span style={{ fontSize: 'var(--omu-text-caption)', color: 'var(--omu-fg-muted)' }}>{hint}</span>}
  </div>;
}
