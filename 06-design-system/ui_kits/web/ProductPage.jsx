const R = '../../assets/renders';
const names = { 'warm-grey': 'Warm grey', black: 'Black', terracotta: 'Terracotta', olive: 'Olive', navy: 'Navy' };

function ProductPage({ colorway, setColorway, onAdd, added }) {
  const { Button, Select, Tag, SpecRow, ColorwaySwatch, Divider } = window.OMU;
  const [view, setView] = React.useState('hero');
  const src = view === 'hero'
    ? R + '/hero/omu-3x-hero-' + colorway + '-r03.png'
    : R + '/front/omu-3x-front-' + colorway + '-r03.png';
  return (
    <section style={{ maxWidth: 'var(--omu-container)', margin: '0 auto', padding: 'var(--omu-space-12) 32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 'var(--omu-space-16)', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--omu-space-4)' }}>
          <div style={{ background: 'var(--omu-surface-tile)', borderRadius: 'var(--omu-radius-lg)', padding: 'var(--omu-space-8)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 420 }}>
            <img src={src} alt="" style={{ width: '100%', maxHeight: 420, objectFit: 'contain', display: 'block' }} />
          </div>
          <div style={{ display: 'flex', gap: 'var(--omu-space-3)' }}>
            {['hero', 'front'].map(v => (
              <button key={v} onClick={() => setView(v)} style={{
                border: '1px solid ' + (view === v ? 'var(--omu-black)' : 'var(--omu-border)'),
                background: 'var(--omu-surface-tile)', borderRadius: 'var(--omu-radius-md)', padding: 8, cursor: 'pointer', width: 96, height: 96
              }}>
                <img src={v === 'hero' ? R + '/hero/omu-3x-hero-' + colorway + '-r03.png' : R + '/front/omu-3x-front-' + colorway + '-r03.png'} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--omu-space-6)' }}>
          <Tag>Power strip</Tag>
          <div>
            <h1 style={{ fontSize: 'var(--omu-text-h1)' }}>Extension cord, 3× Universal</h1>
            <p style={{ fontSize: 'var(--omu-text-lead)', color: 'var(--omu-fg-muted)', margin: '8px 0 0' }}>{names[colorway]} · 1.8 m cable · AED 349</p>
          </div>
          <p style={{ margin: 0, maxWidth: '42ch' }}>
            Pick it up, and you'll get why you won't want to tuck it behind the couch. A matte shell with no glare, a braided cord that lies flat, and a base that holds where you put it.
          </p>
          <div>
            <div style={{ fontSize: 'var(--omu-text-caption)', letterSpacing: 'var(--omu-ls-label)', textTransform: 'uppercase', color: 'var(--omu-fg-muted)', marginBottom: 'var(--omu-space-3)' }}>Colour — {names[colorway]}</div>
            <div style={{ display: 'flex', gap: 'var(--omu-space-4)' }}>
              {Object.keys(names).map(c => <ColorwaySwatch key={c} colorway={c} selected={colorway === c} onClick={() => setColorway(c)} />)}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 'var(--omu-space-3)', alignItems: 'flex-end' }}>
            <Select label="Quantity" options={['1', '2', '3']} style={{ width: 110 }} />
            <Button size="lg" onClick={onAdd}>{added ? 'In the bag' : 'Add to bag'}</Button>
          </div>
          <Divider spacing="var(--omu-space-2)" />
          <div>
            <SpecRow label="Body" value="160 × 50 × 36 mm" />
            <SpecRow label="Outlets" value="3 × Type G Universal, 22 mm pitch" />
            <SpecRow label="USB" value="2 × USB-C on the end face" />
            <SpecRow label="Cable" value="1800 mm, Ø6 mm, braided nylon" />
            <SpecRow label="Mounting" value="5 magnets Ø20 mm + 50 × 50 mm plate" />
            <SpecRow label="Finish" value="Matte throughout" />
          </div>
        </div>
      </div>
    </section>
  );
}
window.ProductPage = ProductPage;
