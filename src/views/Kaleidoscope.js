import React from 'react'
import Newsletter from '../Components/Home/Newsletter'
import Combining from '../Components/Kaleidoscope/Combining'
import Essays from '../Components/Kaleidoscope/Essays'
import Podcast from '../Components/Kaleidoscope/Podcast'
import Stories from '../Components/Kaleidoscope/Stories'
import Visualized from '../Components/Kaleidoscope/Visualized'

const Kaleidoscope = () => {
  return (
    <div>
      <Combining />
      <Visualized />
      <Podcast />
      <Stories />
      <Essays />
      <Newsletter />
    </div>
  )
}

export default Kaleidoscope
