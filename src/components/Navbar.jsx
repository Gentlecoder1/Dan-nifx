import React from 'react'

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="container">
        <h1 className="logo">Dan<span>_nifx</span></h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#strategy">Strategy</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
