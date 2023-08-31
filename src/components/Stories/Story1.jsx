import React from "react";
import Slider from "react-slick";

const Story1 = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 468,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
      <h2> Responsive </h2>
      <Slider {...settings}>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
      </Slider>
    </div>
  );
};

export default Story1;
