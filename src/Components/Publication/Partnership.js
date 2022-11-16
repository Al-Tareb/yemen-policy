import React from 'react'
import './Partnership.css'
import Security from "../../assets/Publication/Partnership/1.jpg"
import Opportunity from "../../assets/Publication/Partnership/2.jpg"
const Partnership = () => {
  return (
    <section className='partnership-section'>
        <div className='partnership-main'>
        <div className='partnership-container'>
            <h2>PUBLICATIONS IN PARTNERSHIP</h2>
            <p className='partnership-paragraph'>The Yemen Policy Center regularly partners up with distinguished research centers to publish research reports. </p>
            <div className='partnership-content'>
             <figure className='figure-shadow'>
                <img src={Security} alt='forceIntegration' />
                <div className='partnership-desc'>
                  <h3>Local Security Governance in Yemen in Times of War</h3>
                  <p className='desc'>With funding from the Government of Canada, between April 2020 and November 2020 the Yemen Policy Center with the support of CARPO researched local security</p>
                  <p className='desc-more'>READ MORE »</p>
                </div>
                <div className='partnership-line'></div>
                <div className='partnership-desc'>
                  <h6>April 14, 2021</h6>
                </div>
                <div className='partnership-footer'></div>
             </figure>
             <figure className='figure-shadow'>
                <img src={Opportunity} alt='forceIntegration' />
                <div className='partnership-desc'>
                  <h3>An Opportunity in Crisis? Covid-19 and State-community Relations in Taiz</h3>
                  <p className='desc'>When many parts of the world began to shut down public life to prevent the spread of the coronavirus in March 2020, observers hoped that</p>
                  <p className='desc-more'>READ MORE »</p>
                </div>
                <div className='partnership-line'></div>
                <div className='partnership-desc'>
                  <h6>April 12, 2021</h6>
                </div>
                <div className='partnership-footer'></div>
             </figure>
             <figure>
                
             </figure>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Partnership
