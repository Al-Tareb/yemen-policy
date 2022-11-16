import React from 'react'
import './Publication.css'
import Podcast from '../../assets/Home/Publication/podcast.png'
import Majlis from '../../assets/Home/Publication/majlis.png'
import News from '../../assets/Home/Publication/news.png'

const Publication = () => {
  return (
    <section className='publication-section'>
      <div className='publication-main'>
        <div className='publication-content'>
           <div className='research'>
             <img src={Podcast} alt='researchImage' />
             <div className='description'>
               <h3>RESEARCH</h3>
               <p>Research Design</p>
               <p>Analysis</p>
               <p>Reports and Papers</p>
             </div>  
           </div>
           <div className='research'>
             <img src={Majlis} alt='researchImage' />
             <div className='description'>
               <h3>SHIFTING PERSPECTIVES</h3>
               <p>Governments</p>
               <p>International Organizations</p>
               <p>Yemeni Decision-Makers</p>
             </div>  
           </div>
           <div className='research'>
             <img src={News} alt='researchImage' />
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

export default Publication
