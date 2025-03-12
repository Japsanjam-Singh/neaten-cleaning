import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import CommercialServices from './pages/CommercialServices'
import ResidentialServices from './pages/ResidentialServices'
import ScrollToTop from './ScrollToTop'

export const App = () => {
  return (
 <>
  <Navbar></Navbar>
 
 <ScrollToTop />
 <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/commercial" element={<CommercialServices />} />
      <Route path="/services/residential" element={<ResidentialServices />} />
    </Routes>
 
  <Footer></Footer>
 
 </>
  )
}

export default App