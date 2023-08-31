import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import image_1 from "../../assets/First Slide Images/image-1.png";
import image_2 from "../../assets/First Slide Images/image-2.png";
import image_3 from "../../assets/First Slide Images/image-3.png";
import image_4 from "../../assets/First Slide Images/image-4.png";
const images = [image_1, image_2, image_3, image_4];

const MultiCardSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image_1} alt="img" style={{ border: "3px solid" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_2} alt="img" style={{ border: "3px solid" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_3} alt="img" style={{ border: "3px solid" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_4} alt="img" style={{ border: "3px solid" }} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MultiCardSlider;
