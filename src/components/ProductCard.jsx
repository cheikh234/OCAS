import { useState } from 'react'
import { useCart } from '../context/CartContext'

const fmt = n => n.toLocaleString('fr-FR') + ' F'
const badgeStyle = {
  sale: { bg: '#fee2e2', color: '#b91c1c', label: 'PROMO' },
  new:  { bg: '#dcfce7', color: '#15803d', label: 'NOUVEAU' },
  hot:  { bg: '#ffedd5', color: '#c2500a', label: 'POPULAIRE' },
  top:  { bg: '#ede9fe', color: '#6d28d9', label: 'TOP VENTE' },
}

export default function ProductCard({ product, delay = 0 }) {
  const { addToCart } = useCart()
  const [faved, setFaved] = useState(false)
  const [added, setAdded] = useState(false)
  const b = product.badge ? badgeStyle[product.badge] : null

  const handleAdd = (e) => {
    e.stopPropagation()
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <div
      className={`reveal delay-${delay}`}
      style={{ background: '#fff', borderRadius: '20px', border: '1px solid #ede8e3', overflow: 'hidden', transition: 'all 0.25s', cursor: 'pointer', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(249,115,22,0.14)'; e.currentTarget.style.borderColor = '#F97316' }}
      onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = '#ede8e3' }}
    >
      <div style={{ height: '180px', background: product.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        {b && <span style={{ position: 'absolute', top: '10px', left: '10px', background: b.bg, color: b.color, borderRadius: '7px', padding: '3px 9px', fontSize: '0.6rem', fontWeight: 700, zIndex: 2 }}>{b.label}</span>}
        <button
          onClick={e => { e.stopPropagation(); setFaved(f => !f) }}
          style={{ position: 'absolute', top: '10px', right: '10px', width: '30px', height: '30px', background: 'rgba(255,255,255,0.94)', borderRadius: '50%', border: 'none', cursor: 'pointer', fontSize: '12px', color: faved ? '#ef4444' : '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', zIndex: 2 }}
        >
          <i className={`fa-${faved ? 'solid' : 'regular'} fa-heart`}></i>
        </button>
        {product.image
          ? <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          : <i className={product.icon} style={{ fontSize: '3rem', color: product.color }}></i>
        }
      </div>

      <div style={{ padding: '13px 14px' }}>
        <div style={{ fontSize: '0.62rem', color: '#bbb', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px', fontWeight: 500 }}>{product.cat}</div>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#111', marginBottom: '6px', lineHeight: 1.35 }}>{product.name}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '10px' }}>
          {[...Array(5)].map((_, i) => (
            <i key={i} className={`fa-${i < product.stars ? 'solid' : 'regular'} fa-star`} style={{ fontSize: '10px', color: '#f59e0b' }}></i>
          ))}
          <span style={{ fontSize: '0.65rem', color: '#bbb', marginLeft: '3px' }}>
            ({product.reviews >= 1000 ? (product.reviews / 1000).toFixed(1) + 'k' : product.reviews})
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '4px' }}>
          <div>
            {product.old && (
              <span style={{ fontSize: '0.68rem', color: '#ccc', textDecoration: 'line-through', display: 'block', fontFamily: 'Syne, sans-serif' }}>
                {fmt(product.old)}
              </span>
            )}
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1rem', color: '#111', letterSpacing: '-0.3px' }}>
              {fmt(product.price)}
            </span>
          </div>
          <button
            onClick={handleAdd}
            style={{ background: added ? '#16a34a' : '#F97316', color: '#fff', border: 'none', borderRadius: '11px', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '13px', boxShadow: `0 3px 10px ${added ? 'rgba(22,163,74,0.3)' : 'rgba(249,115,22,0.3)'}`, transition: 'all 0.2s' }}
          >
            <i className={`fa-solid fa-${added ? 'check' : 'cart-plus'}`}></i>
          </button>
        </div>
      </div>
    </div>
  )
}