import React from 'react'
import '../css/Header.css'
function Header() {
  return (
    <div className="nav-bar">
    <div className="logo">
      <img src="./logo.png" alt="logo" />
    </div>

    <ul className="menu">
      <li>
        <a href="/">HOME</a>
      </li>
      
      
      <li>
        <a href="#service">SERVICES</a>
      </li>
      <li>
        <a href="#hour">HOURS</a>
      </li>
     
      <li>
        <a href="#contact">FREE CONSULTATION </a>
      </li>
    </ul>
  </div>
  )
}

export default Header
