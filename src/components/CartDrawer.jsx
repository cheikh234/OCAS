import { useCart } from '../context/CartContext'

const fmt = n => n.toLocaleString('fr-FR') + ' F'

export default function CartDrawer({ open, onClose, onCheckout }) {
  const { cart, removeFromCart, changeQty, clearCart, total } = useCart()

  return (
    <>
      {open && <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 300 }} />}
      <div style={{ position: 'fixed', top: 0, right: open ? 0 : '-380px', width: '360px', height: '100%', background: '#fff', zIndex: 400, transition: 'right 0.35s cubic-bezier(0.4,0,0.2,1)', display: 'flex', flexDirection: 'column', boxShadow: '-12px 0 50px rgba(0,0,0,0.18)' }}>
        <div style={{ padding: '1.2rem', borderBottom: '1px solid #f0e8e0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <i className="fa-solid fa-bag-shopping" style={{ color: '#F97316' }}></i> Mon panier
          </h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#888' }}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 1.2rem' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#ccc' }}>
              <i className="fa-solid fa-bag-shopping" style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem', color: '#f0e8e0' }}></i>
              <div style={{ fontWeight: 500, color: '#bbb' }}>Panier vide</div>
              <div style={{ fontSize: '0.76rem', marginTop: '4px' }}>Ajoutez des produits !</div>
            </div>
          ) : cart.map(item => (
            <div key={item.id} style={{ display: 'flex', gap: '10px', padding: '10px 0', borderBottom: '1px solid #faf5f0', alignItems: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '10px', background: item.bg || '#FFF7ED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className={item.icon} style={{ fontSize: '1.4rem', color: item.color || '#555' }}></i>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.81rem', fontWeight: 600, color: '#111' }}>{item.name}</div>
                <div style={{ fontSize: '0.81rem', color: '#F97316', fontWeight: 700 }}>{fmt(item.price)}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                  <button onClick={() => changeQty(item.id, -1)} style={{ background: '#f8f3ef', border: 'none', borderRadius: '6px', width: '22px', height: '22px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fa-solid fa-minus" style={{ fontSize: '9px' }}></i>
                  </button>
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, minWidth: '18px', textAlign: 'center' }}>{item.qty}</span>
                  <button onClick={() => changeQty(item.id, 1)} style={{ background: '#f8f3ef', border: 'none', borderRadius: '6px', width: '22px', height: '22px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fa-solid fa-plus" style={{ fontSize: '9px' }}></i>
                  </button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ddd', fontSize: '13px' }}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div style={{ padding: '1.2rem', borderTop: '1px solid #f0e8e0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#999', marginBottom: '5px' }}><span>Sous-total</span><span>{fmt(total)}</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#999', marginBottom: '5px' }}>
              <span><i className="fa-solid fa-truck-fast" style={{ fontSize: '10px' }}></i> Livraison</span>
              <span style={{ color: '#16a34a', fontWeight: 600 }}>Gratuite</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', fontWeight: 700, color: '#111', padding: '8px 0', borderTop: '1px solid #f0e8e0', marginTop: '8px' }}>
              <span>Total</span><span style={{ color: '#F97316' }}>{fmt(total)}</span>
            </div>
            <button onClick={onCheckout} style={{ width: '100%', background: '#F97316', color: '#fff', border: 'none', borderRadius: '16px', padding: '13px', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '12px', boxShadow: '0 4px 16px rgba(249,115,22,0.35)' }}>
              <i className="fa-solid fa-lock"></i> Commander maintenant
            </button>
            <button onClick={clearCart} style={{ width: '100%', background: 'none', border: '1px solid #f0e8e0', color: '#999', borderRadius: '16px', padding: '9px', fontSize: '0.82rem', cursor: 'pointer', marginTop: '8px' }}>
              <i className="fa-solid fa-trash"></i> Vider le panier
            </button>
          </div>
        )}
      </div>
    </>
  )
}