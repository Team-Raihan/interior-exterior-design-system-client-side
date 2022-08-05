import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../Firebase/Firebase.init";

const BookingModal = ({ booking, setBooking }) => {
  const [user] = useAuthState(auth);
  //   console.log(booking);
  const toast = useToast();
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm();

  const onFormSubmit = async (data) => {
    const bookingInfo = {
      img: data?.img,
      name: user?.name,
      review: data?.review,
      rate: data?.rate,
      occupation: data?.occupation,
    };

    try {
      const newBooking = await axios.post(
        "http://localhost:5000/api/booking",
        bookingInfo
      );

      if (newBooking.status === 201) {
        toast({
          title: "Thanks For Your Review.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "bottom",
        });
      } else {
        toast({
          title: "Something Went Wrong!",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom",
        });
      }
    } catch (error) {
      toast({
        title: "Something Went Wrong!",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    }
    reset();
  };

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
            <div className="flex-1  flex flex-col">
              <form onSubmit={handleSubmit(onFormSubmit)} autoComplete="off">
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
                        <span className="text-red-500">
                          Minimum 10 character Review is required
                        </span>
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
                      {errors.name && (
                        <span className="text-red-500">
                          Minimum 10 character Review is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="md:flex-1 mt-2 mb:mt-0 ">
                      <label className="label font-bold">Product Name</label>
                      <input
                        className="input border-2 input-bordered w-full shadow-inner"
                        name="name"
                        value={booking?.category}
                        readOnly
                        {...register("category", {
                          required: true,
                        })}
                      />
                      {errors.name && (
                        <span className="text-red-500">
                          Minimum 10 character Review is required
                        </span>
                      )}
                    </div>
                    <div className="md:flex-1 mt-2 mb:mt-0 ">
                      <label className="label font-bold">Product Price</label>
                      <input
                        className="input border-2 input-bordered w-full shadow-inner"
                        value={booking?.price}
                        name="price"
                        readOnly
                        {...register("price", {
                          required: true,
                        })}
                      />
                      {errors.name && (
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
                      {errors.name && (
                        <span className="text-red-500">
                          Minimum 10 character Review is required
                        </span>
                      )}
                    </div>
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
                      {errors.name && (
                        <span className="text-red-500">
                          Minimum 10 character Review is required
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="divider before:bg-secondary after:bg-secondary">
              <label
                for="booking-modal"
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
