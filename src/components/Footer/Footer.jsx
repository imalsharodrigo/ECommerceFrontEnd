import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer_logo">
           <img src={assets.logo} alt="" />
           <p>StepUpShoes</p>
        </div>
        <ul className='footer-links'>
          <li>Company</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-soocial-icons">
          <div className="footer-icon-container">
            <img src={assets.Facebook} alt="" />
          </div>
          <div className="footer-icon-container">
            <img src={assets.whatsapp} alt="" />
          </div>
          <div className="footer-icon-container">
            <img src={assets.youtube} alt="" />
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>
            Copyright @{new Date().getFullYear()}. All rights reserved.
          </p>
        </div>   
    </div>
  )
}

export default Footer