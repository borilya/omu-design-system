import React from 'react';

const colorways = {
  'warm-grey': { label: 'Warm grey', panel: 'var(--omu-cw-warm-grey-panel)', shell: 'var(--omu-cw-warm-grey-shell)' },
  black: { label: 'Black', panel: 'var(--omu-cw-black-panel)', shell: 'var(--omu-cw-black-shell)' },
  terracotta: { label: 'Terracotta', panel: 'var(--omu-cw-terracotta-panel)', shell: 'var(--omu-cw-terracotta-shell)' },
  olive: { label: 'Olive', panel: 'var(--omu-cw-olive-panel)', shell: 'var(--omu-cw-olive-shell)' },
  navy: { label: 'Navy', panel: 'var(--omu-cw-navy-panel)', shell: 'var(--omu-cw-navy-shell)' }
};

export function ColorwaySwatch({ colorway = 'olive', selected = false, size = 40, showLabel = false, onClick, style, ...rest }) {
  const cw = colorways[colorway] || colorways.olive;
  return <button type="button" onClick={onClick} aria-pressed={selected} title={cw.label} style={{
    display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--omu-space-2)',
    background: 'none', border: 0, padding: 0, cursor: 'pointer', fontFamily: 'var(--omu-font-body)', ...style
  }} {...rest}>
    <span style={{
      width: size, height: size, borderRadius: 'var(--omu-radius-pill)',
      background: 'linear-gradient(90deg,' + cw.shell + ' 0 50%,' + cw.panel + ' 50% 100%)',
      boxShadow: selected ? '0 0 0 1px var(--omu-bg), 0 0 0 2px var(--omu-black)' : 'inset 0 0 0 1px rgba(38,36,35,.12)',
      display: 'block'
    }} />
    {showLabel && <span style={{ fontSize: 'var(--omu-text-caption)', color: selected ? 'var(--omu-fg)' : 'var(--omu-fg-muted)' }}>{cw.label}</span>}
  </button>;
}
