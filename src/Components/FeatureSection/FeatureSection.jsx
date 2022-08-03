import React from "react";
import "./FeatureSection.css";
import { useNavigate } from "react-router-dom";

const FeatureSection = ({ feature }) => {
  const navigate = useNavigate();

  const navigateToCarDetail = (id) => {
    navigate(`/feature-work-details/${id}`);
  };

  return (
    <div className="bg-base-100 shadow-2xl overflow-hidden rounded-[16px]">
      <figure className="">
        <div className="">
          <div className="">
            <img src={feature?.img} alt="feature" className="rounded-none" />
          </div>
        </div>
      </figure>

      <div
        className="card-body items-center bg-secondary text-white p-4 cursor-pointer"
        onClick={() => navigateToCarDetail(feature?._id)}
      >
        <h2 className="card-title font-bold">{feature.category}</h2>
      </div>
    </div>
  );
};

export default FeatureSection;
