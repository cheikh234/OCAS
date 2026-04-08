import { useState, useEffect, useRef } from 'react'
import HeroSlider from '../components/HeroSlider'
import CategoryFilter from '../components/CategoryFilter'
import ProductGrid from '../components/ProductGrid'
import FlashSale from '../components/FlashSale'
import PromoBanner from '../components/PromoBanner'
import WhyUs from '../components/WhyUs'
import Testimonials from '../components/Testimonials'
import { products, flashDeals, categories } from '../data/products'

export default function Home({ search = '' }) {
  const [currentCat, setCurrentCat] = useState('all')
  const mainRef = useRef(null)

  const filtered = products.filter(p => {
    const matchCat = currentCat === 'all' || p.cat === currentCat
    const matchSearch = search === '' ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.cat.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    const els = mainRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [filtered])

  return (
    <>
      <div id="accueil" />
      <HeroSlider />

      <div ref={mainRef} style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 3rem)' }}>

        <div id="boutique" />
        <div className="reveal">
          <CategoryFilter categories={categories} current={currentCat} onChange={setCurrentCat} />
        </div>

        {search && (
          <div className="reveal" style={{ margin: '1rem 0', padding: '12px 16px', background: '#fff7ed', borderRadius: '12px', border: '1px solid #fed7aa', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <i className="fa-solid fa-magnifying-glass" style={{ color: '#F97316', fontSize: '13px' }}></i>
            <span style={{ fontSize: '0.85rem', color: '#c2500a', fontWeight: 600 }}>
              {filtered.length} résultat{filtered.length > 1 ? 's' : ''} pour "{search}"
            </span>
          </div>
        )}

        <ProductGrid products={filtered} />
      </div>

      <div id="offres">
        <FlashSale deals={flashDeals} />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 3rem)' }}>
        <WhyUs />
        <Testimonials />
        <div className="reveal">
          <PromoBanner />
        </div>
      </div>
    </>
  )
}