import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../Firebase/Firebase.init";

const UpdateProfileModal = ({ updating, setUpdating }) => {
  const [user] = useAuthState(auth);
  const [buyerAddress, setBuyerAddress] = useState("");
  const [phoneNubmer, setPhoneNumber] = useState("");
  //   console.log(booking);
  const toast = useToast();
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm();

  const onFormSubmit = async (data, e) => {
    e.preventDefault();
    const updateInfo = {
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      productName: updating?.category,
      productImg: updating?.img,
      orderTotal: updating?.price,
      billingInfo: data?.address,
      buyerPhone: data?.number,
    };

    try {
      const newUpdatedInfo = await axios.patch(
        "http://localhost:5000/api/user",
        updateInfo
      );
      console.log("newBooking: ", newUpdatedInfo);
      if (newUpdatedInfo.status === 201) {
        toast({
          title: "Successfully Updated.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "bottom",
        });
        setUpdating(null);
      } else {
        toast({
          title: "Something Went Wrong!",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom",
        });
        setUpdating(null);
      }
    } catch (error) {
      toast({
        title: "Something Went Wrong!",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      setUpdating(null);
    }
    // reset();
  };

  return (
    <>
      <input type="checkbox" id="update-profile" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="divider before:bg-secondary after:bg-secondary">
            <h2 className=" uppercase md:text-4xl text-xl text-secondary font-bold">
              Update Info
            </h2>
          </div>
          <form onSubmit={handleSubmit(onFormSubmit)} autoComplete="off">
            <div className="flex-1  flex flex-col">
              <div className="mb-8 ">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="md:flex-1 mt-2 mb:mt-0 ">
                    <label className="label font-bold">Your Name</label>
                    <input
                      className="input border-2 input-bordered w-full shadow-inner"
                      name="name"
                      value={user?.displayName}
                      readOnly
                      {...register("name", {
                        required: true,
                      })}
                    />
                    {errors.name && (
                      <span className="text-red-500">Name is required</span>
                    )}
                  </div>
                  <div className="md:flex-1 mt-2 mb:mt-0 ">
                    <label className="label font-bold">Your Email</label>
                    <input
                      className="input border-2 input-bordered w-full shadow-inner"
                      name="name"
                      value={user?.email}
                      readOnly
                      {...register("email", {
                        required: true,
                      })}
                    />
                    {errors.email && (
                      <span className="text-red-500">Email is required</span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="md:flex-1 mt-2 mb:mt-0 ">
                    <label className="label font-bold">Your Number</label>
                    <input
                      className="input border-2 input-bordered w-full shadow-inner"
                      placeholder="Your contact number"
                      name="number"
                      type="number"
                      minLength="11"
                      {...register("number", {
                        required: true,
                      })}
                    />
                    {errors.number && (
                      <span className="text-red-500">
                        Contact number is required
                      </span>
                    )}
                  </div>
                  <div className="md:flex-1 mt-2 mb:mt-0 ">
                    <label className="label font-bold">Your Profession</label>
                    <input
                      className="input border-2 input-bordered w-full shadow-inner"
                      name="occupation"
                      placeholder="Enter Your Profession"
                      {...register("occupation", {
                        required: true,
                      })}
                    />
                    {errors.occupation && (
                      <span className="text-red-500">
                        Minimum 10 character Review is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="md:flex-1 mt-2 mb:mt-0 ">
                    <label className="label font-bold">Your Address</label>
                    <input
                      className="input border-2 input-bordered w-full shadow-inner"
                      name="name"
                      placeholder="Your Address"
                      {...register("address", {
                        required: true,
                      })}
                    />
                    {errors.address && (
                      <span className="text-red-500">Address is required</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="divider before:bg-secondary after:bg-secondary">
              <label
                htmlFor="update-profile"
                className=" btn btn-sm  btn-secondary  text-white font-bold"
              >
                Cancel
              </label>
              <button
                type="submit"
                className=" btn btn-sm  btn-secondary  text-white font-bold"
              >
                Proceed
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfileModal;
