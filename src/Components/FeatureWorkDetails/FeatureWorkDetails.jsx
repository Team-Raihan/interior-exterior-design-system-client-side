import React, { useEffect, useState } from "react";
import "./FeatureWorkDetails.css";
import { useParams } from "react-router-dom";

const FeatureWorkDetails = () => {
  const { id } = useParams();
  const [feature, setFeature] = useState({});
  console.log(feature);

  useEffect(() => {
    const url = `http://localhost:5000/api/featured-item/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setFeature(data));
  }, [id]);

  return (
    <div>
      <img src={feature.img} alt="" />
      <h2>Details Page</h2>
    </div>
  );
};

export default FeatureWorkDetails;
