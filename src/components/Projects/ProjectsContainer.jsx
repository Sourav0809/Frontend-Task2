/* -------------------------------------------------------------------------- */
/*              USING SWIPER JS HERE TO MAKE THE PROJECT CAROUSEL             */
/* -------------------------------------------------------------------------- */

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

import Projects from "./Projects";
const HeroContainer = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}

      //   autoplay={{ delay: 3000 }}
      //   autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <Projects />
      </SwiperSlide>
      <SwiperSlide>
        <Projects />
      </SwiperSlide>
      <SwiperSlide>
        <Projects />
      </SwiperSlide>
      <SwiperSlide>
        <Projects />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroContainer;
