import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'

const fmt = n => n.toLocaleString('fr-FR') + ' F'

export default function FlashSale({ deals }) {
  const { addToCart } = useCart()
  const [secs, setSecs] = useState(2 * 3600 + 47 * 60 + 33)
  const [added, setAdded] = useState({})

  useEffect(() => {
    const t = setInterval(() => setSecs(s => s <= 0 ? 3 * 3600 : s - 1), 1000)
    return () => clearInterval(t)
  }, [])

  const h = String(Math.floor(secs / 3600)).padStart(2, '0')
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0')
  const s = String(secs % 60).padStart(2, '0')

  const handleAdd = (deal) => {
    addToCart(deal)
    setAdded(a => ({ ...a, [deal.id]: true }))
    setTimeout(() => setAdded(a => ({ ...a, [deal.id]: false })), 1200)
  }

  return (
    <section style={{ background: '#111', padding: '2.5rem clamp(1rem, 4vw, 3rem)', marginTop: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.35rem', fontWeight: 800, color: '#fff', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className="fa-solid fa-bolt" style={{ color: '#F97316' }}></i> Vente Flash
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {[[h, 'h'], [m, 'min'], [s, 'sec']].map(([val, lbl], i) => (
              <span key={lbl} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ background: '#1e1e1e', borderRadius: '9px', padding: '7px 12px', textAlign: 'center', minWidth: '46px', border: '1px solid #2a2a2a' }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', fontWeight: 800, color: '#F97316', lineHeight: 1 }}>{val}</div>
                  <div style={{ fontSize: '0.55rem', color: '#555', marginTop: '2px', textTransform: 'uppercase' }}>{lbl}</div>
                </div>
                {i < 2 && <span style={{ color: '#333', fontWeight: 700, fontSize: '1.1rem' }}>:</span>}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '14px' }}>
          {deals.map(deal => (
            <div key={deal.id}
              style={{ background: '#181818', borderRadius: '18px', border: '1px solid #252525', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = '#F97316'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(249,115,22,0.2)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.borderColor = '#252525'; e.currentTarget.style.boxShadow = '' }}
            >
              <div style={{ height: '150px', background: deal.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <span style={{ position: 'absolute', top: '8px', left: '8px', background: '#F97316', color: '#fff', borderRadius: '7px', padding: '2px 8px', fontSize: '0.68rem', fontWeight: 800, zIndex: 2 }}>-{deal.pct}%</span>
                {deal.image
                  ? <img src={deal.image} alt={deal.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                  : <i className={deal.icon} style={{ fontSize: '2.8rem', color: deal.color }}></i>
                }
                <div style={{ position: 'absolute', bottom: '6px', left: '8px', right: '8px', zIndex: 2 }}>
                  <div style={{ height: '4px', background: 'rgba(0,0,0,0.3)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${deal.stock}%`, background: '#F97316', borderRadius: '2px' }} />
                  </div>
                  <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.7)', marginTop: '2px' }}>Stock: {deal.stock}%</div>
                </div>
              </div>
              <div style={{ padding: '10px 12px' }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.84rem', color: '#fff', marginBottom: '7px', lineHeight: 1.3 }}>{deal.name}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '4px' }}>
                  <div>
                    <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.9rem', color: '#F97316' }}>{fmt(deal.price)}</span>
                    <br />
                    <span style={{ fontSize: '0.7rem', color: '#444', textDecoration: 'line-through' }}>{fmt(deal.old)}</span>
                  </div>
                  <button onClick={() => handleAdd(deal)}
                    style={{ background: added[deal.id] ? '#16a34a' : '#F97316', color: '#fff', border: 'none', borderRadius: '8px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '12px', transition: 'all 0.2s' }}>
                    <i className={`fa-solid fa-${added[deal.id] ? 'check' : 'cart-plus'}`}></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}