import React from "react";
import SupportModal from "../SupportModal/SupportModal";

const LiveSupportAdmin = () => {
  return (
    <>
      <div className="flex px-4 justify-center items-center h-screen">
        <div className=" max-w-[500px]  bg-secondary p-10 rounded-xl shadow">
          <div>
            <h1 className="text-white text-xl font-semibold text-center my-10">
              Live Support not started yet
            </h1>
          </div>
          <div className="flex justify-center">
            <label
              htmlFor="support-modal"
              onClick={() => {}}
              className="btn md:btn-md btn-sm  modal-button btn-primary md:px-10 text-white font-bold"
            >
              Support Start
            </label>
          </div>
        </div>
        <SupportModal />
      </div>
    </>
  );
};

export default LiveSupportAdmin;
