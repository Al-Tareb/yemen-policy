import React from 'react'
import './Questions.css'
import Tanker from "../../assets/Publication/Question/1.jpg"
import Cooperation from "../../assets/Publication/Question/2.jpg"
import Resilience from "../../assets/Publication/Question/3.jpg"
import Ukraine from "../../assets/Publication/Question/4.jpg"
import Humanitarian from "../../assets/Publication/Question/5.jpeg"
import Salafist from "../../assets/Publication/Question/6.jpg"


const Questions = () => {
  return (
    <section className='question-section'>
      <div className='question-main'>
        <div className='question-container'>
            <h2>QUESTIONS & ANSWERS</h2>
            <p className='question-paragraph'>In our Q&A section, interviewers talk to experts on their specialist area as it relates to Yemen.</p>
            <div className='question-content'>
             <figure className='figure-shadow'>
                <img src={Tanker} alt='forceIntegration' />
                <div className='question-desc'>
                  <h3>Five Questions on Oil Tanker FSO Safer</h3>
                  <p className='desc'>The FSO Safer, moored off Yemen’s coast, is an aging supertanker at an advanced stage of decay, and it could soon break apart or explode.</p>
                  <p className='desc-more'>READ MORE »</p>
                </div>
                <div className='question-line'></div>
                <div className='question-desc'>
                  <h6>August 23, 2022</h6>
                </div>
                <div className='question-footer'></div>
             </figure>
             <figure className='figure-shadow'>
                <img src={Cooperation} alt='forceIntegration' />
                <div className='question-desc'>
                  <h3>Five questions on the Gulf Cooperation Council-led Yemeni-Yemeni consultations</h3>
                  <p className='desc'>Last month, GCC-brokered Yemeni-Yemeni consultations concluded in Riyadh, Saudi Arabia. We spoke with leading Emirati political analyst Mohammed Baharoon to get more insight.   1</p>
                  <p className='desc-more'>READ MORE »</p>
                </div>
                <div className='question-line'></div>
                <div className='question-desc'>
                  <h6>May 12, 2022</h6>
                </div>
                <div className='question-footer'></div>
             </figure>
             <figure className='figure-shadow'>
                <img src={Resilience} alt='forceIntegration' />
                <div className='question-desc'>
                  <h3>Personal Resilience as Key to Urban Women’s Economic Participation</h3>
                  <p className='desc'>Culture and heritage are contested spaces during times of peace, and even more so during times of conflict. We spoke with Aziz Morfeq, Basement Cultural</p>
                  <p className='desc-more'>READ MORE »</p>
                </div>
                <div className='question-line'></div>
                <div className='question-desc'>
                  <h6>March 14, 2022</h6>
                </div>
                <div className='question-footer'></div>
             </figure>
             <figure className='figure-shadow'>
                <img src={Ukraine} alt='forceIntegration' />
                <div className='question-desc'>
                  <h3>Five Questions on the Impact of the Ukraine War on Yemen</h3>
                  <p className='desc'>On February 24, 2022, Russia invaded Ukraine, launching attacks at several strategic locations throughout the country including the capital of Kyiv. The attack on the</p>
                  <p className='desc-more'>READ MORE »</p>
                </div>
                <div className='question-line'></div>
                <div className='question-desc'>
                  <h6>February 28, 2022</h6>
                </div>
                <div className='question-footer'></div>
             </figure>
             <figure className='figure-shadow'>
                <img src={Humanitarian} alt='forceIntegration' />
                <div className='question-desc'>
                  <h3>Five Questions on Yemen’s Humanitarian Challenges</h3>
                  <p className='desc'>Yemen’s humanitarian crisis is, as many note, the world’s worst humanitarian disaster. There are complex causes which undermine and pose challenges to organizations that are</p>
                  <p className='desc-more'>READ MORE »</p>
                </div>
                <div className='question-line'></div>
                <div className='question-desc'>
                  <h6>February 23, 2022</h6>
                </div>
                <div className='question-footer'></div>
             </figure>
             <figure className='figure-shadow'>
                <img src={Salafist} alt='forceIntegration' />
                <div className='question-desc'>
                  <h3>Five Questions on Salafist Groups in Yemen</h3>
                  <p className='desc'>Yemen’s conflict has given rise to multiple armed groups, with the Amaliqa Brigades making headlines for their impact on conflict dynamics as they pushed the</p>
                  <p className='desc-more'>READ MORE »</p>
                </div>
                <div className='question-line'></div>
                <div className='question-desc'>
                  <h6>February 17, 2022</h6>
                </div>
                <div className='question-footer'></div>
             </figure>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Questions
