import { useState, useEffect } from 'react'

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)
  const [form, setForm] = useState({ nom: '', contact: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = () => {
    if (!form.nom || !form.contact || !form.message) return
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm({ nom: '', contact: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    }, 1500)
  }

  const inp = {
    width: '100%',
    border: '1.5px solid #e8e3de',
    borderRadius: '12px',
    padding: '10px 14px',
    fontSize: '0.86rem',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    outline: 'none',
    background: '#fff',
    color: '#111',
  }

  return (
    <>
      <div id="contact" style={{ background: '#fff', padding: '3rem clamp(1rem,4vw,3rem)', borderTop: '1px solid #f0e8e0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '3rem', alignItems: 'start' }}>

          {/* Infos contact */}
          <div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.6rem', fontWeight: 800, color: '#111', marginBottom: '10px' }}>
              Contactez <span style={{ color: '#F97316' }}>OCAS</span>
            </h2>
            <p style={{ color: '#888', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Une question sur un produit ? Un problème de commande ? Notre équipe vous répond rapidement.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                ['fa-solid fa-phone', '+221 77 000 00 00', '#16a34a', '#F0FDF4'],
                ['fa-brands fa-whatsapp', '+221 77 000 00 00', '#16a34a', '#F0FDF4'],
                ['fa-solid fa-envelope', 'contact@ocas.sn', '#2563eb', '#EFF6FF'],
                ['fa-solid fa-location-dot', 'Dakar, Sénégal', '#F97316', '#FFF7ED'],
              ].map(([icon, text, color, bg]) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '38px', height: '38px', background: bg, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={icon} style={{ color, fontSize: '14px' }}></i>
                  </div>
                  <span style={{ fontSize: '0.85rem', color: '#555', fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Formulaire */}
          <div style={{ background: '#f9f7f5', borderRadius: '20px', padding: '1.8rem', border: '1px solid #ede8e3' }}>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', fontWeight: 700, marginBottom: '1.2rem', color: '#111' }}>
              Envoyez-nous un message
            </h3>

            {sent ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ width: '70px', height: '70px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.8rem', color: '#16a34a' }}>
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', marginBottom: '6px', color: '#111' }}>
                  Message envoyé !
                </h4>
                <p style={{ color: '#888', fontSize: '0.84rem', lineHeight: 1.6 }}>
                  Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: '12px' }}>
                  <input
                    name="nom"
                    value={form.nom}
                    onChange={handle}
                    placeholder="Votre nom *"
                    style={inp}
                  />
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <input
                    name="contact"
                    value={form.contact}
                    onChange={handle}
                    placeholder="Email ou téléphone *"
                    style={inp}
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    placeholder="Votre message *"
                    rows={4}
                    style={{ ...inp, resize: 'none' }}
                  />
                </div>
                <button
                  onClick={submit}
                  disabled={sending}
                  style={{ width: '100%', background: sending ? '#aaa' : '#F97316', color: '#fff', border: 'none', borderRadius: '14px', padding: '12px', fontSize: '0.88rem', fontWeight: 700, cursor: sending ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontFamily: 'Plus Jakarta Sans, sans-serif', boxShadow: sending ? 'none' : '0 4px 16px rgba(249,115,22,0.3)', transition: 'all 0.2s' }}
                >
                  {sending ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i> Envoi en cours...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane"></i> Envoyer le message
                    </>
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: '#111', color: '#ccc', padding: '2.5rem clamp(1rem, 4vw, 3rem)', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr', gap: '2rem', boxShadow: '0 -4px 20px rgba(0,0,0,0.15)' }}>
        <div>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#F97316', letterSpacing: '-0.5px' }}>OCAS</div>
          <p style={{ color: '#666', fontSize: '0.8rem', marginTop: '8px', lineHeight: 1.65 }}>Votre boutique tech de confiance au Sénégal. Produits authentiques, livraison rapide.</p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
            {['fa-facebook-f', 'fa-instagram', 'fa-x-twitter', 'fa-whatsapp'].map(icon => (
              <div key={icon}
                style={{ width: '32px', height: '32px', background: '#1e1e1e', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#666', fontSize: '13px', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#F97316'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#1e1e1e'; e.currentTarget.style.color = '#666' }}
              >
                <i className={`fa-brands ${icon}`}></i>
              </div>
            ))}
          </div>
        </div>
        {[
          ['Boutique', ['Smartphones', 'Laptops', 'Audio', 'Gaming', 'Promotions']],
          ['Support', ['FAQ', 'Livraison', 'Retours', 'Contact']],
        ].map(([title, links]) => (
          <div key={title}>
            <h4 style={{ fontFamily: 'Syne, sans-serif', color: '#fff', fontWeight: 700, marginBottom: '14px', fontSize: '0.86rem' }}>{title}</h4>
            <ul style={{ listStyle: 'none' }}>
              {links.map(l => (
                <li key={l} style={{ marginBottom: '9px' }}>
                  <a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '7px', transition: 'color 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#F97316' }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#666' }}>
                    <i className="fa-solid fa-chevron-right" style={{ fontSize: '10px' }}></i>{l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
      <div style={{ background: '#0a0a0a', padding: '12px', textAlign: 'center', fontSize: '0.72rem', color: '#444', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px' }}>
        <i className="fa-solid fa-shield-halved" style={{ color: '#F97316' }}></i>
        © 2025 OCAS — Dakar, Sénégal
        <i className="fa-solid fa-heart" style={{ color: '#ef4444', fontSize: '10px' }}></i>
      </div>
    </>
  )
}