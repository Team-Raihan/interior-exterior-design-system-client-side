import React, { useEffect, useState } from "react";
import FeatureSection from "../FeatureSection/FeatureSection";
import "./FeaturesSection.css";
import { useQuery } from "react-query";
import axios from "axios";
const FeaturesSection = () => {
  // const [features, setFeatures] = useState([]);

  const getData = async () => {
    return await axios.get("http://localhost:5000/api/featured-item");
  };
  const {
    data: features,
    isLoading,
    refetch,
    error,
  } = useQuery({ queryKey: ["storeAllFeatures", 1], queryFn: getData });

  if (isLoading) {
    return <p>Loading........</p>;
  }
  if (error) {
    console.log(error);
  }

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/featured-item")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const reversedData = data.reverse();
  //       setFeatures(reversedData);
  //     });
  // }, []);

  return (
    <div className="container mx-auto px-4 my-16">
      <div className="">
        <div className="text-center  mb-16 block">
          <h2 className="text-secondary lg:text-5xl text-2xl font-bold mb-2 uppercase">
            Featured Works
          </h2>
        </div>
        <div className="  bg-base-100 mb-16">
          <div className="text-center p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-10">
              {features?.data?.slice(0, 6).map((feature) => (
                <FeatureSection key={feature?._id} feature={feature} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 ">
          <button className="btn btn-secondary md:w-1/3 w-full mx-auto block text-white font-bold">
            View All Works
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
