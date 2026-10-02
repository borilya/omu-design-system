const R = '../../assets/renders';

const tiles = [
  { title: 'Interior-first design', body: 'Muted colors and a form that looks intentional next to your furniture.' },
  { title: 'Universal outlets', body: 'That work with UK, US, and EU plugs — no adapters, no guessing.' },
  { title: 'Magnetic base', body: 'To keep it exactly where you want it — clean and effortless.' },
  { title: 'Two USB-C', body: 'On the end face, where a cable can reach them.' },
  { title: 'A cord worth showing', body: 'Braided nylon with a pattern, 1.8 m, lies flat.' },
  { title: 'Five colors', body: 'To perfectly match your interior' }
];

function Landing({ onNavigate, colorway, setColorway }) {
  const { Button, Statement, FeatureTile, Tag, ColorwaySwatch } = window.OMU;
  return (
    <div>
      <section style={{ maxWidth: 'var(--omu-container)', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 'var(--omu-space-16)', alignItems: 'center', padding: 'var(--omu-space-24) 0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--omu-space-6)', alignItems: 'flex-start' }}>
            <Tag>Extension cord · 3× Universal</Tag>
            <h1 className="omu-display" style={{ maxWidth: '10ch' }}>Hide nothing.</h1>
            <p style={{ fontSize: 'var(--omu-text-lead)', lineHeight: 'var(--omu-lh-lead)', maxWidth: '32ch', margin: 0 }}>
              The only power strip you won't want to hide.
            </p>
            <div style={{ display: 'flex', gap: 'var(--omu-space-3)' }}>
              <Button size="lg" onClick={() => onNavigate('product')}>Shop the strip</Button>
              <Button size="lg" variant="secondary" onClick={() => onNavigate('colors')}>See the colours</Button>
            </div>
          </div>
          <div style={{ background: 'var(--omu-surface-tile)', borderRadius: 'var(--omu-radius-lg)', padding: 'var(--omu-space-8)' }}>
            <img src={R + '/hero/omu-3x-hero-' + colorway + '-r03.png'} alt="OMU extension cord with its cord laid in coils" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      <Statement tone="dark" size="h1" align="center" eyebrow="Made to be seen" style={{ margin: '0 32px', borderRadius: 'var(--omu-radius-lg)' }}>
        OMU isn't a power strip. It's an interior object, made to be seen.
      </Statement>

      <section style={{ maxWidth: 'var(--omu-container)', margin: '0 auto', padding: 'var(--omu-space-24) 32px' }}>
        <p style={{ fontSize: 'var(--omu-text-h3)', lineHeight: 'var(--omu-lh-h3)', maxWidth: '30ch', marginBottom: 'var(--omu-space-8)' }}>
          The designer power strip, made for a beautifully styled home.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--omu-space-4)' }}>
          <FeatureTile image={R + '/hero/omu-3x-hero-terracotta-r03.png'} aspect="4 / 3" style={{ background: 'var(--omu-surface-tile)', gridColumn: 'span 2' }} />
          <FeatureTile title="No detail left rough" body="A matte shell with no glare. Seams you can't feel." aspect="4 / 3" />
          {tiles.map(t => <FeatureTile key={t.title} {...t} aspect="4 / 3" />)}
          <FeatureTile image={R + '/top/omu-3x-top-navy-r03.png'} aspect="4 / 3" style={{ background: 'var(--omu-surface-tile)' }} />
        </div>
      </section>

      <section style={{ maxWidth: 'var(--omu-container)', margin: '0 auto', padding: '0 32px var(--omu-space-24)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 'var(--omu-space-8)', marginBottom: 'var(--omu-space-8)' }}>
          <h2 style={{ maxWidth: '18ch' }}>Five colours, picked for rooms — not for shelves.</h2>
          <div style={{ display: 'flex', gap: 'var(--omu-space-4)' }}>
            {['warm-grey', 'black', 'terracotta', 'olive', 'navy'].map(c => (
              <ColorwaySwatch key={c} colorway={c} selected={colorway === c} showLabel onClick={() => setColorway(c)} />
            ))}
          </div>
        </div>
        <div style={{ background: 'var(--omu-surface-tile)', borderRadius: 'var(--omu-radius-lg)', padding: 'var(--omu-space-12)' }}>
          <img src={R + '/hero/omu-3x-hero-' + colorway + '-r03.png'} alt="" style={{ width: '100%', maxWidth: 820, display: 'block', margin: '0 auto' }} />
        </div>
      </section>
    </div>
  );
}
window.Landing = Landing;
