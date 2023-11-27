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
          src="https://img.freepik.com/free-photo/man-making-measurements-building_1122-1412.jpg?1&w=1380&t=st=1701058215~exp=1701058815~hmac=d28fbbafccd9db134508789d20ede0573fc15436af193e2d7131464ee0a47fdd"
        />
      </div>
    </section>
  );
};

export default Banner4;
