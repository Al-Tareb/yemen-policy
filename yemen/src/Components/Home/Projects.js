import React from 'react'
import './Projects.css'
import Visualization from '../../assets/Home/Projects/data.jpg'
import Media from '../../assets/Home/Projects/media.jpg'
import Academic from '../../assets/Home/Projects/academic.jpg'
import Civil from '../../assets/Home/Projects/civil.jpg'
import Security from '../../assets/Home/Projects/security.jpg'
import Parliament from '../../assets/Home/Projects/parliament.jpg'

const Projects = () => {
  return (
    <section className='project-section' id='projectPoint'>
       <h2>PROJECTS</h2>
       <div className='project-main'>
          <div className='project first-project'>
            <img src={Visualization} alt='VisualizationImage' />
            <div className='project-content'>
              <h3>Data Visualization</h3>
            </div>
          </div>
          <div className='project first-project'>
            <img src={Media} alt='VisualizationImage' />
            <div className='project-content'>
              <h3>Media</h3>
            </div>
          </div>
          <div className='project first-project'>
            <img src={Academic} alt='VisualizationImage' />
            <div className='project-content'>
              <h3>Academic Cooperation</h3>
            </div>
          </div>
          <div className='project first-project'>
            <img src={Civil} alt='VisualizationImage' />
            <div className='project-content'>
              <h3>Civil Society</h3>
            </div>
          </div>
          <div className='project first-project'>
            <img src={Security} alt='VisualizationImage' />
            <div className='project-content'>
              <h3>Security</h3>
            </div>
          </div>
          <div className='project first-project'>
            <img src={Parliament} alt='VisualizationImage' />
            <div className='project-content'>
              <h3>Yemen Parliament Watch</h3>
            </div>
          </div>
       </div>
      
    </section>
  )
}

export default Projects
