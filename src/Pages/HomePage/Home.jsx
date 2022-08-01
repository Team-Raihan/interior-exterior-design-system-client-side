import React from "react";
import FeaturesSection from "../../Components/FeaturedSection/FeaturesSection";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";

const Home = () => {
  return (
    <>
      <div className="min-h-[85vh]">
        <HomeBanner />
        <FeaturesSection />
      </div>
    </>
  );
};

export default Home;
