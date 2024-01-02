import React from 'react'
import './Footer.css'
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footerSection'>
      <div className='footerContainer'>
        <p>Contact:</p>  
        <a href='mailto:inebernat@gmail.com' className='contactIcon'>
          <IoMdMail size={25}/>
        </a>
        <a href='https://www.linkedin.com/in/in%C3%A9s-bernat-iba%C3%B1ez-391996291/' target='_blank' rel='noopener noreferrer' className='contactIcon'>
          <FaLinkedin size={25} /> 
        </a>
        <a href="https://www.flaticon.es/iconos-gratis/creatividad" title="creatividad iconos">
          Index icon created by mavadee - Flaticon
        </a>
      </div>
    </div>
  )
}

export default Footer