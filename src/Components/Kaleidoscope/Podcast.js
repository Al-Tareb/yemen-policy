import React from 'react'
import './Podcast.css'
import {Link} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Podcast1 from "../../assets/Kaleidoscope/Podcast/1.jpg"
import Podcast2 from "../../assets/Kaleidoscope/Podcast/2.jpg"
import Podcast3 from "../../assets/Kaleidoscope/Podcast/3.jpg"
import Podcast4 from "../../assets/Kaleidoscope/Podcast/4.jpg"
import Icon1 from "../../assets/Kaleidoscope/Podcast/icon-sound.png"
import Icon2 from "../../assets/Kaleidoscope/Podcast/podcast-google.png"
import Icon3 from "../../assets/Kaleidoscope/Podcast/podcast-apple.jpeg"
import Icon4 from "../../assets/Kaleidoscope/Podcast/inchor.jpeg"
import Icon5 from "../../assets/Kaleidoscope/Podcast/spotify.png"

const Podcast = () => {
  return (
    <section className='podcast-section'>
     <div className='podcast-main'>
        <div className='podcast-title'>
          <h2>PODCAST</h2>
          <p>The Kaleidoscope podcast is a platform for different people, from different walks of life, to come together and share their ideas, stories, and inspirational tales with the goal to rethink peace in Yemen.</p>
        </div>
        <div className='podcast-carousal'>
            <Carousel infiniteLoop autoPlay>
                <div className='podcast-image'>
                  <img src={Podcast1} alt="PodcastImage" />
                </div>
                <div className='podcast-image'>
                  <img src={Podcast2} alt="PodcastImage" />
                </div>
                <div className='podcast-image'>
                  <img src={Podcast3} alt="PodcastImage" />
                </div>
                <div className='podcast-image'>
                  <img src={Podcast4} alt="PodcastImage" />
                </div>
            </Carousel>  
        </div>
        <h3>The Kaleidoscope podcast is also available at:</h3>
        <ul className='podcast-icons'>
            <li><Link className='icon-image' to=''><img src={Icon1} alt='IconImage' /></Link></li>
            <li><Link className='icon-image' to=''><img src={Icon2} alt='IconImage' /></Link></li>
            <li><Link className='icon-image' to=''><img src={Icon3} alt='IconImage' /></Link></li>
            <li><Link className='icon-image' to=''><img src={Icon4} alt='IconImage' /></Link></li>
            <li><Link className='icon-image' to='https://open.spotify.com/show/3yHArugmdtWHTy1xbKgIOw'><img src={Icon5} alt='IconImage' /></Link></li>
        </ul>
     </div> 
    </section>
  )
}

export default Podcast
