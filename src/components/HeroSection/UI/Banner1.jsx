import React from "react";

const Banner1 = () => {
  return (
    <section className=" mt-2 flex flex-col-reverse min-[650px]:flex-row h-fit justify-center md:justify-between">
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
          src="https://img.freepik.com/free-photo/building-construction-worker-site-with-architect_23-2149124266.jpg?w=1380&t=st=1701058152~exp=1701058752~hmac=de7f2fe6f8d512f981db6e68b961b070712426b3dbc766b2798e147cee7dc4e7"
        />
      </div>
    </section>
  );
};

export default Banner1;
