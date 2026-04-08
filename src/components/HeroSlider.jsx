import { useState, useEffect } from 'react'

const slides = [
  {
    bg: '/assets/slide1.jpg',
    badge: 'Nouveautés chaque semaine',
    badgeIcon: 'fa-solid fa-bolt',
    title1: 'La tech à ton',
    title2: 'MEILLEUR PRIX',
    desc: 'Smartphones, laptops, accessoires premium — livrés en 24h à Dakar et banlieue.',
    btn1: 'Explorer la boutique',
    btn1Icon: 'fa-solid fa-store',
    btn2: 'Voir les deals',
    stats: [{ num: '2k+', lbl: 'Produits' }, { num: '98%', lbl: 'Satisfaits' }, { num: '24h', lbl: 'Livraison' }],
  },
  {
    bg: '/assets/slide2.jpg',
    badge: 'Promo de la semaine',
    badgeIcon: 'fa-solid fa-tag',
    title1: 'Laptops ultra',
    title2: 'PERFORMANTS',
    desc: 'MacBook, Dell XPS, Lenovo — des machines taillées pour les pros et les étudiants.',
    btn1: 'Voir les laptops',
    btn1Icon: 'fa-solid fa-laptop',
    btn2: 'En savoir plus',
    stats: [{ num: '-30%', lbl: 'Réduction' }, { num: '50+', lbl: 'Modèles' }, { num: '2ans', lbl: 'Garantie' }],
  },
  {
    bg: '/assets/slide3.jpg',
    badge: 'Audio & Gaming',
    badgeIcon: 'fa-solid fa-headphones',
    title1: 'Son immersif,',
    title2: 'EXPÉRIENCE TOTALE',
    desc: 'Casques, enceintes, manettes — plongez dans votre univers sonore et gaming.',
    btn1: 'Explorer Gaming',
    btn1Icon: 'fa-solid fa-gamepad',
    btn2: 'Audio premium',
    stats: [{ num: '100+', lbl: 'Marques' }, { num: '4.9', lbl: 'Note moy.' }, { num: '7j', lbl: 'Retour' }],
  },
]

