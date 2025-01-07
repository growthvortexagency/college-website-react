import React from 'react'
import '../styles/Header.css'
import logo from '../assets/logos/St_Anthony_College_Logo.png'
import padua from '../assets/logos/St_Anthony_of_Padua.png'

const Header = () => {
    return (
        <div className="header-part">
            <div className='overlay-logos'>
                <img src={logo} alt="St. Anthony College Logo" className="college-logo" />
                <img src={padua} alt="Padua Logo" className="padua-logo" />
            </div>
        </div>
    )
}

export default Header