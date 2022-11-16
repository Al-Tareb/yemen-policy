import React from 'react'
import './Stories.css'
import Bus from "../../assets/Kaleidoscope/Stories/1.jpg"
import dayInSanaa from "../../assets/Kaleidoscope/Stories/2.jpg"
import Saghira from "../../assets/Kaleidoscope/Stories/3.jpg"
import Najiya from "../../assets/Kaleidoscope/Stories/4.jpg"
import Fragmented from "../../assets/Kaleidoscope/Stories/5.jpg"

const Stories = () => {
  return (
    <section className='story-section'>
      <div className='story-main'>
        <h2>VISUALIZED STORIES</h2>
        <p>Our visualized stories are sometimes real, sometimes fictional, and sometimes both. Using different media, we want to tell stories in an evocative and inspiring way.</p>
        <div className='story-container'>
        <figure>
            <div className='story-image'>
              <div className='recent-story-image'>
                  <div className='story-figma'>
                      <img src={Bus} alt='fragmentImage' />
                      <div className='overlay'>
                        <div className='story-desc'>
                          <h3>Bus of Hope</h3>
                        </div>
                      </div>
                  </div>
                  <div className='story-figma'>
                      <img src={dayInSanaa} alt='fragmentImage' />
                      <div className='overlay'>
                        <div className='story-desc'>
                          <h3>Another day in Sana'a</h3>
                        </div>
                      </div>
                  </div>
                  <div className='story-figma'>
                      <img src={Saghira} alt='fragmentImage' />
                      <div className='overlay'>
                        <div className='story-desc'>
                          <h3>Saghira's Laws - A Story About Yemen's Future</h3>
                        </div>
                      </div>
                  </div>
                  <div className='story-figma'>
                      <img src={Najiya} alt='fragmentImage' />
                      <div className='overlay'>
                        <div className='story-desc'>
                          <h3>Najiya</h3>
                        </div>
                      </div>
                  </div>
                  <div className='story-figma'>
                      <img src={Fragmented} alt='fragmentImage' />
                      <div className='overlay'>
                        <div className='story-desc'>
                          <h3>Policing in a Fragmented State</h3>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </figure>

        </div>
      </div>
    </section>
  )
}

export default Stories
