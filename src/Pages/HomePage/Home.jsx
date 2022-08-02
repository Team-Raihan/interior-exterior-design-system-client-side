import React from "react";
import FeaturesSection from "../../Components/FeaturedSection/FeaturesSection";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import Reviews from "../../Components/Reviews/Reviews";
import WeDo from "../../Components/WeDo/WeDo";

const Home = () => {
  return (
    <>
      <div>
        <HomeBanner />
        <FeaturesSection />
        <WeDo />
        <Reviews />
      </div>
    </>
  );
};

export default Home;
