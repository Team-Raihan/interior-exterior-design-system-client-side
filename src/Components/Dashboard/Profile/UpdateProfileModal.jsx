import React from "react";

const UpdateProfileModal = () => {
  return (
    <>
      <input type="checkbox" id="update-profile" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="divider before:bg-secondary after:bg-secondary">
            <h2 className=" uppercase md:text-4xl text-secondary font-bold mb-4">
              My Profile
            </h2>
          </div>
          <form autoComplete="off">
            <div className="my-12 ">
              <h1>hello modal</h1>
            </div>
            <div className="divider before:bg-secondary after:bg-secondary">
              <label
                htmlFor="update-profile"
                className=" btn btn-sm  btn-secondary  text-white font-bold"
              >
                Yay!
              </label>
              <label
              htmlFor="update-profile"
                className=" btn btn-sm  btn-secondary  text-white font-bold"
              >
                Yay!
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfileModal;
