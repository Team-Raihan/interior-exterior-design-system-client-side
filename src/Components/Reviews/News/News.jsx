import React, { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        const reversedData = data.reverse();
        setNews(reversedData);
        console.log(data);
      });
  }, []);
  return (
    <div className="container mx-auto px-4">
      <div className="lg:min-h-[85vh]">
        <div className="text-center  my-16 block">
          <h2 className="text-secondary lg:text-5xl text-2xl font-bold mb-2 uppercase">
            Company News
          </h2>
        </div>
        <div className="  bg-base-100 mb-16">
          <div className="text-center p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
              {news?.slice(0, 3).map((report) => (
                <div
                  className="card bg-base-100 shadow-2xl overflow-hidden rounded-none p-0 m-0"
                  key={report._id}
                >
                  <figure className="w-full">
                    <img
                      src={report?.img}
                      alt="feature"
                      className="rounded-none w-full"
                    />
                  </figure>

                  <div className="card-body items-center p-4">
                    <h2 className="card-title font-bold">{report.title}</h2>
                    <strong className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {report.date}
                    </strong>
                    <p>{report.news}</p>
                    <button className="btn btn-secondary w-full">
                      Read More
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

export default News;