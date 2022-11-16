import React from 'react'
import './TheMajlis.css'
import {Link} from "react-router-dom";
import forceIntegration from "../../assets/Publication/TheMajlis/sForce-hybridization-e1659432472616-768x378.jpg"
import Movement from "../../assets/Publication/TheMajlis/Shadow_networks_l-768x432.jpg"
import Houthi from "../../assets/Publication/TheMajlis/KBRWBC-768x512.jpg"

const TheMajlis = () => {
  return (
    <section className='majlis-section'>
      <div className='majlis-main'>
        <div className='majlis-container'>
            <h2>THE MAJLIS</h2>
            <p className='majlis-paragraph'>Majlis articles are short, argumentative policy pieces with clear recommendations at the end.</p>
            <div className='majlis-content'>
             <figure className='figure-shadow'>
                <img src={forceIntegration} alt='forceIntegration' />
                <div className='majlis-desc'>
                  <h3>Force Integration in a Post-Hybrid Landscape</h3>
                  <p className='desc'>After years of war, Yemen is living through a watershed moment. Since April 2022, a national truce mediated by the United Nations is in effect and</p>
                  <p className='desc-more'>READ MORE »</p>
                </div>
                <div className='majlis-line'></div>
                <div className='majlis-desc'>
                  <h6>August 2, 2022</h6>
                </div>
                <div className='majlis-footer'></div>
             </figure>
             <figure className='figure-shadow'>
                <img src={Movement} alt='forceIntegration' />
                <div className='majlis-desc'>
                  <h3>Yemen’s Underground Feminist Movement Forms Shadow Protection Network</h3>
                  <p className='desc'>In October 2018, a 21-year-old woman, a feminist, along with dozens of other university students, was arrested by the Houthi de facto authorities after protesting</p>
                  <p className='desc-more'>READ MORE »</p>
                </div>
                <div className='majlis-line'></div>
                <div className='majlis-desc'>
                  <h6>August 2, 2022</h6>
                </div>
                <div className='majlis-footer'></div>
             </figure>
             <figure className='figure-shadow'>
                <img src={Houthi} alt='forceIntegration' />
                <div className='majlis-desc'>
                  <h3>The Houthi Soft War on Enemy Propaganda</h3>
                  <p className='desc'>Recent years have witnessed an uptick in the number of partisan websites, television channels, and social media pages covering Yemen’s conflict. The Houthis in particular</p>
                  <p className='desc-more'>READ MORE »</p>
                </div>
                <div className='majlis-line'></div>
                <div className='majlis-desc'>
                  <h6>August 2, 2022</h6>
                </div>
                <div className='majlis-footer'></div>
             </figure>
            </div>
            <ul>
              <li><Link className='page-number' to=''>« Previous</Link></li>
              <li><Link className='page-number' to=''>1</Link></li>
              <li><Link className='page-number' to=''>2</Link></li>
              <li><Link className='page-number' to=''>3</Link></li>
              <li><Link className='page-number' to=''>...</Link></li>
              <li><Link className='page-number' to=''>8</Link></li>
              <li><Link className='page-number' to=''>Next »</Link></li>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default TheMajlis
