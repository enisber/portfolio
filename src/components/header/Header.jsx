import React from 'react'
import './Header.css'
import iconPage from '../../assets/images/favicon.png'

const Header = () => {

  return (
    <div className='header'>
        <div className='headerContainer'>
            <div className='headerIcon'>
            <a href='#home'>
                <img src={iconPage} alt='' />
            </a>
            </div>
            <ul id='nav'>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#skills'>My skills</a>
                </li>
                <li>
                    <a href='#projects'>Personal projects</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header