import React from 'react';

export function FeatureTile({ title, body, image, imageAlt = '', tone = 'tile', aspect = '4 / 3', style, children, ...rest }) {
  const bg = tone === 'dark' ? 'var(--omu-black)' : 'var(--omu-surface-tile)';
  const fg = tone === 'dark' ? 'var(--omu-white)' : 'var(--omu-black)';
  return <div style={{
    background: bg, color: fg, borderRadius: 'var(--omu-radius-lg)', overflow: 'hidden',
    display: 'flex', flexDirection: 'column', gap: 'var(--omu-space-3)',
    padding: image && !title ? 0 : 'var(--omu-space-8)', aspectRatio: aspect, ...style
  }} {...rest}>
    {image && !title && <img src={image} alt={imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />}
    {title && <h3 style={{ fontFamily: 'var(--omu-font-heading)', fontWeight: 700, fontSize: 'var(--omu-text-h3)', lineHeight: 'var(--omu-lh-h3)', margin: 0 }}>{title}</h3>}
    {body && <p style={{ margin: 0, fontSize: 'var(--omu-text-body)', lineHeight: 'var(--omu-lh-body)', maxWidth: '34ch', color: tone === 'dark' ? 'var(--omu-fg-muted-inverse)' : 'inherit' }}>{body}</p>}
    {image && title && <img src={image} alt={imageAlt} style={{ width: '100%', flex: 1, objectFit: 'cover', borderRadius: 'var(--omu-radius-md)', marginTop: 'auto' }} />}
    {children}
  </div>;
}
