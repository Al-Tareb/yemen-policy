import React from 'react'
import './Essays.css'
import stereotypes from '../../assets/Kaleidoscope/Essays/1.jpg'

const Essays = () => {
  return (
    <section className='essay-section'>
    <div className='essay-main'>
      <h2>PHOTO ESSAYS</h2>
      <p>Through our photo essays we share the inspirational stories of Yemenis who are overcoming obstacles to live their lives, defy expectations, and provide hope for others.</p>
      <div className='essay-container'>
      <figure>
          <div className='essay-image'>
            <div className='recent-essay-image'>
                <div className='essay-figma'>
                    <img src={stereotypes} alt='fragmentImage' />
                    <div className='overlay'>
                      <div className='essay-desc'>
                        <h3>Working women: Shattering stereotypes and source of inspiration</h3>
                      </div>
                    </div>
                </div>
                <div className='essay-figma'>
                    
                </div>
            </div>
          </div>
        </figure>

      </div>
    </div>
  </section>
  )
}

export default Essays
