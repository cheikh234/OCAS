import { useState } from 'react'
import { useCart } from '../context/CartContext'

const fmt = n => n.toLocaleString('fr-FR') + ' F'

export default function OrderModal({ open, onClose, onSuccess }) {
  const { cart, total, clearCart } = useCart()
  const [form, setForm] = useState({ prenom: '', nom: '', tel: '', email: '', adresse: '', zone: 'Dakar Centre', paiement: 'Wave', note: '' })
  const [err, setErr] = useState('')

  if (!open) return null

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = () => {
    if (!form.prenom || !form.tel || !form.adresse) { setErr('Veuillez remplir les champs obligatoires (Prénom, Téléphone, Adresse)'); return }
    setErr('')
    const orderId = '#OCX-' + Math.floor(100000 + Math.random() * 900000)
    clearCart()
    onClose()
    onSuccess({ orderId, prenom: form.prenom, tel: form.tel })
  }

  const inp = { width: '100%', border: '1.5px solid #e8e3de', borderRadius: '12px', padding: '10px 14px', fontSize: '0.87rem', fontFamily: 'Plus Jakarta Sans, sans-serif', outline: 'none', color: '#111', background: '#fff' }
  const lbl = { display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#666', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.4px' }

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div style={{ background: '#fff', borderRadius: '24px', padding: '2rem', maxWidth: '440px', width: '100%', boxShadow: '0 24px 80px rgba(0,0,0,0.22)', animation: 'popIn 0.4s cubic-bezier(0.34,1.56,0.64,1)', maxHeight: '90vh', overflowY: 'auto' }}>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', fontWeight: 800, marginBottom: '4px' }}>Finaliser la commande</h2>
        <p style={{ fontSize: '0.82rem', color: '#aaa', marginBottom: '1.4rem' }}>Remplissez vos informations pour la livraison</p>

        {/* Récapitulatif */}
        <div style={{ background: '#faf7f5', borderRadius: '14px', padding: '14px', marginBottom: '16px' }}>
          <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.88rem', fontWeight: 700, marginBottom: '10px' }}>
            <i className="fa-solid fa-receipt" style={{ color: '#F97316', marginRight: '6px' }}></i>Récapitulatif
          </h4>
          {cart.map(it => (
            <div key={it.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#888', marginBottom: '5px' }}>
              <span>{it.name} x{it.qty}</span><span>{fmt(it.price * it.qty)}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 700, color: '#111', paddingTop: '8px', borderTop: '1px solid #ede8e3', marginTop: '6px' }}>
            <span>Total</span><span style={{ color: '#F97316' }}>{fmt(total)}</span>
          </div>
        </div>

        {/* Formulaire */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
          <div><label style={lbl}>Prénom *</label><input name="prenom" value={form.prenom} onChange={handle} placeholder="Mamadou" style={inp} /></div>
          <div><label style={lbl}>Nom</label><input name="nom" value={form.nom} onChange={handle} placeholder="Diallo" style={inp} /></div>
        </div>
        {[['tel', 'Téléphone *', '+221 77 000 00 00', 'tel'], ['email', 'Email', 'mamadou@email.com', 'email'], ['adresse', 'Adresse de livraison *', 'Dakar, Plateau, Rue 10...', 'text']].map(([name, label, ph, type]) => (
          <div key={name} style={{ marginBottom: '14px' }}>
            <label style={lbl}>{label}</label>
            <input name={name} value={form[name]} onChange={handle} placeholder={ph} type={type} style={inp} />
          </div>
        ))}
        <div style={{ marginBottom: '14px' }}>
          <label style={lbl}>Zone de livraison</label>
          <select name="zone" value={form.zone} onChange={handle} style={inp}>
            {['Dakar Centre', 'Dakar Banlieue', 'Thiès', 'Saint-Louis', 'Autre ville'].map(z => <option key={z}>{z}</option>)}
          </select>
        </div>
        <div style={{ marginBottom: '14px' }}>
          <label style={lbl}>Mode de paiement</label>
          <select name="paiement" value={form.paiement} onChange={handle} style={inp}>
            {['Wave', 'Orange Money', 'Free Money', 'Paiement à la livraison', 'Carte bancaire'].map(p => <option key={p}>{p}</option>)}
          </select>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label style={lbl}>Note (optionnel)</label>
          <textarea name="note" value={form.note} onChange={handle} placeholder="Instructions spéciales..." style={{ ...inp, resize: 'none', height: '70px' }} />
        </div>

        {err && <p style={{ color: '#dc2626', fontSize: '0.8rem', marginBottom: '12px', background: '#fee2e2', padding: '8px 12px', borderRadius: '9px' }}><i className="fa-solid fa-circle-exclamation"></i> {err}</p>}

        <button onClick={submit} style={{ width: '100%', background: '#F97316', color: '#fff', border: 'none', borderRadius: '16px', padding: '14px', fontSize: '0.92rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '9px', fontFamily: 'Plus Jakarta Sans, sans-serif', boxShadow: '0 4px 16px rgba(249,115,22,0.35)' }}>
          <i className="fa-solid fa-paper-plane"></i> Confirmer la commande
        </button>
        <button onClick={() => { onClose() }} style={{ width: '100%', background: 'none', border: '1px solid #e8e3de', color: '#aaa', borderRadius: '16px', padding: '10px', fontSize: '0.83rem', cursor: 'pointer', marginTop: '8px', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          <i className="fa-solid fa-xmark"></i> Annuler
        </button>
      </div>
      <style>{`@keyframes popIn{from{transform:scale(0.75);opacity:0}to{transform:scale(1);opacity:1}}`}</style>
    </div>
  )
}