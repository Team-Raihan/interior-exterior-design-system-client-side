import React from "react";

const LiveSupportAdmin = () => {
  return (
    <>
      <div className="flex px-4 justify-center items-center h-screen">
        <div className=" max-w-[500px]  bg-secondary p-10 rounded">
          <div>
            <h1 className="text-white text-xl font-semibold text-center my-10">Live Support not started yet</h1>
          </div>
          <div className="flex justify-center">
            <button className="btn text-white btn-primary">
              Start Support
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveSupportAdmin;
