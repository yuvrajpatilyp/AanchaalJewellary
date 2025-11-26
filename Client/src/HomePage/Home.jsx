import React from 'react'
import JewelleryEssentials from './JewelleryEssentials'
import Shopbygen from './Shopbygen'
import BestSeller from './pages/BestSeller'
import NewArrival from './NewArrival'
import FeatureSection from './FeatureSection'
import SlideBanner from './SlideBanner'

function Home() {
  return (
    <div>
              <SlideBanner/>
              
              <JewelleryEssentials/>
              <BestSeller/>

              <Shopbygen/>
              <NewArrival/>
              <FeatureSection/>
           
              
         
              
    </div>
  )
}

export default Home
