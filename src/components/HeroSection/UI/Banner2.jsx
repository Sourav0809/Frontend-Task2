import React from "react";

const Banner2 = () => {
  return (
    <section className=" mt-2 flex flex-col-reverse  min-[650px]:flex-row h-fit justify-center md:justify-between shadow-cyan-600 shadow-lg">
      <div className=" flex flex-col justify-center  gap-3 p-5 pl-[5%] min-[500px]:p-10 md:pl-[10%]">
        <div className=" text-3xl min-[650px]:text-6xl font-custom font-semibold ">
          <h1 className=" text-blue-950">WE PROVIDE </h1>
          <h1 className=" text-green-600 ">BEST QUALITY</h1>
        </div>

        <div className=" text-[1rem] min-[500px]:text-xl  text-blue-950 ">
          <p>Build your dream property with great experince</p>
          <p className="">
            A completely stress-free project from its initial stages to a
            successful finish
          </p>
        </div>

        <div>
          <button
            className="
          border-none back bg-blue-950 text-white p-2 pl-5 pr-5 rounded-md text-lg"
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="flex justify-center w-full min-[650px]:w-1/2  items-center object-cover p-5">
        <img
          className="  md:w-[38vw] w-full object-cover"
          src="https://img.freepik.com/premium-photo/asian-two-business-man-construction-engineers-supervising-progress-construction-project-construction-site_61243-1493.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700784000&semt=sph"
        />
      </div>
    </section>
  );
};

export default Banner2;
