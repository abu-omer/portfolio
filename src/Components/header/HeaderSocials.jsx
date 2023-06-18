import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'
const HeaderSocials = () => {
    return (
        
        <div className="header__socials">
            <a href='https://linkedin.com' target="_block"><BsLinkedin /></a>
            <a href='https://github.com' target="_block"><BsGithub /></a>
            <a href='https://dribble.com' target="_block"><FiDribbble /></a>
      </div>
      

    )
}

export default HeaderSocials