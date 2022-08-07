import { useToast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const SupportModal = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm();

  const onFormSubmit = async (data, e) => {
    e.preventDefault();
    const supportLink = {
      supportLink: data?.supportLink,
    };

    try {
      const newSupport = await axios.post(
        "http://localhost:5000/api/support",
        supportLink
      );
      console.log("newSupportLink: ", newSupport);
      if (newSupport.status === 201) {
        toast({
          title: "Successfully Booked.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "bottom",
        });
        // setBooking(null);
      } else {
        toast({
          title: "Something Went Wrong!",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom",
        });
        // setBooking(null);
      }
    } catch (error) {
      toast({
        title: "Something Went Wrong!",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      //   setBooking(null);
    }
    // reset();
  };

  return (
    <>
      <input type="checkbox" id="support-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="divider before:bg-secondary after:bg-secondary ">
            <h2 className=" uppercase md:text-4xl text-xl text-secondary font-bold">
              Live Support
            </h2>
          </div>
          <form onSubmit={handleSubmit(onFormSubmit)} autoComplete="off">
            <div className="flex-1  flex flex-col ">
              <div className="flex flex-col lg:flex-row lg:first-letter:gap-4">
                <div className="md:flex-1 my-4 mb:mt-0 ">
                  <label className="label font-bold">Provide A Meet Link</label>
                  <input
                    className="input border-2 input-bordered w-full shadow-inner"
                    name="supportLink"
                    placeholder="Enter Your Meet Link"
                    {...register("supportLink", {
                      required: true,
                    })}
                  />
                  {errors.supportLink && (
                    <span className="text-red-500">
                      Support Link is required.
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="divider before:bg-secondary after:bg-secondary">
              <label
                htmlFor="support-modal"
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

export default SupportModal;
