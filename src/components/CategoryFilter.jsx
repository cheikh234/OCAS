export default function CategoryFilter({ categories, current, onChange }) {
  return (
    <section style={{ padding: '2rem 1.5rem 0' }}>
      <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.4rem' }}>Catégories</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {categories.map(c => (
          <button key={c.key} onClick={() => onChange(c.key)} style={{
            background: current === c.key ? '#F97316' : '#f8f3ef',
            color: current === c.key ? '#fff' : '#555',
            border: `2px solid ${current === c.key ? '#F97316' : 'transparent'}`,
            borderRadius: '14px', padding: '9px 16px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: '8px',
            fontSize: '0.82rem', fontWeight: 500,
            boxShadow: current === c.key ? '0 4px 16px rgba(249,115,22,0.3)' : '0 2px 8px rgba(0,0,0,0.04)',
            transition: 'all 0.2s',
          }}>
            <i className={c.icon} style={{ fontSize: '13px', color: current === c.key ? '#fff' : '#F97316' }}></i>
            {c.label}
          </button>
        ))}
      </div>
    </section>
  )
}