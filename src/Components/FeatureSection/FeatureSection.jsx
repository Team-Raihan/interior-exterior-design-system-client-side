import React from "react";
import "./FeatureSection.css";

const FeatureSection = ({ feature }) => {
  return (
    <div className="card  bg-base-100 shadow-2xl">
      <figure className="px-4 pt-4">
        <div className="overflow-hidden">
          <img src={feature?.img} alt="feature" className="rounded-xl" />
        </div>
      </figure>
      <div className="card-body items-center bg-secondary text-white p-3 cursor-pointer clickable">
        <h2 className="card-title font-bold">{feature.category}</h2>
      </div>
    </div>
  );
};

export default FeatureSection;
