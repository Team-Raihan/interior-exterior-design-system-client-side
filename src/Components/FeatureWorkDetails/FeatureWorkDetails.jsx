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
      <div className="mt-16">
        <img className="w-fit mx-auto" src={feature?.img} alt="" />
      </div>
      <div className="container mx-auto px-4 my-16">
        <div className="divider before:bg-secondary after:bg-secondary">
          <h2 className="lg:text-4xl text-xl font-bold text-secondary ">
            {feature?.category}
          </h2>
        </div>
        {/* <p>{feature.description}</p> */}
        <div className="py-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ea
            perferendis inventore debitis repudiandae. Perspiciatis, magni? Nisi
            architecto maxime, esse alias modi sed molestias! Voluptatum quo
            placeat in rem dicta iusto amet fugiat aspernatur delectus
            veritatis! Sunt saepe minus perspiciatis maxime omnis obcaecati
            repudiandae quam. Aut explicabo corporis quas distinctio deserunt.
            Numquam, maiores debitis. Harum voluptas eveniet vitae, error
            quibusdam nulla autem necessitatibus architecto neque corporis
            molestias nam facilis voluptatibus eligendi reiciendis, ipsam
            temporibus est deleniti? Quidem expedita quibusdam officia
            reprehenderit minima quisquam harum explicabo in, iure maxime culpa
            eaque ipsa eius dolore dolor. Corporis facilis provident veniam
            mollitia autem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureWorkDetails;