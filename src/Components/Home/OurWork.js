import React from 'react'
import "./OurWork.css"
import HomeBg from "../../assets/Home/bg1.png"

const OurWork = () => {
  return (
    <section className='our-work-section'>
       <div className='our-work-container'>
          <div className='our-work-image'>
            <div className='our-work-content'>
               <div className='our-work-subcontent'>
                  <h1 className='our-work-title'>INDEPENDENT RESEARCH FOR WELL-FOUNDED POLICIES</h1>
                  <button className='main-button'>OUR WORK</button>
               </div>
            </div>
            <div className='home-img'>
              <img src={HomeBg} alt='Home Image' />
            </div>
          </div>
       </div>
    </section>
  )
}

export default OurWork
