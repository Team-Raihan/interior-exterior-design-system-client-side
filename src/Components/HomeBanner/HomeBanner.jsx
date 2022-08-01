import React from "react";
import "./HomeBanner.css";
import homeBanner from "../../assets/banner/homeBanner.png";
const HomeBanner = () => {
  return (
    <div className="lg:max-w-7xl mx-auto px-4 mt-4">
      <div className="relative">
        <div className="banner-wrapper">
          <img className="" src={homeBanner} alt="Home Banner" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
