import React from 'react'
import logo from '../images/just-logo-nobg.jpg'
import globe from '../images/globe.jpg'
import menu from '../images/menu.jpg'
import userIcon from '../images/userIcon.jpg'

class Banner extends React.Component {

  render() {
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

        <div class='search-links-container'>
          <div class='search-links'>
            <p id='first-link' class='places-to-stay'>Places to stay</p>
            <p id='second-link' class='experiences'>Experiences</p>
            <p id='third-link' class='online-experiences'>Online Experiences</p>
          </div>
        </div>

        <div class='banner-container'>
          <div class='search-bar'>
            <input class='location'></input>
            <input class='check-in'></input>
            <input class='check-out'></input>
            <input class='guests'></input>
          </div>

          <div class='banner'/>
          
          <p>Made possible by hosts</p>
        </div>
      </div>
    )
  }
}

export default Banner