import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='site-nav grid'>
      <h1>Cosmo Junkie</h1>
      <ul>
        <li><Link smooth to='portfolio'>Portfolio</Link></li>
        <li><Link smooth to='skills'>Skills</Link></li>
        <li><Link smooth to='contact'>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar