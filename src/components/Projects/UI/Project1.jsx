// importing icons
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

const Project1 = () => {
  return (
    <>
      <div className=" bg-gray-100 w-full px-5 pb-20 min-[650px]:pb-2 overflow-hidden">
        <div className=" min-[1400px]:w-[1400px] w-[90%] m-auto   font-custom font-medium">
          <div className=" pt-7  ">
            <h1 className=" border-l-8 border-yellow-300 p-5 text-3xl">
              Our Projects
            </h1>
          </div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper w-full md:p-28 mt-10 "
          >
            <div>
              <SwiperSlide>
                <img
                  className=" w-full h-full p-2"
                  src="images/expencify-dash-2.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className=" w-full h-full p-2 "
                  src="images/expencify-auth-11.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className=" w-full h-full p-2"
                  src="images/expencify-edit-3.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className=" w-full h-full p-2"
                  src="images/expencify-chart-4.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className=" w-full h-full p-2"
                  src="images/expencify-category-5.png"
                />
              </SwiperSlide>
            </div>

            {/* DETAILS ABOUT THE PROJECT  */}
            <div className="  mt-14 w-full md:px-10 xl:px-14 flex flex-col min-[650px]:flex-row gap-10">
              <div className=" flex flex-col gap-2 justify-center items-center ">
                <h1 className=" text-2xl font-bold font-custom">Expencify</h1>
                <h1>An WebApp To Manage Daily Expenses & Credits</h1>
                <div className=" flex justify-center items-center gap-2">
                  <h1 className=" px-3 py-1 border bg-white font-roboto border-yellow-300">
                    React
                  </h1>
                  <h1 className=" px-3 py-1 border bg-white font-roboto border-yellow-300">
                    Tailwind
                  </h1>
                  <h1 className=" px-3 py-1 border bg-white font-roboto border-yellow-300">
                    Firebase
                  </h1>
                  <h1 className=" px-3 py-1 border bg-white font-roboto border-yellow-300">
                    Redux
                  </h1>
                </div>
              </div>
              <div className=" font-roboto flex flex-col justify-start items-start">
                <h1 className=" font-bold text-xl">Features</h1>
                <p>
                  User Authentication by firebase, Remove, Edit, Search, Filter,
                  Dashboard & Category With Expenses, Charts, Download Expense
                  And Credit Report VIP Features
                </p>

                <div className=" flex justify-center items-center mt-2 gap-4">
                  <a href="https://github.com/Sourav0809/Expencify/tree/Expencify-2.0">
                    <FaGithub className=" text-2xl cursor-pointer" />
                  </a>
                  <a href="https://expencify.netlify.app/">
                    <FaLink className=" text-2xl cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Project1;
