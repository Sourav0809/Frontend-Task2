import React from "react";
import Card from "../UI/Card";

const Contact = () => {
  return (
    <Card>
      <h1 className=" border-l-8 border-yellow-300 p-2  text-3xl">
        Contact Us
      </h1>
      <div className=" flex flex-col  min-[650px]:flex-row gap-8">
        {/* FOR IMAGE  */}

        <div className=" w-[90%] min-[650px]:w-[45%] mt-5 relative">
          <img
            src="https://img.freepik.com/free-photo/medium-shot-back-view-engineer-supervising-construction_23-2148233750.jpg?w=1380&t=st=1701023103~exp=1701023703~hmac=61d4a33c960c40df75475594a5ba8761da312ed9c713d1a14c7ea8a542e61654"
            className="w-full h-full relative z-10 rounded-md"
          />
          <div className="w-full h-full absolute bg-yellow-400  top-5 left-5 shadow-md rounded-md" />
        </div>

        {/* TEXT DIV HERE  */}

        <div className=" w-full min-[650px]:w-[55%] rounded-lg flex flex-col gap-2 md:gap-6 p-2 min-[650px]:px-10">
          <form className=" flex flex-col gap-2">
            <div>
              <label htmlFor="name" className=" text-xl px-1 font-medium">
                Name
              </label>
              <input
                className="w-full bg-blue-100 py-2 px-5 mt-1 rounded-md text-xl "
                type="text"
                placeholder="Enter Your Name ..."
              />
            </div>
            <div>
              <label htmlFor="name" className=" text-xl px-1 font-medium">
                Email
              </label>
              <input
                className="w-full bg-blue-100 py-2 px-5 mt-1 rounded-md text-xl"
                type="email"
                placeholder="Enter Your Email ..."
              />
            </div>
            <div>
              <label htmlFor="name" className=" text-xl px-1 font-medium">
                Phone
              </label>
              <input
                className="w-full bg-blue-100 py-2 px-5  mt-1 rounded-md text-xl "
                type="number"
                placeholder="Your Phone Number ..."
              />
            </div>
            <div>
              <label htmlFor="name" className=" text-xl px-1 font-medium">
                Subject
              </label>
              <textarea
                className="w-full h-32 bg-blue-100 py-2 px-5 mt-1 rounded-md text-xl resize-none "
                type="text"
                placeholder="Some Message Here ..."
              />
            </div>
          </form>

          <button className=" bg-yellow-300 px-4 py-2 w-fit rounded-md">
            Send Message
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Contact;
