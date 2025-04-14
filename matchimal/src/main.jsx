import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./UI/Home.jsx"
import Header from "./UI/Header.jsx"
import Footer from "./UI/Footer.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home />
    <Footer />
  </StrictMode>,
)
