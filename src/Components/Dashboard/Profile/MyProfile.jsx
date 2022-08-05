import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";
import UpdateProfileModal from "./UpdateProfileModal";
const MyProfile = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <>
      <div className="min-h-fit md:m-16 m-4">
        <div className="flex-1  flex flex-col">
          <div className=" p-6 rounded-2xl  shadow">
            <div className="divider before:bg-secondary after:bg-secondary">
              <h2 className=" uppercase md:text-4xl text-secondary font-bold mb-4">
                My Profile
              </h2>
            </div>
            <form autoComplete="off">
              <div className="my-12 ">
                <div className="flex lg:flex-row flex-col  items-center justify-center gap-10">
                  <div className="avatar">
                    <div className="lg:w-80 md:w-56 w-32 ring-2 ring-secondary ring-offset-base-100 ring-offset-2 rounded">
                      <img src={user?.photoURL} alt="user img" />
                    </div>
                  </div>
                  <div className="flex flex-col md:gap-4 gap-2 md:font-semibold md:text-xl">
                    <p>
                      <strong>Name: </strong> {user?.displayName}
                    </p>
                    <p>
                      <strong>Email: </strong> {user?.email}
                    </p>
                    <p>
                      <strong>Phone: </strong>{" "}
                      {user?.providerData[0].phoneNumber}
                    </p>
                    <p>
                      <strong>Profession: </strong> {user?.profession}
                    </p>
                    <p>
                      <strong>Address:</strong> {user?.address}
                    </p>
                  </div>
                </div>
              </div>
              <div className="divider before:bg-secondary after:bg-secondary">
                <label
                  htmlFor="update-profile"
                  className="btn modal-button btn-secondary md:px-10 text-white font-bold"
                >
                  Update Profile
                </label>
              </div>
            </form>
            <UpdateProfileModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
