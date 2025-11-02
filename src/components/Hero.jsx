import React from 'react'

export default function Hero(){
  return (
    <section id="home" className="hero">
      <div className="overlay" />
      <div className="hero-content">
        <h2>Hello, I'm <span className="gold">Dan_nifx</span></h2>
        <h3>Trend-Following Forex Trader</h3>
        <p>Mastering the markets through structure, confluence, and discipline</p>
        <a href="#strategy"><button className="btn">Explore My Strategy</button></a>
      </div>
    </section>
  )
}
