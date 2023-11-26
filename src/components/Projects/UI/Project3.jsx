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

const Project3 = () => {
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
                <img className=" w-full h-full p-2" src="images/res-1.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img className=" w-full h-full p-2" src="images/res-2.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img className=" w-full h-full p-2" src="images/res-3.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img className=" w-full h-full p-2" src="images/res-5.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img className=" w-full h-full p-2" src="images/res-4.png" />
              </SwiperSlide>
            </div>

            {/* DETAILS ABOUT THE PROJECT  */}
            <div className="  mt-14 w-full md:px-10 xl:px-14 flex flex-col min-[650px]:flex-row gap-10">
              <div className=" flex flex-col gap-2 justify-center items-center ">
                <h1 className=" text-2xl font-bold font-custom">
                  Kolkata Local
                </h1>
                <h1>A Basic WebApp With Cart Functionality </h1>
                <div className=" flex justify-center items-center gap-2">
                  <h1 className=" px-3 py-1 border bg-white font-roboto border-yellow-300">
                    React
                  </h1>
                  <h1 className=" px-3 py-1 border bg-white font-roboto border-yellow-300">
                    Context
                  </h1>
                  <h1 className=" px-3 py-1 border bg-white font-roboto border-yellow-300">
                    SCSS
                  </h1>
                </div>
              </div>
              <div className=" font-roboto flex flex-col justify-start items-start">
                <h1 className=" font-bold text-xl">Features</h1>
                <p>
                  A basic restaurant type website with cart functionality, user
                  can add prodcut, remove product, can update the quantity,
                  remove the product from cart.
                </p>
                <div className=" flex justify-center items-center mt-2 gap-4">
                  <a href="https://github.com/Sourav0809/Food-Ordering-Website">
                    <FaGithub className=" text-2xl cursor-pointer" />
                  </a>
                  <a href="https://kolkatalocal.netlify.app/">
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

export default Project3;
