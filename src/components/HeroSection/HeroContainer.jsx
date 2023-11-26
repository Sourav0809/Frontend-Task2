/* -------------------------------------------------------------------------- */
/*                  USING SWIPER JS HERE TO MAKE THE CAROUSEL                 */
/* -------------------------------------------------------------------------- */
//importing banners

import Banner1 from "./UI/Banner1";
import Banner2 from "./UI/Banner2";
import Banner3 from "./UI/Banner3";
import Banner4 from "./UI/Banner4";

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
      id="hero"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <Banner1 />
      </SwiperSlide>
      <SwiperSlide>
        <Banner2 />
      </SwiperSlide>
      <SwiperSlide>
        <Banner3 />
      </SwiperSlide>
      <SwiperSlide>
        <Banner4 />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroContainer;
