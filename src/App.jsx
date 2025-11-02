import React from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Strategy from './components/Strategy'
import Contact from './components/Contact'

function App(){
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Strategy />
        <Contact />
      </main>
      <footer>
        <p>@ 2025 Dan_nifx — Built with passion and purpose</p>
      </footer>
    </>
  )
}

export default App
