import React from "react";
import SlideBanner from "../HomePage/SlideBanner";
import NewArrival from "../HomePage/NewArrival";
import BestSeller from "./pages/BestSeller";
import FeatureSection from "./FeatureSection";
import CategorySlider from "./CategorySlider";

function Home() {
  return (
    <div>
      <SlideBanner />
      <CategorySlider />
      <NewArrival />
      <BestSeller />
      <FeatureSection/>     
    </div>
  );
}

export default Home;
