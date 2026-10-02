import React from 'react';

export function Select({ label, options = [], style, id, ...rest }) {
  const selectId = id || 'omu-select-' + (label || 'field').toLowerCase().replace(/\s+/g, '-');
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--omu-space-2)', fontFamily: 'var(--omu-font-body)' }}>
    {label && <label htmlFor={selectId} style={{ fontSize: 'var(--omu-text-caption)', letterSpacing: 'var(--omu-ls-label)', textTransform: 'uppercase', color: 'var(--omu-fg-muted)' }}>{label}</label>}
    <select id={selectId} style={{
      appearance: 'none', background: 'transparent', color: 'var(--omu-fg)',
      border: '1px solid var(--omu-border-strong)', borderRadius: 'var(--omu-radius-sm)',
      padding: '14px 40px 14px 16px', fontFamily: 'var(--omu-font-body)', fontSize: 'var(--omu-text-body)',
      lineHeight: 1.2, outline: 'none', cursor: 'pointer',
      backgroundImage: 'linear-gradient(45deg,transparent 50%,var(--omu-fg) 50%),linear-gradient(135deg,var(--omu-fg) 50%,transparent 50%)',
      backgroundPosition: 'calc(100% - 20px) 50%,calc(100% - 14px) 50%',
      backgroundSize: '6px 6px,6px 6px', backgroundRepeat: 'no-repeat', ...style
    }} {...rest}>
      {options.map(o => typeof o === 'string'
        ? <option key={o} value={o}>{o}</option>
        : <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  </div>;
}
