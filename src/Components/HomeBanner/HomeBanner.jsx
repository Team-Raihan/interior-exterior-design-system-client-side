import React, { useState } from "react";
import "./HomeBanner.css";
import homeBanner from "../../assets/banner/homeBanner.png";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useQuery } from "react-query";

const HomeBanner = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  /* const onChange = (event) => {
    setValue(event.target.value);
    event.preventDefault();
  };
  const getData = async () => {
    return await axios.get("http://localhost:5000/api/news");
  };

  const loadSearchData = async (id) => {
    return await axios.get(`http://localhost:5000/api/news/${id}`);
  };
  */
  const onSearch = () => {
    //here api to fetch the search result
    if (!searchValue) {
      return;
    } else {
      navigate(`/search/${searchValue}`);
      console.log(searchValue);
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 my-16">
        <div className="relative">
          <div className="search-input">
            <form className="form-control">
              <label className="label md:text-5xl  text-center uppercase font-bold text-secondary mx-auto">
                Modern Contemporary House Idea
              </label>
              <div className="input-group lg:input-group-lg md:input-group-md input-group-xm mt-4">
                <input
                  type="text"
                  // value={value}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                  placeholder="Search…"
                  className="input input-bordered lg:w-[600px] md:w-[400px]"
                />
                <button
                  type="button"
                  onClick={() => {
                    onSearch();
                  }}
                  className="btn btn-natural "
                >
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
            </form>
          </div>
          <div className="banner-wrapper">
            <img
              className="opacity-50 rounded-[16px]"
              src={homeBanner}
              alt="Home Banner"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
