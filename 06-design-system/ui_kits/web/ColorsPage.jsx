const R = '../../assets/renders';
const list = [
  ['warm-grey', 'Warm grey', 'Cool Gray 1 + Cool Gray 4'],
  ['black', 'Black', '433 + Black 6'],
  ['terracotta', 'Terracotta', '1535 + 1545'],
  ['olive', 'Olive', '5753 + 4229'],
  ['navy', 'Navy', '2165 + 2168']
];

function ColorsPage({ setColorway, onNavigate }) {
  const { Tag, Button } = window.OMU;
  return (
    <section style={{ maxWidth: 'var(--omu-container)', margin: '0 auto', padding: 'var(--omu-space-12) 32px' }}>
      <h1 style={{ maxWidth: '20ch', marginBottom: 'var(--omu-space-4)' }}>Five colours, picked for rooms.</h1>
      <p style={{ fontSize: 'var(--omu-text-lead)', maxWidth: '46ch', color: 'var(--omu-fg-muted)', marginTop: 0 }}>
        Terracotta next to leather and marble. Olive against blue velvet. Navy on oak.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--omu-space-6)', marginTop: 'var(--omu-space-12)' }}>
        {list.map(([id, label, pantone]) => (
          <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--omu-space-4)' }}>
            <div style={{ background: 'var(--omu-surface-tile)', borderRadius: 'var(--omu-radius-lg)', aspectRatio: '4 / 3', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--omu-space-4)' }}>
              <img src={R + '/front/omu-3x-front-' + id + '-r03.png'} alt={label} style={{ maxWidth: '70%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontFamily: 'var(--omu-font-heading)', fontSize: 'var(--omu-text-h3)' }}>{label}</div>
                <div style={{ fontSize: 'var(--omu-text-caption)', color: 'var(--omu-fg-muted)' }}>Pantone {pantone}</div>
              </div>
              <Button size="sm" variant="secondary" onClick={() => { setColorway(id); onNavigate('product'); }}>Choose</Button>
            </div>
          </div>
        ))}
        <div style={{ background: 'var(--omu-black)', borderRadius: 'var(--omu-radius-lg)', padding: 'var(--omu-space-8)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Tag tone="neutral" style={{ color: 'var(--omu-white)', borderColor: 'rgba(215,210,203,.32)' }}>Rev. 03</Tag>
          <div style={{ fontFamily: 'var(--omu-font-heading)', fontSize: 'var(--omu-text-h2)', lineHeight: 'var(--omu-lh-h2)', color: 'var(--omu-white)' }}>
            Every side is the front.
          </div>
        </div>
      </div>
    </section>
  );
}
window.ColorsPage = ColorsPage;
