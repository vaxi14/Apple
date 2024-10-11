/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Highlights from './sections/Highlights'
import Model from './sections/Model'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import Footer from './sections/Footer'


function App() {
  return (
    <main className='max-w-7xl mx-auto' >
     <Navbar/>
     <Hero/>
     <Highlights/>
     <Model/>
     <Features/>
     <HowItWorks/>
     <Footer/>
    </main>
  )
}

export default App
