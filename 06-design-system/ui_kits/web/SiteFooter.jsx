function SiteFooter() {
  const { Logo, Input, Button, Checkbox, Divider } = window.OMU;
  return (
    <footer style={{ background: 'var(--omu-black)', color: 'var(--omu-white)', marginTop: 'var(--omu-space-32)' }}>
      <div style={{ maxWidth: 'var(--omu-container)', margin: '0 auto', padding: 'var(--omu-space-24) 32px var(--omu-space-12)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'var(--omu-space-16)', alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: 'var(--omu-font-heading)', fontSize: 'var(--omu-text-h2)', lineHeight: 'var(--omu-lh-h2)', letterSpacing: 'var(--omu-ls-h2)', maxWidth: '16ch' }}>
              One note when it ships.
            </div>
            <p style={{ color: 'var(--omu-fg-muted-inverse)', maxWidth: '38ch' }}>Nothing else. We are not the kind of brand that emails twice a week.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--omu-space-4)' }}>
            <div style={{ display: 'flex', gap: 'var(--omu-space-3)', alignItems: 'flex-end' }}>
              <Input label="Email" placeholder="you@example.com" style={{ flex: 1, color: 'var(--omu-white)', borderColor: 'rgba(215,210,203,.4)' }} />
              <Button variant="inverse">Keep me posted</Button>
            </div>
            <Checkbox label="Tell me when new colours land." style={{ color: 'var(--omu-fg-muted-inverse)' }} />
          </div>
        </div>
        <Divider tone="inverse" spacing="var(--omu-space-12)" />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--omu-space-8)', flexWrap: 'wrap' }}>
          <Logo tone="light" height={18} assetPath="../../assets/logo" />
          <div style={{ display: 'flex', gap: 'var(--omu-space-8)', color: 'var(--omu-fg-muted-inverse)', fontSize: 'var(--omu-text-caption)' }}>
            <span>omu.com</span><span>Dubai, UAE</span><span>instagram / omu</span>
          </div>
          <span style={{ fontFamily: 'var(--omu-font-heading)', fontSize: 'var(--omu-text-caption)', letterSpacing: 'var(--omu-ls-label)' }}>HIDE NOTHING.</span>
        </div>
      </div>
    </footer>
  );
}
window.SiteFooter = SiteFooter;
