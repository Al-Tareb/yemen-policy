import React from 'react'
import Ourteam from '../../assets/Team/OurTeam/ourteam.png'
import './OurTeam.css'

const OurTeam = () => {
  return (
    <section className='our-team-section'>
       <div className='our-team-main'>
         <div className='our-team-container'>
           <div className='our-team-content'>
             <h2>OUR TEAM</h2>
             <p>ONE TEAM – NATIONWIDE REACH – GLOBAL AVAILABILITY</p>
           </div>
           <img src={Ourteam} alt='OurTeamImage' />
         </div>
       </div>
    </section>
  )
}

export default OurTeam
