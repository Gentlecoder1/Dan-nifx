import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Strategy from './components/Strategy'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div id='hero'>
          <Hero />
        </div>
        <About />
        {/* <Strategy />
        <Contact /> */}
      </main> 
      <Footer />
    </div>
  )
}

export default App

