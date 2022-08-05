import React, { useEffect, useState } from "react";
import "./FeatureWorkDetails.css";
import { useParams } from "react-router-dom";
import BookingModal from "./BookingModal";

const FeatureWorkDetails = () => {
  const [booking, setBooking] = useState(null);
  const { id } = useParams();
  const [feature, setFeature] = useState({});
  // console.log(feature);

  useEffect(() => {
    const url = `http://localhost:5000/api/featured-item/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setFeature(data));
  }, [id]);

  return (
    <div className="container mx-auto px-4">
      <div className=" lg:mt-16 mt-4">
        <img className="w-fit mx-auto" src={feature?.img} alt="" />
      </div>
      <div className=" my-16">
        <div className="divider before:bg-secondary after:bg-secondary">
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="lg:text-4xl text-xl font-bold text-secondary ">
              {feature?.category}
            </h2>
            <strong className="md:text-2xl">
              Remuneration: ${feature?.price ? feature?.price : "Negotiable"}
            </strong>
          </div>
        </div>
        {/* <p>{feature.description}</p> */}
        <div className="md:py-8 py-4 ">
          <p>{feature.description}</p>
        </div>
        <div className="divider before:bg-secondary after:bg-secondary">
          <label
            htmlFor="booking-modal"
            onClick={() => {
              setBooking(feature);
            }}
            className="btn modal-button btn-secondary md:w-1/3 px-10  text-white font-bold"
          >
            Book Now
          </label>
        </div>
      </div>
      {booking && <BookingModal booking={booking} setBooking={setBooking} />}
    </div>
  );
};

export default FeatureWorkDetails;
