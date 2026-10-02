function PostView({ post, onClose }) {
  const { Button, Tag } = window.OMU;
  if (!post) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(38,36,35,.72)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: 32 }}>
      <div onClick={e => e.stopPropagation()} style={{ background: 'var(--omu-bg)', borderRadius: 'var(--omu-radius-lg)', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1.2fr 1fr', maxWidth: 900, width: '100%' }}>
        <div style={{ background: 'var(--omu-surface-tile)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--omu-space-8)' }}>
          <img src={post.src} alt="" style={{ width: '100%', maxHeight: 420, objectFit: 'contain' }} />
        </div>
        <div style={{ padding: 'var(--omu-space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--omu-space-4)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--omu-space-3)' }}>
            <img src="../../assets/logo/omu-symbol-dark-on-light.svg" alt="" style={{ width: 36, height: 36, borderRadius: '50%' }} />
            <span>omu</span>
          </div>
          <Tag>{post.cw}</Tag>
          <p style={{ margin: 0 }}>Most power strips are made to disappear. This one didn't get the memo.</p>
          <p style={{ margin: 0, color: 'var(--omu-fg-muted)', fontSize: 'var(--omu-text-caption)' }}>2 days ago</p>
          <div style={{ marginTop: 'auto' }}><Button variant="secondary" size="sm" onClick={onClose}>Close</Button></div>
        </div>
      </div>
    </div>
  );
}
window.PostView = PostView;
