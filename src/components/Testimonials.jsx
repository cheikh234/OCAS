import { useEffect, useRef } from 'react'

const avis = [
  {
    nom: 'Fatou Diallo',
    ville: 'Dakar',
    note: 5,
    texte: 'Livraison super rapide ! Mon iPhone est arrivé le lendemain de la commande. Produit 100% original. Je recommande !',
    avatar: 'FD',
    bg: '#FFF7ED',
    color: '#F97316',
    image: '/assets/testimonials/fatou.jpg',
  },
  {
    nom: 'Moussa Ndiaye',
    ville: 'Thiès',
    note: 5,
    texte: "Service client au top. J'avais un souci avec ma commande, réglé en 10 minutes par WhatsApp. Bravo OCAS !",
    avatar: 'MN',
    bg: '#EFF6FF',
    color: '#2563eb',
    image: '/assets/testimonials/moussa.jpg',
  },
  {
    nom: 'Cheikh Sow',
    ville: 'Dakar',
    note: 5,
    texte: "J'ai commandé un MacBook et un casque Sony. Prix imbattables et emballage parfait. Ma boutique tech préférée !",
    avatar: 'CO',
    bg: '#F0FDF4',
    color: '#16a34a',
    image: '/assets/testimonials/coumba.jpg',
  },
]

export default function Testimonials() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} style={{ padding: '2rem 0 1rem' }}>
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.6rem', fontWeight: 800, color: '#111', marginBottom: '8px' }}>
          Ce que disent nos clients
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '8px' }}>
          {[...Array(5)].map((_, i) => (
            <i key={i} className="fa-solid fa-star" style={{ color: '#f59e0b', fontSize: '14px' }}></i>
          ))}
          <span style={{ color: '#888', fontSize: '0.85rem', marginLeft: '4px' }}>4.9 / 5 · Plus de 500 avis</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
        {avis.map((a, i) => (
          <div
            key={i}
            className={`reveal delay-${i + 1}`}
            style={{ background: '#fff', borderRadius: '20px', padding: '1.5rem', border: '1px solid #ede8e3', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: `2px solid ${a.color}` }}>
                <img
                  src={a.image}
                  alt={a.nom}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.parentNode.style.background = a.bg
                    e.target.parentNode.style.display = 'flex'
                    e.target.parentNode.style.alignItems = 'center'
                    e.target.parentNode.style.justifyContent = 'center'
                    e.target.parentNode.innerHTML = `<span style="font-family:Syne,sans-serif;font-weight:800;font-size:0.85rem;color:${a.color}">${a.avatar}</span>`
                  }}
                />
              </div>
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.88rem', color: '#111' }}>{a.nom}</div>
                <div style={{ fontSize: '0.72rem', color: '#bbb' }}>{a.ville}</div>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '2px' }}>
                {[...Array(a.note)].map((_, j) => (
                  <i key={j} className="fa-solid fa-star" style={{ color: '#f59e0b', fontSize: '11px' }}></i>
                ))}
              </div>
            </div>
            <p style={{ color: '#666', fontSize: '0.83rem', lineHeight: 1.7, fontStyle: 'italic' }}>"{a.texte}"</p>
            <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <i className="fa-solid fa-circle-check" style={{ color: '#16a34a', fontSize: '11px' }}></i>
              <span style={{ fontSize: '0.7rem', color: '#16a34a', fontWeight: 600 }}>Achat vérifié</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}