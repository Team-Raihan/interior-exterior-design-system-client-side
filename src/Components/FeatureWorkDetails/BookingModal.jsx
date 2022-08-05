import React from "react";

const BookingModal = () => {
  return (
    <>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <div className="divider before:bg-secondary after:bg-secondary">
            <h2 className=" uppercase md:text-4xl text-secondary font-bold mb-4">
              Booking Info
            </h2>
          </div>
          <form autoComplete="off">
            <div className="my-12 ">
              <h1>hello modal</h1>
            </div>
            <div className="divider before:bg-secondary after:bg-secondary">
              <label
                for="booking-modal"
                class=" btn btn-sm  btn-secondary  text-white font-bold"
              >
                Yay!
              </label>
              <label
                for="update-profile"
                class=" btn btn-sm  btn-secondary  text-white font-bold"
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

export default BookingModal;
