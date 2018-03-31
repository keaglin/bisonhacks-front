import React from 'react'
import { Link } from 'react-router-dom'  
import './Header.css'

const Header = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down header-list">
        <li><a href="#home" >Home</a></li>
        <li><a href="#userSignup">User Sign-up</a></li>
        <li><a href="#logout">Logout</a></li>
      </ul>
    </div>
  </nav>
)

export default Header 
