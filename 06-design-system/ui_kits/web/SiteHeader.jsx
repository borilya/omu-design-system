function SiteHeader({ route, onNavigate }) {
  const { Button, Logo } = window.OMU;
  const link = (id, label) => (
    <a href="#" onClick={e => { e.preventDefault(); onNavigate(id); }} style={{
      textDecoration: 'none', color: route === id ? 'var(--omu-fg)' : 'var(--omu-fg-muted)',
      fontSize: 'var(--omu-text-body)', transition: 'color var(--omu-duration) var(--omu-ease)'
    }}>{label}</a>
  );
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 10, background: 'var(--omu-bg)',
      borderBottom: '1px solid var(--omu-border)'
    }}>
      <div style={{ maxWidth: 'var(--omu-container)', margin: '0 auto', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--omu-space-8)' }}>
        <a href="#" onClick={e => { e.preventDefault(); onNavigate('home'); }} style={{ display: 'block' }}>
          <Logo height={20} assetPath="../../assets/logo" />
        </a>
        <nav style={{ display: 'flex', gap: 'var(--omu-space-8)' }}>
          {link('home', 'Home')}
          {link('product', 'Extension cord')}
          {link('colors', 'Colours')}
        </nav>
        <Button size="sm" onClick={() => onNavigate('product')}>Buy</Button>
      </div>
    </header>
  );
}
window.SiteHeader = SiteHeader;
