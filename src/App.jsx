import { useState } from 'react'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import CartDrawer from './components/CartDrawer'
import OrderModal from './components/OrderModal'
import SuccessModal from './components/SuccessModal'
import Footer from './components/Footer'
import Home from './pages/Home'

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [orderOpen, setOrderOpen] = useState(false)
  const [successData, setSuccessData] = useState(null)
  const [search, setSearch] = useState('')

  const handleCheckout = () => {
    setCartOpen(false)
    setOrderOpen(true)
  }

  return (
    <CartProvider>
      <Navbar
        onOpenCart={() => setCartOpen(true)}
        onSearch={setSearch}
      />
      <Home search={search} />
      <Footer />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={handleCheckout}
      />
      <OrderModal
        open={orderOpen}
        onClose={() => setOrderOpen(false)}
        onSuccess={(data) => { setOrderOpen(false); setSuccessData(data) }}
      />
      <SuccessModal
        open={!!successData}
        data={successData}
        onClose={() => setSuccessData(null)}
      />
    </CartProvider>
  )
}