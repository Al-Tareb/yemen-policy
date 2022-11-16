import React from 'react'
import { HashLink } from 'react-router-hash-link'
import StoryImage from "../../assets/Team/OurStory/ourstory.png"
import "./OurStory.css"

const OurStory = () => {
  return (
    <section className='our-story-section'>
       <div className='our-story-main'>
          <div className='our-story-left'>
             <h2 className='our-story-title'>OUR STORY</h2>
             <p>The <HashLink className='story-hash-link' to="/home/#projectPoint">Yemen Policy Center</HashLink>  was founded in March 2020 by a group of Yemeni and German researchers associated with the Yemen Polling Center, a Yemeni NGO, headquartered in Taiz, Yemen. <HashLink className='story-hash-link' to="/home/#projectPoint">With our work</HashLink> we want to impact Yemeni and international policymaking with the ultimate goal to improve the living conditions of the Yemeni people.</p>
             <p>Yemen Policy is a think  tank that developed out of the Yemen Polling Center’s research department. Founded in 2004, the Yemen Polling Center is the first public opinion and polling organisation in Yemen. Since its establishment it has implemented hundreds of projects in the fields of media, security, civil society, academic cooperation and more.</p>
             <p>As Yemen Policy, we want to have a stronger impact on policy-making, while still relying on rigorous research of the Polling Center. We promote non-violence, human rights, and social change through research, education, activism, and influencing public policies.</p>
             <p>Further, Yemen Policy supports young Yemeni research talents, by creating genuine opportunities for career development. Our approach is one way for Yemenis to confront the conflict, which is by creating the space and providing research tools, writing techniques and social networks for Yemeni researchers who are becoming increasingly isolated.</p>

          </div>
          <div className='our-story-right'>
             <h2>YEMEN POLLING</h2>
             <div className='our-story-image'>
                <img src={StoryImage} alt='ourStoryImage' />
             </div>

          </div>
       </div>
    </section>
  )
}

export default OurStory
