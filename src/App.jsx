import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Philosophy from './components/Philosophy'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Services />
      <Philosophy />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App