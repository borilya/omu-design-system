function Highlights() {
  const items = ['Spaces', 'Details', 'Colors', 'At Home', 'Press'];
  return (
    <div style={{ display: 'flex', gap: 'var(--omu-space-8)', padding: 'var(--omu-space-4) 0 var(--omu-space-12)' }}>
      {items.map(i => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--omu-space-2)' }}>
          <div style={{ width: 88, height: 88, borderRadius: '50%', background: 'var(--omu-surface-tile)', border: '1px solid var(--omu-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <img src="../../assets/renders/front/omu-3x-front-olive-r03.png" alt="" style={{ width: '64%' }} />
          </div>
          <span style={{ fontSize: 'var(--omu-text-caption)' }}>{i}</span>
        </div>
      ))}
    </div>
  );
}
window.Highlights = Highlights;
