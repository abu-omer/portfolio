import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/mohamed khalid.jpg'
import HeaderSocials
  from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm'</h5>
        <h1>Mohamed Khalid</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={me} alt="" />
        </div>
        <a href='#contact' className='scrooll__down'>Scrool Down</a>
      </div>
    </header>
  )
}

export default Header