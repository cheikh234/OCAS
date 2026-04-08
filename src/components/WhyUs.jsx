import { useEffect, useRef } from 'react'

const items = [
  { icon: 'fa-solid fa-shield-halved', title: 'Produits authentiques', desc: '100% originaux, garantis et vérifiés avant expédition.', color: '#2563eb', bg: '#EFF6FF' },
  { icon: 'fa-solid fa-truck-fast', title: 'Livraison 24h', desc: 'Dakar et banlieue livrés en 24h. Autres villes en 48-72h.', color: '#16a34a', bg: '#F0FDF4' },
  { icon: 'fa-solid fa-headset', title: 'Support 7j/7', desc: 'Notre équipe est disponible tous les jours pour vous aider.', color: '#F97316', bg: '#FFF7ED' },
  { icon: 'fa-solid fa-rotate-left', title: 'Retour facile', desc: 'Retour gratuit sous 7 jours si le produit ne vous convient pas.', color: '#7c3aed', bg: '#F5F3FF' },
]

export default function WhyUs() {
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
    <section ref={ref} style={{ padding: '3rem 0' }}>
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.6rem', fontWeight: 800, color: '#111', marginBottom: '8px' }}>
          Pourquoi choisir <span style={{ color: '#F97316' }}>OCAS</span> ?
        </h2>
        <p style={{ color: '#888', fontSize: '0.9rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
          Nous mettons tout en œuvre pour vous offrir la meilleure expérience d'achat tech au Sénégal.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '16px' }}>
        {items.map((item, i) => (
          <div
            key={i}
            className={`reveal delay-${i + 1}`}
            style={{ background: '#fff', borderRadius: '20px', padding: '1.5rem', border: '1px solid #ede8e3', transition: 'all 0.25s', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.09)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)' }}
          >
            <div style={{ width: '52px', height: '52px', background: item.bg, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <i className={item.icon} style={{ fontSize: '1.3rem', color: item.color }}></i>
            </div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#111', marginBottom: '6px' }}>{item.title}</h3>
            <p style={{ color: '#888', fontSize: '0.82rem', lineHeight: 1.65 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}