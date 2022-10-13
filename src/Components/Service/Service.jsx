import React from "react";
import { useQuery } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingData from "../Loading/LoadingData";

const Service = () => {
  const navigate = useNavigate();

  const navigateToDetail = (id) => {
    navigate(`/service/${id}`);
  };

  const getData = async () => {
    return await axios.get(
      "https://tekno-interior-server.onrender.com/api/service"
    );
  };
  const {
    data: services,
    isLoading,
    // refetch,
    error,
  } = useQuery({ queryKey: ["storeAllService", 1], queryFn: getData });
  if (isLoading) {
    return (
      <div className="lg:my-16 md:my-8 my-4">
        <div className="text-center  lg:mb-16 md:mb-8 mb-4 block">
          <h2 className="text-secondary lg:text-5xl text-2xl font-bold mb-2 uppercase">
            Company News
          </h2>
          <LoadingData />
        </div>
      </div>
    );
  }
  if (error) {
    console.log(error);
  }
  return (
    <div className="container mx-auto lg:px-20 px-4">
      <div className="lg:min-h-fit">
        <div className="text-center  lg:my-16 md:my-8 my-4 block">
          <h2 className="text-secondary lg:text-5xl text-2xl font-bold mb-2 uppercase">
            What We Do
          </h2>
        </div>
        <div className="  bg-base-100 lg:md-16 md:mb-8 mb-4">
          <div className="text-center p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-10 md:gap-6 gap-4">
              {services?.slice(0, 6).map((service) => (
                <div
                  className="card bg-base-100 shadow-2xl overflow-hidden rounded-2xl p-0 m-0"
                  key={service._id}
                >
                  <figure className="w-full">
                    <img
                      src={service?.img}
                      alt="feature"
                      className="rounded-none w-full"
                    />
                  </figure>

                  <div className="card-body items-center p-4">
                    <h2 className="card-title font-bold">{service.category}</h2>
                    <p>{service.description}</p>
                    <button
                      className="btn md:btn-md btn-sm  btn-secondary w-full"
                      onClick={() => navigateToDetail(service?._id)}
                    >
                      service detail
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
