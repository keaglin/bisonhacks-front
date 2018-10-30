import React from 'react'
import { Link } from 'react-router-dom'  
import './Header.css'

const Header = () => (
  <header>
    <nav>
      {/* 1. If this.props.login === false show this */}
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down header-list">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
        {/* 2. If this.props.login === true show nav with profile component instead of sign up and login */}
      </div>
    </nav>
  </header>
)

export default Header 
