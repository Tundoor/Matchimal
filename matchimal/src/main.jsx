import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from "./UI/Home.jsx"
import Personal from "./UI/Personal.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/personal" element={<Personal />}></Route>
      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
