function PostGrid({ onOpen }) {
  const R = '../../assets/renders';
  const cells = [
    { src: R + '/hero/omu-3x-hero-olive-r03.png', cw: 'Olive' },
    { src: R + '/front/omu-3x-front-terracotta-r03.png', cw: 'Terracotta' },
    { src: R + '/top/omu-3x-top-navy-r03.png', cw: 'Navy' },
    { src: R + '/hero/omu-3x-hero-warm-grey-r03.png', cw: 'Warm grey' },
    { src: R + '/front/omu-3x-front-black-r03.png', cw: 'Black' },
    { src: R + '/hero/omu-3x-hero-terracotta-r03.png', cw: 'Terracotta' },
    { src: R + '/front/omu-3x-front-navy-r03.png', cw: 'Navy' },
    { src: R + '/hero/omu-3x-hero-black-r03.png', cw: 'Black' },
    { src: R + '/front/omu-3x-front-olive-r03.png', cw: 'Olive' }
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 4 }}>
      {cells.map((c, i) => (
        <button key={i} onClick={() => onOpen(c)} style={{ border: 0, padding: 0, cursor: 'pointer', background: 'var(--omu-surface-tile)', aspectRatio: '1 / 1', overflow: 'hidden' }}>
          <img src={c.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </button>
      ))}
    </div>
  );
}
window.PostGrid = PostGrid;
