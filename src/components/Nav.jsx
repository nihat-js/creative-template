import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.scss'
import githubImage from '../svg/github.svg'

function Nav() {
  return (
    <nav className='nav-component'>
      <div className="container">
        <div className="row">
          <div className="social">
            <a href="https://github.com/nihat-js">
            <img src={githubImage} alt="" />
            </a>
          </div>
          <h3 className="brand"> Niko  </h3>
          <ul className="link">
            <li> <Link to=''> Home </Link> </li>
            <li> <Link to='/about'> About </Link> </li>
            <li> <Link to='/contact'> Contact </Link> </li>
            <li> <Link to='/services'> Services </Link> </li>
            <li> <Link to='/portfolio'> Portfolio </Link> </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
