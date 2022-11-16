import React from 'react'
import OurWork from "../Components/Home/OurWork"
import HowWeAre from '../Components/Home/HowWeAre'
import RecentWork from '../Components/Home/RecentWork'
import WhatWeDo from '../Components/Home/WhatWeDo'
import Publication from '../Components/Home/Publication'
import Projects from '../Components/Home/Projects'
import Newsletter from '../Components/Home/Newsletter'

const Home = () => {
  return (
    <div>
      <OurWork />
      <HowWeAre />
      <RecentWork />
      <WhatWeDo />
      <Publication />
      <Projects />
      <Newsletter />
    </div>
  )
}

export default Home
