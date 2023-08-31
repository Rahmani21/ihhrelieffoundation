import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

import image_1 from "../../assets/First Slide Images/image-1.png";
import image_2 from "../../assets/First Slide Images/image-2.png";
import image_3 from "../../assets/First Slide Images/image-3.png";
import image_4 from "../../assets/First Slide Images/image-4.png";

const DynamicBackgroundImage = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image_1} alt="img" className=" h-[100vh] " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_2} alt="img" className=" h-[100vh] " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_3} alt="img" className=" h-[100vh] " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_4} alt="img" className=" h-[100vh] " />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DynamicBackgroundImage;
