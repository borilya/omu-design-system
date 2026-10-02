import React from 'react';

export function Checkbox({ label, checked, defaultChecked = false, onChange, disabled = false, style, ...rest }) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const isOn = checked === undefined ? internal : checked;
  const handle = e => { if (checked === undefined) setInternal(e.target.checked); if (onChange) onChange(e); };
  return <label style={{
    display: 'inline-flex', alignItems: 'flex-start', gap: 'var(--omu-space-3)', cursor: disabled ? 'default' : 'pointer',
    fontFamily: 'var(--omu-font-body)', fontSize: 'var(--omu-text-body)', color: 'var(--omu-fg)',
    opacity: disabled ? 0.4 : 1, ...style
  }}>
    <input type="checkbox" checked={isOn} onChange={handle} disabled={disabled} style={{
      appearance: 'none', width: 20, height: 20, flex: '0 0 auto', marginTop: 2,
      border: '1px solid ' + (isOn ? 'var(--omu-black)' : 'var(--omu-border-strong)'),
      borderRadius: 'var(--omu-radius-sm)', background: isOn ? 'var(--omu-black)' : 'transparent', cursor: 'inherit',
      transition: 'background var(--omu-duration) var(--omu-ease), border-color var(--omu-duration) var(--omu-ease)'
    }} {...rest} />
    <span>{label}</span>
  </label>;
}
