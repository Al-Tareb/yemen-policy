import React from 'react'
import './Newsletter.css'
import NewsIcon from '../../assets/Home/Newsletter/newsletter.png'

const Newsletter = () => {
  return (
    <section className='newsletter' id='newsletterPoint'>
       <div className='newsletter-main'>
          <div className='newsletter-icon'>
            <img src={NewsIcon} alt='newsLeterImage' />
          </div>
          <div className='newsletter-content'>
            <h3>Yemen Policy Newsletter</h3>
            <form>
                <input placeholder='Email Address'></input>
                <button>subscribe</button>
            </form>
            <h4>Follow us on Social Media</h4>
            <ul>
                <li><i class="fa-brands fa-square-facebook"></i></li>
                <li><i class="fa-brands fa-square-twitter"></i></li>
                <li><i class="fa-brands fa-linkedin"></i></li>
            </ul>
          </div>

       </div>
    </section>
  )
}

export default Newsletter
