import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReview = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm();

  const onFormSubmit = async (data) => {
    const review = {
      name: data.name,
      review: data.review,
      rate: data.rate,
    };

    axios.post("https://5000/api/reviews", review).then((res) => {
      const data = res.data;
      if (data.success) {
        toast.success("New Review Added", {
          toastId: "addReview",
        });
      } else {
        toast.error("Failed to add this review!", {
          toastId: "failedToReview",
        });
      }
    });

    reset();
  };

  return (
    <>
      <div className="min-h-fit m-16">
        <div className="flex-1  flex flex-col">
          <section className=" p-6 rounded-2xl  shadow">
            <div className="divider before:bg-secondary after:bg-secondary">
              <h2 className="md:w-2/3 uppercase md:text-4xl text-secondary font-bold mb-4">
                Add A New Review
              </h2>
            </div>
            <form onSubmit={handleSubmit(onFormSubmit)} autoComplete="off">
              <div className="mb-8 ">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="md:flex-1 mt-2 mb:mt-0 ">
                    <label className="label font-bold">Your Name</label>
                    <input
                      className="input border-2 input-bordered w-full shadow-inner"
                      placeholder="Enter the name"
                      name="name"
                      {...register("name", {
                        required: true,
                      })}
                    ></input>
                    {errors.name && (
                      <span className="text-red-500">
                        Minimum 10 character Review is required
                      </span>
                    )}
                  </div>
                  <div className="md:flex-1 mt-2 mb:mt-0 ">
                    <label className="label font-bold">Your Profession</label>
                    <input
                      className="input border-2 input-bordered w-full shadow-inner"
                      placeholder="Enter the name"
                      name="name"
                      {...register("name", {
                        required: true,
                      })}
                    ></input>
                    {errors.name && (
                      <span className="text-red-500">
                        Minimum 10 character Review is required
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col justify-end">
                    <label className="label font-bold">Review Rating</label>

                    <select
                      name="rate"
                      {...register("rate", {
                        required: true,
                      })}
                      className="select  border-2 input-bordered w-full "
                    >
                      <option>5</option>
                      <option>4</option>
                      <option>3</option>
                      <option>2</option>
                      <option>1</option>
                    </select>
                  </div>
                </div>
                <div className="md:flex-1 mt-2 mb:mt-0 ">
                  <label className="label font-bold">New Review</label>
                  <textarea
                    className="input  border-2 input-bordered w-full shadow-inner pt-3"
                    placeholder="Enter your review here..."
                    rows="6"
                    name="review"
                    {...register("review", {
                      minLength: 10,
                      required: true,
                    })}
                  ></textarea>
                  {errors.review && (
                    <span className="text-red-500">
                      Minimum 10 character review is required
                    </span>
                  )}
                </div>
              </div>

              <div className="divider before:bg-secondary after:bg-secondary">
                <button
                  type="submit"
                  className="btn btn-secondary md:px-10 text-white font-bold"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default AddReview;
