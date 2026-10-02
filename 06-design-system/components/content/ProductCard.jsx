import React from 'react';

export function ProductCard({ name, meta, price, image, imageAlt = '', footer, style, ...rest }) {
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--omu-space-4)', fontFamily: 'var(--omu-font-body)', ...style }} {...rest}>
    <div style={{ background: 'var(--omu-surface-tile)', borderRadius: 'var(--omu-radius-lg)', aspectRatio: '3 / 4', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={image} alt={imageAlt || name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--omu-space-1)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--omu-space-4)' }}>
        <span style={{ fontFamily: 'var(--omu-font-heading)', fontSize: 'var(--omu-text-h3)', lineHeight: 'var(--omu-lh-h3)' }}>{name}</span>
        {price && <span style={{ fontSize: 'var(--omu-text-lead)' }}>{price}</span>}
      </div>
      {meta && <span style={{ fontSize: 'var(--omu-text-caption)', color: 'var(--omu-fg-muted)' }}>{meta}</span>}
    </div>
    {footer}
  </div>;
}
