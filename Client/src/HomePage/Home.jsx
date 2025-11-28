import React from "react";
import SlideBanner from "../HomePage/SlideBanner";
import NewArrival from "../HomePage/NewArrival";
import BestSeller from "./pages/BestSeller";
import FeatureSection from "./FeatureSection";
import CategorySlider from "./CategorySlider";
import BackToTop from "./BackToTop";


function Home() {
  return (
    <div>
      <SlideBanner />
      <CategorySlider />
      <NewArrival />
      <BestSeller />
      <FeatureSection/>      
      <BackToTop />
    </div>
  );
}

export default Home;
