import React, { useEffect, useState } from "react";
import "./Reviews.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
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
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="container mx-auto px-4">
      <div className="">
        <div className="text-center  my-16 block">
          <h2 className="text-secondary lg:text-5xl text-2xl font-bold mb-2 uppercase">
            Happy Customers
          </h2>
        </div>
        <div className="my-16">
          <Slider {...settings}>
            {reviews?.slice(0, 3).map((review) => (
              <div
                className="card bg-base-100 overflow-hidden rounded-xl relative"
                key={review._id}
              >
                <div className=" items-center p-16 border rounded-xl">
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
