import React from "react";
import "./FeatureSection.css";

const FeatureSection = ({ feature }) => {
  return (
    <div className="bg-base-100 shadow-2xl overflow-hidden rounded-[16px]">
      <figure className="">
        <div className="relative">
          <div className="banner-wrapper">
            <img src={feature?.img} alt="feature" className="rounded-none" />
          </div>
        </div>
      </figure>

      <div className="card-body items-center bg-secondary text-white p-3 cursor-pointer ">
        <h2 className="card-title font-bold">{feature.category}</h2>
      </div>
    </div>
  );
};

export default FeatureSection;
