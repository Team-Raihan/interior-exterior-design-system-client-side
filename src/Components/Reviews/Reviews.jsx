import React, { useEffect, useState } from "react";
import "./Reviews.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "@tanstack/react-query";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  /*   const {
    data: reviews,
    isLoading,
    refetch,
    error,
  } = useQuery("review", () =>
    fetch("http://localhost:5000/api/review", {
      method: "GET",
    }).then((res) => res.json())
  );
  console.log(reviews);
  if (isLoading) {
    return <p>Loading........</p>;
  }
  if (error) {
    console.log(error);
  } */

  useEffect(() => {
    fetch("http://localhost:5000/api/review")
      .then((res) => res.json())
      .then((data) => {
        const reversedData = data.reverse();
        setReviews(reversedData);
        console.log(data);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div className="container mx-auto px-4 my-16">
      <div className="">
        <div className="text-center block">
          <h2 className="text-secondary lg:text-5xl text-2xl font-bold mb-2 uppercase">
            Happy Customers
          </h2>
        </div>
        <div className=" p-16">
          <Slider {...settings}>
            {reviews?.map((review) => (
              <div
                className="card bg-base-100 overflow-hidden rounded-xl relative"
                key={review._id}
              >
                <div className=" items-center py-16 border rounded-xl ma">
                  <div className="review-slider">
                    <figure className="gap-5">
                      <div className="avatar">
                        <div className="w-20 rounded-full ring ring-secondary ring-offset-base-100 shadow-xl">
                          <img
                            src={
                              review?.img
                                ? review?.img
                                : "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
                            }
                            alt="user"
                          />
                        </div>
                      </div>
                      <div>
                        <h2 className=" font-bold py-1 text-xl text-secondary">
                          {review.name}
                        </h2>
                        <strong className=" ">{review.occupation}</strong>
                      </div>
                    </figure>

                    <p className="text-center mt-8">{review.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
