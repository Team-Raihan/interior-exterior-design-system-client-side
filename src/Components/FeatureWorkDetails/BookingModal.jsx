import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";

const BookingModal = ({ booking, setBooking }) => {
  const [user] = useAuthState(auth);
  const toast = useToast();
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const onFormSubmit = async () => {
    if (!address || !phone) {
      toast({
        title: "Please Fill Out All Input Field",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    } else {
      const bookingInfo = {
        productName: booking?.category,
        productImg: booking?.img,
        orderTotal: booking?.price,
        buyerName: user?.displayName,
        buyerEmail: user?.email,
        buyerPhone: phone,
        billingInfo: address,
      };
      try {
        const newBooking = await axios.post(
          "http://localhost:5000/api/order",
          bookingInfo
        );
        console.log( newBooking);
        if (newBooking.status === 201) {
          toast({
            title: "Thanks For Your Review.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "bottom",
          });
          setBooking(null)
        } else {
          toast({
            title: "Something Went Wrong!",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "bottom",
          });
          setBooking(null)

        }
      } catch (error) {
        console.log(error)
        toast({
          title: "Something Went Wrong!",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom",
        });
        setBooking(null)
      }
    }
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="divider before:bg-secondary after:bg-secondary">
            <h2 className=" uppercase md:text-4xl text-xl text-secondary font-bold">
              Booking Info
            </h2>
          </div>

          <div className="flex-1  flex flex-col">
            <form>
              <div className="mb-8 ">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="md:flex-1 mt-2 mb:mt-0 ">
                    <label className="label font-bold">Your Name</label>
                    <input
                      className="input border-2 input-bordered w-full shadow-inner"
                      name="name"
                      value={user?.displayName}
                      readOnly
                    />
                  </div>
                  <div className="md:flex-1 mt-2 mb:mt-0 ">
                    <label className="label font-bold">Your Email</label>
                    <input
                      className="input border-2 input-bordered w-full shadow-inner"
                      name="email"
                      value={user?.email}
                      readOnly
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="md:flex-1 mt-2 mb:mt-0 ">
                    <label className="label font-bold">Product Name</label>
                    <input
                      className="input border-2 input-bordered w-full shadow-inner"
                      name="category"
                      value={booking?.category}
                      readOnly
                    />
                  </div>
                  <div className="md:flex-1 mt-2 mb:mt-0 ">
                    <label className="label font-bold">Product Price</label>
                    <input
                      className="input border-2 input-bordered w-full shadow-inner"
                      value={booking?.price}
                      name="price"
                      readOnly
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="md:flex-1 mt-2 mb:mt-0 ">
                    <label className="label font-bold">Your Address</label>
                    <input
                      className="input border-2 input-bordered w-full shadow-inner"
                      name="address"
                      placeholder="Your Address"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="md:flex-1 mt-2 mb:mt-0 ">
                    <label className="label font-bold">Your Number</label>
                    <input
                      className="input border-2 input-bordered w-full shadow-inner"
                      placeholder="Your contact number"
                      name="number"
                      type="number"
                      minLength="11"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="divider before:bg-secondary after:bg-secondary">
            <label
              htmlFor="booking-modal"
              className=" btn btn-sm  btn-secondary  text-white font-bold"
            >
              Cancel
            </label>
            <button
              onClick={onFormSubmit}
              className=" btn btn-sm  btn-secondary  text-white font-bold"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
