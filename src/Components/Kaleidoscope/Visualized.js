import React from 'react'
import './Visualized.css'
import Podcast from "../../assets/Kaleidoscope/Visualized/1.svg"
import VisualizedStory from "../../assets/Kaleidoscope/Visualized/2.svg"
const Visualized = () => {
  return (
    <section className='visualized-section'>
      <div className='visualized-main'>
        <div className='visualized-container'>
          <figure className='the-podcast'>
            <img src={Podcast} alt='PodcastImage' />
            <h3>Podcast</h3>
          </figure>
          <figure className='the-podcast'>
            <img src={VisualizedStory} alt='VisualizedImage' />
            <h3>Visualized Stories</h3>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Visualized
