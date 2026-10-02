import React from 'react';

export function SpecRow({ label, value, tone = 'default', style, ...rest }) {
  const muted = tone === 'inverse' ? 'var(--omu-fg-muted-inverse)' : 'var(--omu-fg-muted)';
  const rule = tone === 'inverse' ? 'rgba(215,210,203,.24)' : 'var(--omu-border)';
  return <div style={{
    display: 'flex', justifyContent: 'space-between', gap: 'var(--omu-space-8)',
    padding: 'var(--omu-space-4) 0', borderBottom: '1px solid ' + rule,
    fontFamily: 'var(--omu-font-body)', fontSize: 'var(--omu-text-body)', ...style
  }} {...rest}>
    <span style={{ color: muted }}>{label}</span>
    <span style={{ textAlign: 'right' }}>{value}</span>
  </div>;
}
