import React from 'react'
import { Link } from 'react-router-dom'
import './RecentWork.css'
import Policing from '../../assets/Home/RecentWork/hadee.jpg'
import Fragment from '../../assets/Home/RecentWork/fragment.jpg'
import Oil from '../../assets/Home/RecentWork/oil.jpg'
import Integration from '../../assets/Home/RecentWork/integration.jpg'

const RecentWork = () => {
  return (
    <section className='recent-work'>
       <div className='recent-work-container'>
          <h2>RECENT WORK</h2>
          <figure className='main-recent-work'>
            <div className='main-image'>
              <img className='first-image' src={Policing} alt='PolicingImage' />
              <div className='overlay'>
                  <div className='main-desc'>
                    <h3>
                      Event: National Dialogues and Transitional Peace Processes: Issues, Challenges and Lessons from Yemen and Beyond </h3>
                    <p><i class="fa-solid fa-calendar"></i> October 6, 2022 </p>
                  </div>
              </div>
            </div>
          </figure>
          <figure>
            <div className='sub-image'>
              <div className='recent-sub-image'>
                  <div className='figma'>
                      <img src={Fragment} alt='fragmentImage' />
                      <div className='overlay'>
                        <div className='sub-desc'>
                          <h3>Policing in a Fragmented State</h3>
                          <p><i class="fa-solid fa-calendar"></i> September 5, 2022 </p>
                        </div>
                      </div>
                  </div>
                  <div className='figma'>
                      <img src={Oil} alt='fragmentImage' />
                      <div className='overlay'>
                        <div className='sub-desc'>
                          <h3>Policing in a Fragmented State</h3>
                          <p><i class="fa-solid fa-calendar"></i> September 5, 2022 </p>
                        </div>
                      </div>
                  </div>
                  <div className='figma'>
                      <img src={Integration} alt='fragmentImage' />
                      <div className='overlay'>
                        <div className='sub-desc'>
                          <h3>Policing in a Fragmented State</h3>
                          <p><i class="fa-solid fa-calendar"></i> September 5, 2022 </p>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </figure>
          <div className='page-number'>
            <ul className='page-direction'>
                <li><Link className='page-link' to=''>1</Link></li>
                <li><Link className='page-link' to=''>2</Link></li>
                <li><Link className='page-link' to=''>3</Link></li>
                <li><Link className='page-link' to=''>...</Link></li>
                <li><Link className='page-link' to=''>22</Link></li>
                <li><Link className='page-link next-link' to=''>Next <i class="fa-solid fa-angles-right"></i></Link></li>
            </ul>

          </div>
       </div>
    </section>
  )
}

export default RecentWork
