import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'

const links = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Boutique', href: '#boutique' },
  { label: 'Offres', href: '#offres' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ onOpenCart }) {
  const { count, total } = useCart()
  const fmt = n => n.toLocaleString('fr-FR') + ' F'
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav style={{
        background: '#fff',
        borderBottom: scrolled ? '1px solid #f0e8e0' : '1px solid transparent',
        padding: '0 clamp(1rem, 4vw, 3rem)',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 200,
        boxShadow: scrolled ? '0 2px 20px rgba(249,115,22,0.07)' : 'none',
        transition: 'all 0.3s',
        gap: '1rem',
      }}>
        <div
          onClick={() => handleNav('#accueil')}
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#F97316', letterSpacing: '-0.5px', cursor: 'pointer', flexShrink: 0 }}
        >
          OCAS
        </div>

        {!isMobile && (
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            {links.map((l, i) => (
              <li key={l.label}>
                <a
                
                  href={l.href}
                  onClick={e => { e.preventDefault(); handleNav(l.href) }}
                  style={{ textDecoration: 'none', color: i === 0 ? '#F97316' : '#555', fontSize: '0.88rem', fontWeight: 600, transition: 'color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#F97316' }}
                  onMouseLeave={e => { e.currentTarget.style.color = i === 0 ? '#F97316' : '#555' }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={onOpenCart}
            style={{ background: '#F97316', color: '#fff', border: 'none', borderRadius: '22px', padding: '9px 18px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', fontFamily: 'Plus Jakarta Sans, sans-serif', boxShadow: '0 3px 12px rgba(249,115,22,0.35)', transition: 'all 0.2s', flexShrink: 0 }}
          >
            <i className="fa-solid fa-bag-shopping"></i>
            {count > 0 && (
              <span style={{ background: '#fff', color: '#F97316', borderRadius: '50%', width: '18px', height: '18px', fontSize: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {count}
              </span>
            )}
            <span style={{ fontSize: '0.78rem' }}>
              {count > 0 ? fmt(total) : 'Panier'}
            </span>
          </button>

          {isMobile && (
            <button
              onClick={() => setMenuOpen(o => !o)}
              style={{ background: 'none', border: '1.5px solid #f0e8e0', borderRadius: '10px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#555', fontSize: '15px' }}
            >
              <i className={`fa-solid fa-${menuOpen ? 'xmark' : 'bars'}`}></i>
            </button>
          )}
        </div>
      </nav>

      {isMobile && menuOpen && (
        <div style={{ position: 'fixed', top: '64px', left: 0, right: 0, background: '#fff', zIndex: 190, borderBottom: '1px solid #f0e8e0', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
          {links.map(l => (
            <a
            
              key={l.label}
              href={l.href}
              onClick={e => { e.preventDefault(); handleNav(l.href) }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem clamp(1rem,4vw,3rem)', color: '#444', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', borderBottom: '1px solid #f9f5f0' }}
            >
              {l.label}
              <i className="fa-solid fa-chevron-right" style={{ fontSize: '11px', color: '#F97316' }}></i>
            </a>
          ))}
        </div>
      )}
    </>
  )
}
