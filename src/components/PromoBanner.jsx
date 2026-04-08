export default function PromoBanner() {
  return (
    <div style={{ margin: '2rem 1.5rem', background: '#111', borderRadius: '22px', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: '-40px', top: '-40px', width: '180px', height: '180px', background: 'rgba(249,115,22,0.1)', borderRadius: '50%' }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.4rem', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
          Livraison <em style={{ color: '#F97316', fontStyle: 'normal' }}>gratuite</em><br />dès 150 000 FCFA
        </h2>
        <p style={{ color: '#888', fontSize: '0.82rem', marginTop: '5px' }}>
          <i className="fa-solid fa-truck-fast" style={{ color: '#F97316', fontSize: '11px' }}></i> Dakar & banlieue en 24h
        </p>
      </div>
      <button style={{ background: '#F97316', color: '#fff', border: 'none', borderRadius: '14px', padding: '10px 20px', fontWeight: 700, cursor: 'pointer', fontSize: '0.84rem', display: 'flex', alignItems: 'center', gap: '7px', boxShadow: '0 4px 16px rgba(249,115,22,0.4)', position: 'relative', zIndex: 1 }}>
        <i className="fa-solid fa-truck-fast"></i> En profiter
      </button>
    </div>
  )
}