import React from "react";

const UpdateProfileModal = () => {
  return (
    <>
      <input type="checkbox" id="update-profile" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label for="update-profile" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfileModal;
