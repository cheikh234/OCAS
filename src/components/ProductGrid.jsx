import { useEffect, useRef } from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ products = [] }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [products])

  return (
    <section ref={ref} style={{ padding: '2.5rem 0' }}>
      <h2 className="reveal" style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.6rem', color: '#111' }}>
        Tous les produits{' '}
        <span style={{ fontSize: '0.82rem', color: '#aaa', fontWeight: 400, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          ({products.length})
        </span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} delay={Math.min((i % 3) + 1, 6)} />
        ))}
      </div>
    </section>
  )
}