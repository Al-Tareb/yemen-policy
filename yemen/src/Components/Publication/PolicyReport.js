import React from 'react'
import './PolicyReport.css'
import majlisImage from "../../assets/Publication/PolicyReport/2.png"
import PolicyImage from "../../assets/Publication/PolicyReport/publications-data.png"
import researchImage from "../../assets/Publication/PolicyReport/publications-policy-reports.png"
import dataImage from "../../assets/Publication/PolicyReport/publications-research-debriefs.png"

const PolicyReport = () => {
  return (
    <section className='policy-report-section'>
      <div className='policy-report-main'>
        <div className='policy-report-container'>
          <figure className='the-majlis'>
            <img src={majlisImage} alt='MajlisImage' />
            <h3>THE MAJLIS</h3>
          </figure>
          <figure className='the-majlis'>
            <img src={PolicyImage} alt='PolicyImage' />
            <h3>POLICY REPORTS</h3>
          </figure>
          <figure className='the-majlis'>
            <img src={researchImage} alt='researchImage' />
            <h3>RESEARCH DEBRIEFS</h3>
          </figure>
          <figure className='the-majlis'>
            <img src={dataImage} alt='dataImage' />
            <h3>DATA</h3>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default PolicyReport
