import React from 'react'
import './WhatWeDo.css'
import Research from "../../assets/Home/WhatWeDo/research.png"
import Perspective from "../../assets/Home/WhatWeDo/perspective.png"
import Supporting from "../../assets/Home/WhatWeDo/supporting.png"

const WhatWeDo = () => {
  return (
    <section>
      <div className='what-we-do'>
        <h2>WHAT WE DO</h2>
        <div className='we-do-main'>
           <div className='research'>
             <img src={Research} alt='researchImage' />
             <div className='description'>
               <h3>RESEARCH</h3>
               <p>Research Design</p>
               <p>Analysis</p>
               <p>Reports and Papers</p>
             </div>  
           </div>
           <div className='research'>
             <img src={Perspective} alt='researchImage' />
             <div className='description'>
               <h3>SHIFTING PERSPECTIVES</h3>
               <p>Governments</p>
               <p>International Organizations</p>
               <p>Yemeni Decision-Makers</p>
             </div>  
           </div>
           <div className='research'>
             <img src={Supporting} alt='researchImage' />
             <div className='description'>
               <h3>SUPPORTING</h3>
               <p>Civil Society Organizations</p>
               <p>Researchers</p>
               <p>Journalists</p>
             </div>  
           </div>
        </div>
      </div>
      
    </section>
  )
}

export default WhatWeDo
