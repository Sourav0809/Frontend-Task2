/* -------------------------------------------------------------------------- */
/*                  USING SWIPER JS HERE TO MAKE THE CAROUSEL                 */
/* -------------------------------------------------------------------------- */

import Banner1 from "./UI/Banner1";
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
import Banner2 from "./UI/Banner2";
const HeroContainer = () => {
  return (
    <Swiper
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
        <Banner1 />
      </SwiperSlide>
      <SwiperSlide>
        <Banner1 />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroContainer;
