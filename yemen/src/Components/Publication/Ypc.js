import React from 'react'
import './Ypc.css'
import Institutions from "../../assets/Publication/Ypc/1.jpg"
import Chatham from "../../assets/Publication/Ypc/2.jpg"
import Research from "../../assets/Publication/Ypc/3.jpg"

const Ypc = () => {
  return (
    <section className='ypc-section'>
      <div className='ypc-main'>
        <div className='ypc-container'>
            <h2>YPC IN ACADEMIA</h2>
            <p className='ypc-paragraph'>Yemen Polling data and Yemen Policy analyses are frequently referenced in academic publications. </p>
            <div className='ypc-content'>
             <figure className='figure-shadow'>
               <div className='image-layer'>
                 <img src={Institutions} alt='forceIntegration' />
               </div>
                <div className='ypc-desc'>
                  <h3>Brief on Security Institutions in Aden Referenced by ISPI</h3>
                  <p className='desc'>YPC In Academia YPC BRIEF ON SECURITY INSTITUTIONS IN ADEN REFERENCED BY ISPI November 6, 2019 Coordination within the “anti-Huthi camp” has not existed so</p>
                  <p className='desc-more'>READ MORE »</p>
                </div>
                <div className='ypc-line'></div>
                <div className='ypc-desc'>
                  <h6>November 6, 2019</h6>
                </div>
                <div className='ypc-footer'></div>
             </figure>
             <figure className='figure-shadow'>
                <img src={Chatham} alt='forceIntegration' />
                <div className='ypc-desc'>
                  <h3>Chatham House Report Publishes Results from YPC Security Survey</h3>
                  <p className='desc'>YPC In Academia YPC and Chatham House CHATHAM HOUSE PUBLISHES RESULTS FROM YPC SECURITY SURVEY Septemebr 10, 2019 Read More Translator : N/A Editor :</p>
                  <p className='desc-more'>READ MORE »</p>
                </div>
                <div className='ypc-line'></div>
                <div className='ypc-desc'>
                  <h6>September 10, 2019</h6>
                </div>
                <div className='ypc-footer'></div>
             </figure>
             <figure>
             <img src={Research} alt='forceIntegration' />
                <div className='ypc-desc'>
                  <h3>YPC: An Important Research Institution in Yemen</h3>
                  <p className='desc'>YPC In Academia YPC YPC: AN IMPORTANT RESEARCH INSTITUTION IN YEMEN April 18, 2019 If an increase in foreign women researchers opened up the possibility</p>
                  <p className='desc-more'>READ MORE »</p>
                </div>
                <div className='ypc-line'></div>
                <div className='ypc-desc'>
                  <h6>April 19, 2019</h6>
                </div>
                <div className='ypc-footer'></div>
             </figure>
            </div>       
        </div>
      </div>
      <div className='ypc-footer'>
        <h2>DATA</h2>
        <p className='ypc-paragraph'>YPC regularly publishes data in the form of graphs and data reports.</p>
      </div>
    </section>
  )
}

export default Ypc
