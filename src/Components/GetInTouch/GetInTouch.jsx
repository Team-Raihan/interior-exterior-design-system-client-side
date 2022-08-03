import React from "react";
import { useRef } from "react";
// import emailjs from "@emailjs/browser";

const GetInTouch = () => {
  const form = useRef();

  /*   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_clmkxv9",
        "template_jcg3b4p",
        form.current,
        "dmROKhjJgKoFwMbYE"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  }; */

  return (
    <div className="container mx-auto px-4 mb-16">
      <div className="">
        <div className="text-center  lg:mb-16 my-5 block">
          <h2 className="text-secondary lg:text-5xl text-2xl font-bold mb-2 uppercase">
            Get In Touch
          </h2>
        </div>
        <div className="lg:p-10 p-5  w-full bg-base-100 shadow rounded-2xl">
          {/* <form ref={form} onSubmit={sendEmail}> */}
          <form>
            <div className="flex lg:flex-row flex-col  gap-5">
              <div className="form-control lg:mt-3 w-full">
                <label className="label">
                  <span className="label-text font-bold text-lg">
                    Name <span className="text-secondary">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control lg:mt-3 w-full">
                <label className="label">
                  <span className="label-text font-bold text-lg">
                    Email <span className="text-secondary">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="flex lg:flex-row flex-col  gap-5">
              <div className="form-control lg:mt-3 w-full">
                <label className="label">
                  <span className="label-text font-bold text-lg">
                    Subject <span className="text-secondary">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control lg:mt-3 w-full">
                <label className="label">
                  <span className="label-text font-bold text-lg">
                    Phone <span className="text-secondary">*</span>
                  </span>
                </label>
                <input
                  type="tel"
                  name="number"
                  placeholder="Your Contact Number"
                  className="input input-bordered w-full"
                  required
                  min="0"
                />
              </div>
            </div>
            <div className="form-control mt-3 w-full">
              <label className="label">
                <span className="label-text font-bold text-lg">
                  Phone <span className="text-secondary">*</span>
                </span>
              </label>
              <textarea
                type="text"
                name="message"
                placeholder="Message..."
                className="input input-bordered w-full lg:h-[180px] h-[90px] pt-3"
                required
              />
            </div>
            <div className="form-control  w-full">
              <div className="lg:mt-10 mt-6 text-center">
                <button
                  type="submit"
                  className="btn btn-secondary text-white font-bold px-10"
                >
                  GET IN TOUCH
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
