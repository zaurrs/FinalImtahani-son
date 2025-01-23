import React from 'react'
import Hero from '../../components/hero/Hero'
import About from '../../components/about/About'
import Beuty from '../../components/beatuy/Beuty'
import Products from '../../components/product/Products'
import Contact from './contact/Contact'

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Beuty />
        <Products />
        <Contact />
    </div>
  )
}

export default Home