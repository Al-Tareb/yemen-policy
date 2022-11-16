import React from 'react'
import './Archive.css'
import {Link} from "react-router-dom";
import Tanker from "../../assets/Publication/Archive/1.jpg"
import Cooperation from "../../assets/Publication/Archive/2.jpg"
import Resilience from "../../assets/Publication/Archive/3.jpg"
import Ukraine from "../../assets/Publication/Archive/4.jpg"


const Archive = () => {
  return (
    <section className='archive-section'>
      <div className='archive-main'>
        <div className='archive-container'>
          <div className='archive-title'>
            <h2>REPORT ARCHIVE</h2>
            <p className='archive-paragraph'>YPC’s reports from 2004 to 2018</p>
          </div>
          <ul className='archive-link'>
            <li className='active'><Link className='link-item active' to=''></Link>All</li>
            <li><Link className='link-item' to=''></Link>2018</li>
            <li><Link className='link-item' to=''></Link>2017</li>
            <li><Link className='link-item' to=''></Link>2014</li>
            <li><Link className='link-item' to=''></Link>2013</li>
            <li><Link className='link-item' to=''></Link>2012</li>
            <li><Link className='link-item' to=''></Link>2011</li>
            <li><Link className='link-item' to=''></Link>2010</li>
            <li><Link className='link-item' to=''></Link>2009</li>
            <li><Link className='link-item' to=''></Link>2008</li>
            <li><Link className='link-item' to=''></Link>2007</li>
          </ul>
            <div className='archive-content'>
             <figure className='figure-shadow'>
                <img src={Tanker} alt='forceIntegration' />
             </figure>
             <figure className='figure-shadow'>
                <img src={Cooperation} alt='forceIntegration' />
             </figure>
             <figure className='figure-shadow'>
                <img src={Resilience} alt='forceIntegration' />
             </figure>
             <figure className='figure-shadow'>
                <img src={Ukraine} alt='forceIntegration' />
             </figure>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Archive
