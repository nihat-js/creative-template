import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import IndexPage from './pages/Index'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import ServicesPage from './pages/Services'
import PortfolioPage from './pages/Portfolio'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/services' element={<ServicesPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
