function ProfileHeader() {
  const { Button } = window.OMU;
  const stat = (n, l) => <div style={{ textAlign: 'center' }}>
    <div style={{ fontFamily: 'var(--omu-font-heading)', fontSize: 'var(--omu-text-h3)' }}>{n}</div>
    <div style={{ fontSize: 'var(--omu-text-caption)', color: 'var(--omu-fg-muted)' }}>{l}</div>
  </div>;
  return (
    <div style={{ display: 'flex', gap: 'var(--omu-space-12)', alignItems: 'center', padding: 'var(--omu-space-12) 0' }}>
      <img src="../../assets/logo/omu-symbol-light-on-dark.svg" alt="omu" style={{ width: 132, height: 132, borderRadius: '50%' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--omu-space-4)', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--omu-space-6)' }}>
          <span style={{ fontSize: 'var(--omu-text-lead)' }}>omu</span>
          <Button size="sm">Follow</Button>
          <Button size="sm" variant="secondary">Message</Button>
        </div>
        <div style={{ display: 'flex', gap: 'var(--omu-space-8)' }}>{stat('24', 'posts')}{stat('4,190', 'followers')}{stat('61', 'following')}</div>
        <div style={{ maxWidth: '42ch' }}>
          <div>OMU</div>
          <div style={{ color: 'var(--omu-fg-muted)' }}>the only power strip you won't want to hide.</div>
          <div>omu.com</div>
        </div>
      </div>
    </div>
  );
}
window.ProfileHeader = ProfileHeader;
