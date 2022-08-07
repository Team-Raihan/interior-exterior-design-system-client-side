import React, { useEffect, useState } from "react";

const WeDo = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetch("/do.json")
      .then((res) => res.json())
      .then((data) => {
        const reversedData = data.reverse();
        setWorks(reversedData);
      });
  }, []);
  return (
    <div className="container mx-auto px-4">
      <div className="lg:min-h-fit">
        <div className="text-center  lg:my-16 md:my-8 my-4 block">
          <h2 className="text-secondary lg:text-5xl text-2xl font-bold mb-2 uppercase">
            What We Do
          </h2>
        </div>
        <div className="  bg-base-100 lg:md-16 md:mb-8 mb-4">
          <div className="text-center p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-10 md:gap-6 gap-4">
              {works?.slice(0, 6).map((work) => (
                <div
                  className="card bg-base-100 shadow-2xl overflow-hidden rounded-none p-0 m-0"
                  key={work._id}
                >
                  <figure className="w-full">
                    <img
                      src={work?.img}
                      alt="feature"
                      className="rounded-none w-full"
                    />
                  </figure>

                  <div className="card-body items-center p-4">
                    <h2 className="card-title font-bold">{work.category}</h2>
                    <p>{work.description}</p>
                    <button className="btn md:btn-md btn-sm  btn-secondary w-full">
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

export default WeDo;
