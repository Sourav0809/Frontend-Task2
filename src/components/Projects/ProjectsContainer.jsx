/* -------------------------------------------------------------------------- */
/*              USING SWIPER JS HERE TO MAKE THE PROJECT CAROUSEL             */
/* -------------------------------------------------------------------------- */

//Importing Projects

import Project1 from "./UI/Project1";
import Project2 from "./UI/Project2";
import Project3 from "./UI/Project3";
import Project4 from "./UI/Project4";
// import Swiper core and required modules

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroContainer = () => {
  return (
    <Swiper
      id="projects"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}

      //   autoplay={{ delay: 3000 }}
      //   autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <Project1 />
      </SwiperSlide>
      <SwiperSlide>
        <Project2 />
      </SwiperSlide>
      <SwiperSlide>
        <Project3 />
      </SwiperSlide>
      <SwiperSlide>
        <Project4 />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroContainer;
