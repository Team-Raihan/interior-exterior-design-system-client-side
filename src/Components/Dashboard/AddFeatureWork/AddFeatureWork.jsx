import axios from "axios";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Button, useToast } from "@chakra-ui/react";

import { secondary } from "daisyui/src/colors";

import auth from "../../../Firebase/Firebase.init";

const AddFeatureWork = () => {
  const [user] = useAuthState(auth);
  const [postLoading, setPostLoading] = useState(false);
  const [pic, setPic] = useState();
  const toast = useToast();
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm();

  const postPicture = async (pics) => {
    setPostLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select an Image",
        description:
          "You need to select a valid image for creating your account.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return setPostLoading(false);
    }
    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/jpg"
    ) {
      try {
        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", "chat-app");
        data.append("cloud_name", "nurul");
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/nurulislam/image/upload",
          {
            method: "POST",
            body: data,
          }
        ).catch((error) => {
          if (error.response) {
            toast({
              title: "Failed to upload! Please try again.",
              status: "error",
              duration: 5000,
              isClosable: true,
              position: "bottom",
            });
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            return setPostLoading(false);
          } else if (error.request) {
            toast({
              title: "Failed to upload! Please try again.",
              status: "error",
              duration: 5000,
              isClosable: true,
              position: "bottom",
            });
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
            return setPostLoading(false);
          } else {
            toast({
              title: "Failed to upload! Please try again.",
              status: "error",
              duration: 5000,
              isClosable: true,
              position: "bottom",
            });
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
            setPostLoading(false);
          }
        });
        const getData = await response?.json();
        setPic(await getData?.url?.toString());
        return setPostLoading(false);
      } catch (error) {
        console.log(error);
        toast({
          title: "Failed to upload! Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        return setPostLoading(false);
      }
    } else {
      toast({
        title: "Please Select an Valid Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPostLoading(false);
      return;
    }
  };

  const onFormSubmit = async (data) => {
    if (!data.name || !data.description || !pic) {
      return toast({
        title: "Fill out all field!",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    }
    const product = {
      category: data.name,
      price: data.price,
      img: pic,
      description: data.description,
      // admin info
      adminName: user.displayName,
      adminEmail: user.email,
    };
    // send to your database

    try {
      const newItem = await axios.post(
        "http://localhost:5000/api/featured-item",
        product,
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log(newItem);
      if (newItem.status === 201) {
        toast({
          title: "New Item Added",
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
      <div className=" my-5 px-4  lg:px-12 text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto">
        <div className="flex-1 md:p-0 lg:pt-8 lg:pb-8  mx-auto flex flex-col">
          <section className="bg-slate-100 p-4 shadow">
            <div className="md:flex">
              <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6">
                Add a new Product
              </h2>
            </div>
            <form onSubmit={handleSubmit(onFormSubmit)} autoComplete="off">
              <div className="md:flex mb-8">
                <div className="md:w-1/3">
                  <legend className="uppercase tracking-wide text-sm">
                    Product Info
                  </legend>
                  <p className="text-xs font-light text-red">
                    All input field is **required**
                  </p>
                </div>
                <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                  <div className="md:flex mb-4">
                    <div className="md:flex-1 md:pr-3 mb-4 md:mb-0">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Product Name
                      </label>

                      <input
                        className="w-full shadow-inner p-4 border-0"
                        type="text"
                        name="name"
                        placeholder="Your product name"
                        {...register("name", {
                          required: true,
                        })}
                      />
                      {errors.name && (
                        <span className="text-red-500">
                          Product Name is required
                        </span>
                      )}
                    </div>
                    <div className="md:flex-1 md:pr-3">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Product Price
                      </label>
                      <input
                        className="w-full shadow-inner p-4 border-0"
                        type="number"
                        name="price"
                        placeholder="000"
                        {...register("price", {
                          required: true,
                        })}
                      />
                      {errors.price && (
                        <span className="text-red-500">
                          Price value is required
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="md:flex mb-4">
                    <div className="md:flex-1 md:pr-3">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Product Image
                        <span className="text-xs lowercase text-gray-600">
                          {" "}
                          (good quality*)
                        </span>
                      </label>
                      {/* <Input
            type="file"
            p={1.5}
            accept="image/*"
            onChange={(e) => postPicture(e.target.files[0])}
          /> */}
                      <input
                        className="w-full bg-white shadow-inner p-4 border-0"
                        type="file"
                        name="img"
                        accept="image/*"
                        onChange={(e) => postPicture(e.target.files[0])}
                      />
                    </div>
                  </div>
                  <div className="md:flex-1 mt-2 mb:mt-0">
                    <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                      Product Description
                    </label>
                    <textarea
                      className="w-full shadow-inner p-4 border-0"
                      placeholder="Enter Product Description here............."
                      rows="6"
                      name="description"
                      {...register("description", {
                        minLength: 50,
                        required: true,
                      })}
                    ></textarea>
                    {errors.description && (
                      <span className="text-red-500">
                        Minimum 50 chracter Description is required
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="md:flex mb-8">
                <div className="md:w-1/3">
                  <legend className="uppercase tracking-wide text-sm">
                    Admin Information
                  </legend>
                  <p className="text-xs font-light text-red">
                    Who is adding new products?
                  </p>
                </div>
                <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-xs font-bold">
                      Admin Name
                    </label>
                    <input
                      className="w-full shadow-inner bg-gray-300 p-4 border-0"
                      type="text"
                      name="adminName"
                      disabled
                      readOnly
                      value={user.displayName}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                      Admin Email
                    </label>
                    <input
                      readOnly
                      disabled
                      className="w-full shadow-inner bg-gray-300 p-4 border-0"
                      type="email"
                      name="adminEmail"
                      value={user.email}
                    />
                  </div>
                </div>
              </div>

              <div className="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream-dark">
                <div className="md:flex-1 px-3 text-center md:text-right">
                  <Button
                    type="submit"
                    backgroundColor={secondary}
                    color="white"
                    style={{ marginTop: 15 }}
                    //   onClick={submitSignUpHandler}
                    isLoading={postLoading}
                    _hover={{
                      backgroundColor: "#021431",
                    }}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default AddFeatureWork;