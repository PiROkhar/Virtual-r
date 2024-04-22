import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Features from './components/features'
import More from './components/more'
import Pricing from './components/pricing'
import About from './components/aboutus'

export const App = () => {
  return (
    <div><Navbar/>
        <Hero/>
        <Features/>
        <More/>
        <Pricing/>
        <About/>
    </div>
  )
}
export default App