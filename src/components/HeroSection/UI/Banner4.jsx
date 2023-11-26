const Banner4 = () => {
  return (
    <section className=" mt-2 flex flex-col-reverse  min-[650px]:flex-row h-fit justify-center md:justify-between">
      <div className=" flex flex-col justify-center  gap-3 p-5 pl-[5%] min-[500px]:p-10 md:pl-[10%]">
        <div className=" text-3xl min-[650px]:text-6xl font-custom font-semibold ">
          <h1 className=" text-blue-950">WE ENSURING </h1>
          <h1 className=" text-green-600 ">PREMIUM SATISFACTION</h1>
        </div>

        <div className=" text-[1rem] min-[500px]:text-xl  text-blue-950 ">
          <p>With a dedication to unmatched excellence </p>
          <p className="">
            we consistently elevate standards and ensure premium satisfaction
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
          src="https://img.freepik.com/free-photo/residential-house-process-building_23-2147694705.jpg?w=1380&t=st=1701023266~exp=1701023866~hmac=39e42a56e02b4052272fd595c1e18bb52257ce34127ad5a9aa021badd665f59a"
        />
      </div>
    </section>
  );
};

export default Banner4;
