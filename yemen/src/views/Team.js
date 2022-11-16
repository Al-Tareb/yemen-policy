import React from 'react'
import Newsletter from '../Components/Home/Newsletter'
import MeetTeam from '../Components/Team/MeetTeam'
import OurAcademic from '../Components/Team/OurAcademic'
import OurField from '../Components/Team/OurField'
import OurStory from '../Components/Team/OurStory'
import OurTeam from '../Components/Team/OurTeam'
import YemenPolling from '../Components/Team/YemenPolling'

const Team = () => {
  return (
    <div>
      <OurTeam />
      <OurStory />
      <MeetTeam />
      <YemenPolling />
      <OurField />
      <OurAcademic />
      <Newsletter />
    </div>
  )
}

export default Team
