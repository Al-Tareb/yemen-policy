import React from 'react'
import './Precise.css'
import PreciseImage from "../../assets/Publication/Precise/YPC-UI_Pub.png"

const Precise = () => {
  return (
    <section className='precise-section'>
       <div className='precise-main'>
         <div className='precise-container'>
           <div className='precise-content'>
             <h2>OUR TEAM</h2>
             <p>ONE TEAM – NATIONWIDE REACH – GLOBAL AVAILABILITY</p>
           </div>
           <div className='precise-image'>
             <img src={PreciseImage} alt='PreciseImage' />
           </div>
         </div>
       </div>
    </section>
  )
}

export default Precise






