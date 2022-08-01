import React from "react";
import "./HomeBanner.css";
import homeBanner from "../../assets/banner/homeBanner.png";
const HomeBanner = () => {
  return (
    <div className="container mx-auto px-4 my-16">
      <div className="relative">
        <div className="search-input">
          <div className="form-control">
            <label className="label md:text-4xl text-2xl font-bold text-neutral mx-auto">
              Search Here
            </label>
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered lg:w-[600px] md:w-[400px]"
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="banner-wrapper">
          <img className="" src={homeBanner} alt="Home Banner" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
