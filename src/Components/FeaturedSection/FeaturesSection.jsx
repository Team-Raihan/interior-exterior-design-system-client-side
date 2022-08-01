import React, { useEffect, useState } from "react";
import FeatureSection from "../FeatureSection/FeatureSection";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const reversedData = data.reverse();
        setFeatures(reversedData);
        console.log(data);
      });
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="lg:min-h-[85vh]">
        <div className="text-center  my-16 block">
          <h2 className="text-secondary lg:text-5xl text-2xl font-bold mb-2 uppercase">
            Our Feature Items
          </h2>
        </div>
        <div className="hero  bg-base-100 mb-16">
          <div className="hero-content text-center p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features?.slice(0, 6).map((feature) => (
                <FeatureSection key={feature?._id} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
