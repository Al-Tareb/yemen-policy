import React from 'react'
import './OurAcademic.css'
import AcademicImage from '../../assets/Team/OurAcademi/home_consulting-icon.png'
const OurAcademic = () => {
  return (
    <section className='our-academic'>
       <div className='our-academic-main'>
        <div className='our-academic-left'>
           <h2>OUR ACADEMIC ADVISORY BOARD</h2>
           <p>Our work is supported by a group of international academics, policy experts and journalists. </p>
           <button>LEARN MORE</button>
        </div>
        <div className='our-academic-right'>
           <img src={AcademicImage} alt='AcademicImage' />
        </div>
      </div> 
    </section>
  )
}

export default OurAcademic

