import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./story.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Story = () => {
  return (
    <>
      <div className=" flex justify-between px-14 pt-8">
        <div className="text-2xl">Stories</div>
        <div className="text-2xl">
          See All <i className=" fa fa-solid fa-arrow"></i>{" "}
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        sl
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          468: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Navigation]}
        className=""
      >
        <SwiperSlide>
          <div id="slide-container " className=" mx-w-[1120px] mx-10 py-10 w-auto">
            <div id="slide-content" className="">
              <div id="card-wrapper" className="">
                <div
                  id="card"
                  className="rounded-xl w-[25rem] bg-black border "
                >
                  <div
                    id="image-content"
                    className=" flex flex-col items-center"
                  >
                    <span id="overly"></span>
                    <div id="card-image" className="relative h-60 w-full">
                      <img
                        src="https://ihh.org.tr/public/story/0/396/425609055996.jpg"
                        className=" h-full w-full  rounded-t-xl object-cover "
                        alt=""
                      />
                    </div>
                  </div>
                  <div id="card-content" className="py-8 px-10 text-white">
                    <p id="description" className=" text-3xl">
                      Do not leave us alone!
                    </p>
                    <button
                      id="button"
                      className="mt-20 px-10 py-2 bg-red-500 rounded-3xl"
                    >
                      Read The Story
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide-container " className="mx-w-[1120px] py-10 w-full">
            <div id="slide-content" className="my-0">
              <div id="card-wrapper" className="">
                <div
                  id="card"
                  className="rounded-xl w-[25rem] bg-black border "
                >
                  <div
                    id="image-content"
                    className=" flex flex-col items-center"
                  >
                    <span id="overly"></span>
                    <div id="card-image" className="relative h-60 w-full">
                      <img
                        src="https://ihh.org.tr/public/story/0/396/425609055996.jpg"
                        className=" h-full w-full  rounded-t-xl object-cover "
                        alt=""
                      />
                    </div>
                  </div>
                  <div id="card-content" className="py-8 px-10 text-white">
                    <p id="description" className=" text-3xl">
                      Do not leave us alone!
                    </p>
                    <button
                      id="button"
                      className="mt-20 px-10 py-2 bg-red-500 rounded-3xl"
                    >
                      Read The Story
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide-container " className="    mx-w-[1120px] py-10 w-full">
            <div id="slide-content" className="my-0">
              <div id="card-wrapper" className="">
                <div
                  id="card"
                  className="rounded-xl w-[25rem] bg-black border "
                >
                  <div
                    id="image-content"
                    className=" flex flex-col items-center"
                  >
                    <span id="overly"></span>
                    <div id="card-image" className="relative h-60 w-full">
                      <img
                        src="https://ihh.org.tr/public/story/0/396/425609055996.jpg"
                        className=" h-full w-full  rounded-t-xl object-cover "
                        alt=""
                      />
                    </div>
                  </div>
                  <div id="card-content" className="py-8 px-10 text-white">
                    <p id="description" className=" text-3xl">
                      Do not leave us alone!
                    </p>
                    <button
                      id="button"
                      className="mt-20 px-10 py-2 bg-red-500 rounded-3xl"
                    >
                      Read The Story
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide-container " className="mx-w-[1120px] py-10 w-full">
            <div id="slide-content" className="my-0">
              <div id="card-wrapper" className="">
                <div
                  id="card"
                  className="rounded-xl w-[25rem] bg-black border "
                >
                  <div
                    id="image-content"
                    className=" flex flex-col items-center"
                  >
                    <span id="overly"></span>
                    <div id="card-image" className="relative h-60 w-full">
                      <img
                        src="https://ihh.org.tr/public/story/0/396/425609055996.jpg"
                        className=" h-full w-full  rounded-t-xl object-cover "
                        alt=""
                      />
                    </div>
                  </div>
                  <div id="card-content" className="py-8 px-10 text-white">
                    <p id="description" className=" text-3xl">
                      Do not leave us alone!
                    </p>
                    <button
                      id="button"
                      className="mt-20 px-10 py-2 bg-red-500 rounded-3xl"
                    >
                      Read The Story
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Story;
