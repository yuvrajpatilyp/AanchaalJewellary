import React from "react";
import SlideBanner from "../HomePage/SlideBanner";
import NewArrival from "../HomePage/NewArrival";
import BestSeller from "./pages/BestSeller";
import FeatureSection from "./FeatureSection";

function Home() {
  return (
    <div>
      <SlideBanner />
      <NewArrival />
      <BestSeller />
      <FeatureSection/>     
    </div>
  );
}

export default Home;
