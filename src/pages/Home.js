import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Hero from '../components/Hero'
import About from '../components/About'
import Resources from '../components/Resources'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <Resources/>
      <Footer/>
    </>
  )
}

export default Home