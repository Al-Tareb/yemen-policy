import React from 'react'
import './OurField.css'
import FieldImage from "../../assets/Team/OurField/YPC-UI_Team-1.png"

const OurField = () => {
  return (
    <section className='our-field'>
       <div className='our-field-main'>
          <h2>OUR FIELD RESEARCH</h2>
          <p className='main-paragraph'>WITH 15 YEARS OF EXPERIENCE, THE YEMEN POLLING CENTER HAS BECOME IS AN EXPERT FOR FIELDWORK IN CONFLICT ENVIRONMENTS.</p>
          <div className='our-field-container'>
            <div className='our-field-content'>
                <h3>LOCAL KNOWLEDGE</h3>
                <div className='our-field-image'>
                    <img src={FieldImage} alt='FieldImage' />
                </div>
                <p>Local Dialects</p>
                <p className='middle-paragraph'>Connections to Local Authorities/ Tribes</p>
                <p>Cultural Sensibilities</p>
            </div>
            <div className='our-field-content'>
                <h3>METHODOLOGIES</h3>
                <div className='our-field-image'>
                    <img src={FieldImage} alt='FieldImage' />
                </div>
                <p>Training Workshops for Every Project</p>
                <p className='middle-paragraph'>Conflict Sensible Methodologies</p>
                <p>Academic Standards</p>
            </div>
            <div className='our-field-content'>
                <h3>GENDER</h3>
                <div className='our-field-image'>
                    <img src={FieldImage} alt='FieldImage' />
                </div>
                <p>Half of the Enumerators are Female</p>
                <p className='middle-paragraph'>Access to Female Respondents and Households</p>
                <p>Gender Awareness</p>
            </div>
          </div>
       </div>
      
    </section>
  )
}

export default OurField
