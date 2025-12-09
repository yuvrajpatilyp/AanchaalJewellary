import React from 'react'
import JewelleryEssentials from './JewelleryEssentials'
import Shopbygen from './Shopbygen'
import BestSeller from './pages/BestSeller'
import NewArrival from './NewArrival'
import FeatureSection from './FeatureSection'
import SlideBanner from './SlideBanner'
import CategorySlider from './CategorySlider'
import BackToTop from './BackToTop'

function Home() {
  return (
    <div>
        <SlideBanner/>
        <CategorySlider/>
        <JewelleryEssentials/>
        <BestSeller/>
        <Shopbygen/>
        <NewArrival/>
        <FeatureSection/>
        <BackToTop/>
           
              
         
              
    </div>
  )
}

export default Home
