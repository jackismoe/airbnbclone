import React from 'react'
import logo from '../images/just-logo-nobg.jpg'
import globe from '../images/globe.jpg'
import menu from '../images/menu.jpg'
import userIcon from '../images/userIcon.jpg'

const Banner = () => {
  return (
    <div class='header'>
      <div class='top-third'>
        <img src={logo} alt='logo' class='logo'/>
        <div class='user'>
          <a class='cta' href='https://www.airbnb.com/host/homes'>Become a host</a>
          <img src={globe} alt='language-selector' class='language'/>
          <div class='user-int'>
            <img class='menu' src={menu} alt='menu'/>
            <img class='userIcon' src={userIcon} alt='menu'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner