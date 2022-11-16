import React from 'react'
import './PolicyRep.css'
import Seizing from "../../assets/Publication/PolicyRep/ibb_security-768x512.jpg"
import Gendered from "../../assets/Publication/PolicyRep/gender-security-768x512.jpg"

const PolicyRep = () => {
  return (
    <section className='policy-rep-section'>
       <div className='policy-rep-main'>
        <div className='policy-rep-container'>
            <h2>POLICY REPORTS</h2>
            <p className='policy-rep-paragraph'>Policy reports are in-depth studies based on qualitative and quantitative research on a broader subject.</p>
            <div className='policy-rep-content'>
             <figure className='figure-shadow'>
                <img src={Seizing} alt='forceIntegration' />
                <div className='policy-rep-desc'>
                  <h3>Seizing the State: Ibb’s Security Arrangement after Ansarallah’s Takeover</h3>
                  <p className='desc'>Policy Report Mareike Transfeld, Maysaa Shuja al-Deen, and Raiman al-Hamdani Seizing the State: Ibb’s Security Arrangement after Ansarallah’s Takeover June 2020 Table of Contents The</p>
                  <p className='desc-more'>READ MORE »</p>
                </div>
                <div className='policy-rep-line'></div>
                <div className='policy-rep-desc1'>
                  <h6>June 20, 2020</h6>
                </div>
                <div className='policy-rep-footer'></div>
             </figure>
             <figure className='figure-shadow'>
                <img src={Gendered} alt='forceIntegration' />
                <div className='policy-rep-desc'>
                  <h3>Gendered Security: Gender-based Violence and Women’s Access to State and Non-state Security Provision in al-Dhali’</h3>
                  <p className='desc'>Research Debrief Ghaidaa Motahar Gendered Security Gender-based Violence and Women’s Access to State and Non-state Security Provision in al-Dhali’ April 2020 Table of Contents Main</p>
                  <p className='desc-more'>READ MORE »</p>
                </div>
                <div className='policy-rep-line'></div>
                <div className='policy-rep-desc1'>
                  <h6>April 27, 2020</h6>
                </div>
                <div className='policy-rep-footer'></div>
             </figure>
             <figure>
                
             </figure>
            </div>
        </div>
      </div>
    </section>
  )
}
export default PolicyRep
