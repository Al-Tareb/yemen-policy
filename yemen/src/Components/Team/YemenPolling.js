import React from 'react'
import './YemenPolling.css'
import YemenPollingImage from "../../assets/Team/YemenPolling/logo-e1545084090439.png"
const YemenPolling = () => {
  return (
    <section className='yemen-polling'>
      <div className='yemen-polling-main'>
        <div className='polling-left'>
           <h2>Yemen Polling Center</h2>
           <p>Our data is collected by the highly qualified team at our sister organization, the Yemen Polling Center, headquartered in Taiz, Yemen. YPC has over 15 years of experience in qualitative and quantitative research and has won numerous awards for its work.</p>
           <button>LEARN MORE</button>
        </div>
        <div className='polling-right'>
           <img src={YemenPollingImage} alt='YemenPollingImage' />
        </div>
      </div>
    </section>
  )
}

export default YemenPolling
