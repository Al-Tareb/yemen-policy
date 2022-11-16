import React from 'react'
import './Debriefs.css'
import {Link} from "react-router-dom";
import Kaleidoscope from "../../assets/Publication/Debriefs/01-768x258.jpg"
import Dialogue from '../../assets/Publication/Debriefs/2.jpg'
import Resilience from '../../assets/Publication/Debriefs/3.jpg'
import Participation from '../../assets/Publication/Debriefs/4.jpg'
import Reconciliation from '../../assets/Publication/Debriefs/5.jpg'
import Engagement from '../../assets/Publication/Debriefs/6.jpg'

const Debriefs = () => {
  return (
    <section className='debriefs-section'>
       <div className='debriefs-main'>
        <div className='debriefs-container'>
            <h2>RESEARCH DEBRIEFS</h2>
            <p className='debriefs-paragraph'>Research debriefs are short papers (2-4 pages) presenting new research.</p>
            <div className='debriefs-content'>
             <figure className='figure-shadow'>
                <img src={Kaleidoscope} alt='forceIntegration' />
                <div className='debriefs-desc'>
                  <h3>Let’s change the way we talk about peace in Yemen: The Kaleidoscope provides some new perspectives</h3>
                  <p className='desc'>The Yemeni peace process has so far not brought the political solution that so many Yemenis over the last seven years have been longing for</p>
                  <p className='desc-more'>READ MORE »</p>
                </div>
                <div className='debriefs-line'></div>
                <div className='debriefs-desc'>
                  <h6>June 28, 2022</h6>
                </div>
                <div className='debriefs-footer'></div>
             </figure>
             <figure className='figure-shadow'>
                <img src={Dialogue} alt='forceIntegration' />
                <div className='debriefs-desc'>
                  <h3>Yemen’s Incomplete National Dialogue: Insights on the Design and Negotiations Dynamics</h3>
                  <p className='desc'>“The Yemeni people have chosen the path of peaceful dialogue and reconciliation”, said the spokesperson for United Nations (UN) Secretary-General Ban Ki-moon on 18 March</p>
                  <p className='desc-more'>READ MORE »</p>
                </div>
                <div className='debriefs-line'></div>
                <div className='debriefs-desc'>
                  <h6>June 21, 2022</h6>
                </div>
                <div className='debriefs-footer'></div>
             </figure>
             <figure className='figure-shadow'>
                <img src={Resilience} alt='forceIntegration' />
                <div className='debriefs-desc'>
                  <h3>Policing in a Fragmented State: Resilience of Local State Institutions in Taiz</h3>
                  <p className='desc'>In a nationwide survey conducted by the Yemen Polling Center in 2019, 45 percent of Taiz residents stated that they would first inform the police</p>
                  <p className='desc-more'>READ MORE »</p>
                </div>
                <div className='debriefs-line'></div>
                <div className='debriefs-desc'>
                  <h6>March 21, 2022</h6>
                </div>
                <div className='debriefs-footer'></div>
             </figure>
             <figure className='figure-shadow'>
                <img src={Participation} alt='forceIntegration' />
                <div className='debriefs-desc'>
                  <h3>Personal Resilience as Key to Urban Women’s Economic Participation</h3>
                  <p className='desc'>Until today, socio-cultural norms, inherent to Yemen’s patriarchal social system, remain the primary barrier to Yemeni women’s empowerment. These norms pre-determine nearly all aspects of</p>
                  <p className='desc-more'>READ MORE »</p>
                </div>
                <div className='debriefs-line'></div>
                <div className='debriefs-desc'>
                  <h6>January 20, 2022</h6>
                </div>
                <div className='debriefs-footer'></div>
             </figure>
             <figure className='figure-shadow'>
                <img src={Reconciliation} alt='forceIntegration' />
                <div className='debriefs-desc'>
                  <h3>Making Peace with Everyday Horror: War, Self-Mockery, and Reconciliation</h3>
                  <p className='desc'>As Yemen enters its seventh year of war, humour in the form of self-mockery is emerging and thriving amidst the sustained state of horror. People</p>
                  <p className='desc-more'>READ MORE »</p>
                </div>
                <div className='debriefs-line'></div>
                <div className='debriefs-desc'>
                  <h6>January 3, 2022</h6>
                </div>
                <div className='debriefs-footer'></div>
             </figure>
             <figure className='figure-shadow'>
                <img src={Engagement} alt='forceIntegration' />
                <div className='debriefs-desc'>
                  <h3>Meaningful Civil Society Engagement Can Restore Trust in the Peace Process</h3>
                  <p className='desc'>The peace process in Yemen is facing major challenges, not least of which is the steep escalation of fighting in several parts of the country.</p>
                  <p className='desc-more'>READ MORE »</p>
                </div>
                <div className='debriefs-line'></div>
                <div className='debriefs-desc'>
                  <h6>January 3, 2022</h6>
                </div>
                <div className='debriefs-footer'></div>
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

export default Debriefs
