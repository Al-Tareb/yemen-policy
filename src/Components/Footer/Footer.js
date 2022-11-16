import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='footer-section'>
      <div className='footer-main'>
         <ul>
            <div className='footer-content'>
              <li className='footer-link'>© Copyright 2012 - 2021</li>
              <li className='footer-link'>All Rights Reserved</li>
            </div>
            <div className='footer-content'> 
              <li className='footer-link'>Yemen Policy Center</li>
              <li className='footer-impressum'>Impressum - Legal Notice</li>
            </div>
            <div className='footer-content'>   
              <li className='footer-policy'>Privacy Policy</li>
            </div>
         </ul>
      </div>
    </section>
  )
}

export default Footer
