import React from "react";
import Card from "../UI/Card";
const About = () => {
  return (
    <Card>
      <h1 className=" border-l-8 border-yellow-300 p-2  text-3xl"> About Us</h1>
      <div className=" flex flex-col  min-[650px]:flex-row gap-8">
        {/* FOR IMAGE  */}

        <div className=" w-[90%] min-[650px]:w-[45%] mt-5 relative">
          <img
            src="https://img.freepik.com/free-photo/workers-examining-work_1122-970.jpg?1&w=1380&t=st=1700835794~exp=1700836394~hmac=cd56033b1d6500d6af887afc219dd872a728fb3f85a0d4481484e5f6637ef112"
            className="w-full h-full relative z-10 rounded-md"
          />
          <div className="w-full h-full absolute bg-yellow-400  top-5 left-5 shadow-md rounded-md" />
        </div>

        {/* TEXT DIV HERE  */}

        <div className=" w-full min-[650px]:w-[55%]  flex flex-col gap-2 md:gap-6 justify-center p-2 md:p-14">
          <div className=" text-3xl md:text-5xl font-custom">
            <h1>We Will Provide You The Best Work Which You Dreamt For ! </h1>
          </div>
          <div>
            <p className=" text-base md:text-xl font-roboto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus nihil autem eveniet? Pariatur, velit culpa. Numquam
              dolore voluptates totam vero? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Neque, esse.
            </p>
          </div>

          <button className=" bg-yellow-300 px-4 py-2 w-[40%] md:w-[30%]  rounded-md">
            Read More
          </button>
        </div>
      </div>

      <div className=" mt-12 flex flex-col justify-center items-center min-[650px]:flex-row w-full  font-custom gap-2 min-[650px]:gap-16 ">
        <div className=" grid grid-cols-2 gap-4 min-[650px]:gap-20  ">
          <div className=" py-5 px-7 min-[650px]:px-10 max-xl:px-16 text-center  rounded-md bg-gray-100 flex flex-col justify-center items-center ">
            <h1 className=" text-4xl font-bold">10+</h1>
            <p>Years Of Experience</p>
          </div>

          <div className=" py-5 px-7 min-[650px]:px-10 max-xl:px-20 text-center rounded-md bg-gray-100 flex flex-col justify-center items-center ">
            <h1 className=" text-4xl font-bold">1500+</h1>
            <p>Project Completed</p>
          </div>
        </div>

        <div className=" grid grid-cols-2 gap-4 min-[650px]:gap-16">
          <div className=" py-5 px-7 min-[650px]:px-10 max-xl:px-20 text-center rounded-md bg-gray-100 flex flex-col justify-center items-center ">
            <h1 className=" text-4xl font-bold">750+</h1>
            <p>Satisfied Clients</p>
          </div>
          <div className=" py-5 px-12 min-[650px]:px-10 max-xl:px-20 text-center rounded-md bg-gray-100 flex flex-col justify-center items-center ">
            <h1 className=" text-4xl font-bold">450+</h1>
            <p>Active Workers</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default About;
