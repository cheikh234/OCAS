import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'  // ← AJOUTE CETTE LIGNE
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  {/* ← AJOUTE CE WRAPPER */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
)