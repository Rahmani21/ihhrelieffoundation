import React from "react";
const Stories = () => {
  return (
    <div className="flex items-center justify-center min-h-[100vh] ">
      {/* <div className="flex justify-between pb-10 text-2xl">
        <div>
          <h3>Stories</h3>
        </div>
        <div>
          <a href="">
            See all <i className="fa fa-"></i>
          </a>
        </div>
  </div>*/}
      <div
        id="slide-container swiper"
        className=" bg-red-500 mx-w-[1120px] px-20 py-10 w-full"
      >
        <div id="slide-content" className="my-0">
          <div id="card-wrapper" className="swiper-wrapper">
            <div id="card" className="rounded-xl w-[25rem] bg-black border swiper-slide">
              <div id="image-content" className=" flex flex-col items-center">
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
                  View More
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div
        id="slide-container swiper"
        className=" bg-red-500 mx-w-[1120px] px-20 py-10 w-full"
      >
        <div id="slide-content" className="my-0">
          <div id="card-wrapper" className="swiper-wrapper">
            <div id="card" className="rounded-xl w-[25rem] bg-black border swiper-slide">
              <div id="image-content" className=" flex flex-col items-center">
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
                  View More
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div
        id="slide-container swiper"
        className=" bg-red-500 mx-w-[1120px] px-20 py-10 w-full"
      >
        <div id="slide-content" className="my-0">
          <div id="card-wrapper" className="swiper-wrapper">
            <div id="card" className="rounded-xl w-[25rem] bg-black border swiper-slide">
              <div id="image-content" className=" flex flex-col items-center">
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
                  View More
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div
        id="slide-container swiper"
        className=" bg-red-500 mx-w-[1120px] px-20 py-10 w-full"
      >
        <div id="slide-content" className="my-0">
          <div id="card-wrapper" className="swiper-wrapper">
            <div id="card" className="rounded-xl w-[25rem] bg-black border swiper-slide">
              <div id="image-content" className=" flex flex-col items-center">
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
                  View More
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
