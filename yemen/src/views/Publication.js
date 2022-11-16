import React from 'react'
import Newsletter from '../Components/Home/Newsletter'
import Archive from '../Components/Publication/Archive'
import Debriefs from '../Components/Publication/Debriefs'
import Partnership from '../Components/Publication/Partnership'
import PolicyRep from '../Components/Publication/PolicyRep'
import PolicyReport from '../Components/Publication/PolicyReport'
import Precise from '../Components/Publication/Precise'
import Questions from '../Components/Publication/Questions'
import TheMajlis from '../Components/Publication/TheMajlis'
import Ypc from '../Components/Publication/Ypc'

const Publication = () => {
  return (
    <div>
      <Precise /> 
      <PolicyReport />
      <TheMajlis />
      <PolicyRep />
      <Debriefs />
      <Partnership />
      <Questions />
      <Archive />
      <Ypc />
      <Newsletter />
    </div>
  )
}

export default Publication
