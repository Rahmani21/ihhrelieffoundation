import React from "react";

import image_1 from "../../assets/Publications/image-1.png";
import image_2 from "../../assets/Publications/image-2.png";
import image_3 from "../../assets/Publications/image-3.png";
import image_4 from "../../assets/Publications/image-4.png";
import image_5 from "../../assets/Publications/image-5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Publications = () => {
  return (
    <div className=" bg-slate-200">
      <div
        id="our_publication_box"
        className="flex justify-between sm:px-10 md:px-10 lg:px-40 py-10"
      >
        <h3 className="text-xl">Our Publications</h3>
        <a className="">See All</a>
      </div>

      <div className="lg:flex hidden justify-center gap-4">
        <div className="group">
          <img
            src={image_1}
            alt="image 1"
            className="w-[15vw] h-[45vh] rounded-xl"
          />
          <div
            id="line"
            className="items-center mt-5 bg-gray-200 rounded-full h-1 dark:bg-gray-300 group-hover:bg-green-500"
          ></div>
          <h1 className="text-xl mt-7">Orphan Catalog</h1>
        </div>
        <div className="group">
          <img
            src={image_2}
            alt="image 1"
            className="w-[15vw] h-[45vh] rounded-xl"
          />
          <div
            id="line"
            className="items-center mt-5 bg-gray-200 rounded-full h-1 dark:bg-gray-300 group-hover:bg-green-500"
          ></div>
          <h1 className="text-xl mt-7 w-[15vw] h-[20vh]">
            Kahramanmaras Eathquake Response Report
          </h1>
        </div>
        <div className="group">
          <img
            src={image_3}
            alt="image 1"
            className="w-[15vw] h-[45vh] rounded-xl"
          />
          <div
            id="line"
            className="items-center mt-5 bg-gray-200 rounded-full h-1 dark:bg-gray-300 group-hover:bg-green-500"
          ></div>
          <h1 className="text-xl mt-7 w-[15vw] ">
            Syria Activity Report <br />( 20211 - 2022)
          </h1>
        </div>
        <div className="group">
          <img
            src={image_4}
            alt="image 1"
            className="w-[15vw] h-[45vh] rounded-xl"
          />
          <div
            id="line"
            className="items-center mt-5 bg-gray-200 rounded-full h-1 dark:bg-gray-300 group-hover:bg-green-500"
          ></div>
          <h1 className="text-xl mt-7 w-[15vw]">Orphan Manual</h1>
        </div>
        <div className="group">
          <img
            src={image_5}
            alt="image 1"
            className="w-[15vw] h-[45vh] rounded-xl"
          />
          <div
            id="line"
            className="items-center mt-5 bg-gray-200 rounded-full h-1 dark:bg-gray-300 group-hover:bg-green-500"
          ></div>
          <h1 className="text-xl mt-7 w-[15vw]">
            IHH Annual Activity Report 2021
          </h1>
        </div>
      </div>


      {/*Mobile View*/}
      <div className="lg:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          sl
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            468: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },

          }}
        modules={[ Navigation]}

        >
          <SwiperSlide>
            <div className=" group px-10">
              <img
                src={image_1}
                alt="image 1"
                className="sm:w-full md:w-full h-[45vh] rounded-xl"
              />
              <div
                id="line"
                className="items-center mt-5 bg-gray-200 rounded-full h-1 dark:bg-gray-300 group-hover:bg-green-500"
              ></div>
              <h1 className="text-xl mt-7 px-5 sm:w-full md:w-full">Orphan Catalog</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" group px-10">
              <img
                src={image_2}
                alt="image 1"
                className="sm:w-full md:w-full h-[45vh] rounded-xl"
              />
              <div
                id="line"
                className="items-center mt-5 bg-gray-200 rounded-full h-1 dark:bg-gray-300 group-hover:bg-green-500"
              ></div>
              <h1 className="text-xl px-5 mt-7 sm:w-full md:w-full h-[20vh]">
                Kahramanmaras Eathquake Response Report
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" group px-10">
              <img
                src={image_3}
                alt="image 1"
                className="sm:w-full md:w-full h-[45vh] rounded-xl "
              />
              <div
                className="items-center mt-5 bg-gray-200 rounded-full h-1 dark:bg-gray-300 group-hover:bg-green-500"
              ></div>
              <h1 className="text-xl px-5 mt-7 sm:w-full md:w-full ">
                Syria Activity Report <br />( 20211 - 2022)
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" group px-10">
              <img
                src={image_4}
                alt="image 4"
                className="sm:w-full md:w-full h-[45vh] rounded-xl"
              />
              <div
                id="line"
                className="items-center mt-5 bg-gray-200 rounded-full h-1 dark:bg-gray-300 group-hover:bg-green-500"
              ></div>
              <h1 className="text-xl px-5 mt-7 sm:w-full md:w-full ">
                Syria Activity Report <br />( 20211 - 2022)
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" group px-10">
          <img
            src={image_5}
            alt="image 1"
            className="sm:w-full md:w-full h-[45vh] rounded-xl"
          />
          <div
            id="line"
            className="items-center mt-5 bg-gray-200 rounded-full h-1 dark:bg-gray-300 group-hover:bg-green-500"
          ></div>
          <h1 className="text-xl px-5 mt-7 sm:w-full md:w-full">
            IHH Annual Activity Report 2021
          </h1>
        </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Publications;
