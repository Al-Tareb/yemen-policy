import React from 'react'
import './Combining.css'
import combiningImage from "../../assets/Kaleidoscope/Combining/1.svg"

const Combining = () => {
  return (
    <section className='combining-section'>
     <div className='combining-main'>
         <div className='combining-container'>
           <div className='combining-content'>
             <h2>KALEIDOSCOPE</h2>
             <p>COMBINING IDEAS – NEW ANGLES – IMAGINING BEYOND BORDERS</p>
           </div>
           <div className='combining-image'>
             <img src={combiningImage} alt='combiningImage' />
           </div>
         </div>
       </div>
    </section>
  )
}

export default Combining