export default function HeroSlider() {
  const [cur, setCur] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const s = slides[cur]

  useEffect(() => {
    const t = setInterval(() => setCur(c => (c + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <div style={{
        position: 'relative',
        height: isMobile ? 'clamp(500px, 120vw, 650px)' : 'clamp(560px, 70vw, 700px)',
        overflow: 'hidden',
        boxShadow: '0 6px 40px rgba(0,0,0,0.15)',
      }}>

        {/* Image fond */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${s.bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }} />

        {/* Overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.58)' }} />

        {/* Contenu — centré sur les deux modes */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isMobile
            ? '4rem clamp(1.5rem, 6vw, 2rem) 2rem'
            : '4rem clamp(3rem, 8vw, 8rem) 2rem',
        }}>
          <div style={{
            textAlign: 'center',
            width: '100%',
            maxWidth: isMobile ? '100%' : '800px',
          }}>

            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(6px)',
              color: '#fff',
              borderRadius: '30px',
              padding: isMobile ? '5px 16px' : '6px 22px',
              fontSize: isMobile ? '0.72rem' : '0.8rem',
              fontWeight: 600,
              marginBottom: isMobile ? '1rem' : '1.4rem',
              border: '1px solid rgba(255,255,255,0.22)',
              letterSpacing: '0.5px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              textTransform: 'uppercase',
            }}>
              <i className={s.badgeIcon} style={{ fontSize: '9px', color: '#fdba74' }}></i>
              {s.badge}
            </div>

            {/* Sous-titre */}
            <div style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: isMobile ? '1rem' : 'clamp(1.2rem, 2.5vw, 1.8rem)',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.8)',
              letterSpacing: '0.5px',
              marginBottom: '0.2rem',
              lineHeight: 1.2,
            }}>
              {s.title1}
            </div>

            {/* Titre principal Bebas Neue */}
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: isMobile
                ? 'clamp(3.5rem, 16vw, 5rem)'
                : 'clamp(5rem, 10vw, 8rem)',
              fontWeight: 400,
              color: '#F97316',
              letterSpacing: '3px',
              lineHeight: 0.95,
              marginBottom: isMobile ? '1.2rem' : '1.6rem',
              textShadow: '0 4px 30px rgba(0,0,0,0.4)',
            }}>
              {s.title2}
            </div>

            {/* Description */}
            <p style={{
              color: 'rgba(255,255,255,0.72)',
              fontSize: isMobile ? '0.84rem' : 'clamp(0.9rem, 1.5vw, 1.05rem)',
              lineHeight: 1.75,
              marginBottom: isMobile ? '1.6rem' : '2rem',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              maxWidth: isMobile ? '100%' : '560px',
              margin: '0 auto',
              paddingBottom: isMobile ? '1.6rem' : '2rem',
            }}>
              {s.desc}
            </p>

            {/* Boutons */}
            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: isMobile ? '1.8rem' : '2.5rem',
            }}>
              <button
                style={{
                  background: '#F97316',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '30px',
                  padding: isMobile ? '11px 24px' : '14px 34px',
                  fontSize: isMobile ? '0.86rem' : '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  boxShadow: '0 6px 20px rgba(249,115,22,0.5)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(249,115,22,0.65)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 20px rgba(249,115,22,0.5)' }}
              >
                <i className={s.btn1Icon} style={{ fontSize: isMobile ? '12px' : '14px' }}></i>
                {s.btn1}
              </button>
              <button
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(6px)',
                  border: '1.5px solid rgba(255,255,255,0.35)',
                  color: '#fff',
                  borderRadius: '30px',
                  padding: isMobile ? '10px 20px' : '13px 30px',
                  fontSize: isMobile ? '0.86rem' : '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
              >
                {s.btn2}
              </button>
            </div>

            {/* Stats */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 0,
            }}>
              {s.stats.map((st, i) => (
                <div key={i} style={{
                  textAlign: 'center',
                  padding: isMobile ? '0 1.2rem' : '0 2.5rem',
                  paddingLeft: i === 0 ? 0 : (isMobile ? '1.2rem' : '2.5rem'),
                  paddingRight: i === s.stats.length - 1 ? 0 : (isMobile ? '1.2rem' : '2.5rem'),
                  borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                }}>
                  <div style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: isMobile ? '1.6rem' : 'clamp(1.8rem, 3vw, 2.4rem)',
                    fontWeight: 400,
                    color: '#fdba74',
                    lineHeight: 1,
                    letterSpacing: '1px',
                  }}>
                    {st.num}
                  </div>
                  <div style={{
                    fontSize: isMobile ? '0.65rem' : '0.72rem',
                    color: 'rgba(255,255,255,0.5)',
                    marginTop: '4px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 500,
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                  }}>
                    {st.lbl}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Flèche gauche */}
        <button
          onClick={() => setCur(c => (c - 1 + slides.length) % slides.length)}
          style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '14px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', zIndex: 10, transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
        >
          <i className="fa-solid fa-chevron-left" style={{ fontSize: '12px' }}></i>
        </button>

        {/* Flèche droite */}
        <button
          onClick={() => setCur(c => (c + 1) % slides.length)}
          style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '14px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', zIndex: 10, transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
        >
          <i className="fa-solid fa-chevron-right" style={{ fontSize: '12px' }}></i>
        </button>

        {/* Dots */}
        <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCur(i)}
              style={{ width: cur === i ? '28px' : '8px', height: '8px', borderRadius: cur === i ? '4px' : '50%', background: cur === i ? '#F97316' : 'rgba(255,255,255,0.35)', cursor: 'pointer', transition: 'all 0.35s', border: '1px solid rgba(255,255,255,0.4)' }}
            />
          ))}
        </div>

      </div>
    </>
  )
}