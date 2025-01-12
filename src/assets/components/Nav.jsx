import React from 'react'
import Logo from '../images/logo.png'


const Nav = () => {
  return (
    <>
        <nav className='nav'>
            <div className="nav__logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className='nav__links'>
                <a href="#" className='nav__link'>Home</a>
                <a href="#" className='nav__link'>About Us</a>
                <a href="#" className='nav__link'>Contact Us</a>
                <a href="#" className='nav__link'>Blog</a>
            </div>
        </nav>
    </>
  )
}

export default Nav