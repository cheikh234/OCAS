export default function SuccessModal({ open, data, onClose }) {
  if (!open || !data) return null
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div style={{ background: '#fff', borderRadius: '24px', padding: '2.5rem 2rem', maxWidth: '380px', width: '100%', textAlign: 'center', boxShadow: '0 24px 80px rgba(0,0,0,0.22)', animation: 'popIn 0.4s cubic-bezier(0.34,1.56,0.64,1)' }}>
        <div style={{ width: '76px', height: '76px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem', fontSize: '2.2rem', color: '#16a34a' }}>
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.3rem', fontWeight: 800, marginBottom: '6px' }}>Commande confirmée !</h2>
        <p style={{ color: '#888', fontSize: '0.86rem', lineHeight: 1.65 }}>
          Merci <strong style={{ color: '#111' }}>{data.prenom}</strong> ! Votre commande a bien été enregistrée.
        </p>
        <p style={{ fontSize: '0.8rem', color: '#bbb', marginTop: '4px' }}>
          Un SMS de confirmation sera envoyé au <strong style={{ color: '#111' }}>{data.tel}</strong>
        </p>
        <div style={{ fontFamily: 'monospace', background: '#f8f3ef', color: '#F97316', padding: '5px 14px', borderRadius: '9px', fontSize: '0.87rem', fontWeight: 700, display: 'inline-block', margin: '10px 0 16px' }}>
          {data.orderId}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', flexWrap: 'wrap', marginBottom: '14px' }}>
          {[['fa-check', 'Confirmée'], ['fa-box', 'Préparation'], ['fa-truck-fast', 'Livraison'], ['fa-house', 'Livré']].map(([icon, lbl], i, arr) => (
            <span key={lbl} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '22px', height: '22px', background: '#dcfce7', color: '#16a34a', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>
                <i className={`fa-solid ${icon}`}></i>
              </span>
              <span style={{ fontSize: '0.72rem', color: '#999' }}>{lbl}</span>
              {i < arr.length - 1 && <span style={{ color: '#ddd', fontSize: '11px', marginLeft: '2px' }}>→</span>}
            </span>
          ))}
        </div>
        <p style={{ fontSize: '0.77rem', color: '#bbb', marginBottom: '16px' }}>
          Livraison estimée : <strong style={{ color: '#111' }}>24–48h</strong>
        </p>
        <button onClick={onClose} style={{ background: '#F97316', color: '#fff', border: 'none', borderRadius: '14px', padding: '11px 28px', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'Plus Jakarta Sans, sans-serif', boxShadow: '0 4px 16px rgba(249,115,22,0.35)' }}>
          <i className="fa-solid fa-arrow-left"></i> Continuer mes achats
        </button>
      </div>
      <style>{`@keyframes popIn{from{transform:scale(0.75);opacity:0}to{transform:scale(1);opacity:1}}`}</style>
    </div>
  )
}