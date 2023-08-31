import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const FundProject = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-green-500 uppercase pb-5 font-semibold">
          fund a project
        </h1>
        <h1 className="font-bold pb-10 text-2xl">
          Support, let it come to life!
        </h1>
      </div>

      <div id="car" className="lg:flex hidden justify-center gap-10">
        <div className=" bg-white shadow-xl border rounded-2xl w-[25vw] h-[70vh] card">
          <div className="card-header text-green-500 mt-5 font-bold px-10">
            Afghanistan
          </div>
          <div className="card-body">
            <h5 className="card-title font-bold text-xl px-10 hover:text-green-600">
              Make Living Easier for 50 People
            </h5>
            <p className="card-text  px-10 pt-5 pb-5 ">
              50 elderly and disabled people need wheelchairs
            </p>
            <div className="flex justify-between text-green-500  font-bold px-10 pb-8">
              <p>$26.288,78</p>
              <p>45,72%</p>
            </div>
            <div className="items-center mx-8 ml-4 w-[90%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
            <div className="text-green-500 px-10 py-5 font-bold ">
              1253 people supported this project
            </div>

            <div className="flex justify-center">
              <button className="bg-green-500 w-[90%] py-3 text-white rounded-xl  px-10">
                Support Project
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-white shadow-xl border rounded-2xl w-[25vw] h-[70vh] card">
          <div className="card-header text-green-500 mt-5 font-bold px-10">
            Afghanistan
          </div>
          <div className="card-body">
            <h5 className="card-title font-bold text-xl px-10 hover:text-green-600">
              Make Living Easier for 50 People
            </h5>
            <p className="card-text  px-10 pt-5 pb-5 ">
              50 elderly and disabled people need wheelchairs
            </p>
            <div className="flex justify-between text-green-500  font-bold px-10 pb-8">
              <p>$26.288,78</p>
              <p>45,72%</p>
            </div>
            <div className="items-center mx-8 ml-4 w-[90%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
            <div className="text-green-500 px-10 py-5 font-bold ">
              1253 people supported this project
            </div>

            <div className="flex justify-center">
              <button className="bg-green-500 w-[90%] py-3 text-white rounded-xl  px-10">
                Support Project
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-white shadow-xl border rounded-2xl w-[25vw] h-[70vh] card">
          <div className="card-header text-green-500 mt-5 font-bold px-10">
            Afghanistan
          </div>
          <div className="card-body">
            <h5 className="card-title font-bold text-xl px-10 hover:text-green-600">
              Make Living Easier for 50 People
            </h5>
            <p className="card-text  px-10 pt-5 pb-5 ">
              50 elderly and disabled people need wheelchairs
            </p>
            <div className="flex justify-between text-green-500  font-bold px-10 pb-8">
              <p>$26.288,78</p>
              <p>45,72%</p>
            </div>
            <div className="items-center mx-8 ml-4 w-[90%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
            <div className="text-green-500 px-10 py-5 font-bold ">
              1253 people supported this project
            </div>

            <div className="flex justify-center">
              <button className="bg-green-500 w-[90%] py-3 text-white rounded-xl  px-10">
                Support Project
              </button>
            </div>
          </div>
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
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
        >
          <SwiperSlide>
            <div className=" bg-white shadow-xl border rounded-2xl sm:w-96 md:w-96 mx-10 sm:h-[80vh] md:h-[80vh] h-[70vh] card">
              <div className="card-header text-green-500 mt-5 font-bold px-10">
                Afghanistan
              </div>
              <div className="card-body">
                <h5 className="card-title font-bold lg:text-xl px-10 hover:text-green-600">
                  Make Living Easier for 50 People
                </h5>
                <p className="card-text  px-10 pt-5 pb-5 ">
                  50 elderly and disabled people need wheelchairs
                </p>
                <div className="flex justify-between text-green-500  font-bold px-10 pb-8">
                  <p>$26.288,78</p>
                  <p>45,72%</p>
                </div>
                <div className="items-center mx-8 ml-4 w-[90%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <div className="text-green-500 px-10 py-5 font-bold ">
                  1253 people supported this project
                </div>

                <div className="flex justify-center">
                  <button className="bg-green-500 w-[90%] py-3 text-white rounded-xl  px-10">
                    Support Project
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white shadow-xl border rounded-2xl w-auto mx-10 h-[70vh]  card">
              <div className="card-header text-green-500 mt-5 font-bold px-10">
                Afghanistan
              </div>
              <div className="card-body">
                <h5 className="card-title font-bold text-xl px-10 hover:text-green-600">
                  Make Living Easier for 50 People
                </h5>
                <p className="card-text  px-10 pt-5 pb-5 ">
                  50 elderly and disabled people need wheelchairs
                </p>
                <div className="flex justify-between text-green-500  font-bold px-10 pb-8">
                  <p>$26.288,78</p>
                  <p>45,72%</p>
                </div>
                <div className="items-center mx-8 ml-4 w-[90%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <div className="text-green-500 px-10 py-5 font-bold ">
                  1253 people supported this project
                </div>

                <div className="flex justify-center">
                  <button className="bg-green-500 w-[90%] py-3 text-white rounded-xl  px-10">
                    Support Project
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white shadow-xl border rounded-2xl w-auto mx-10 h-[70vh]  card">
              <div className="card-header text-green-500 mt-5 font-bold px-10">
                Afghanistan
              </div>
              <div className="card-body">
                <h5 className="card-title font-bold text-xl px-10 hover:text-green-600">
                  Make Living Easier for 50 People
                </h5>
                <p className="card-text  px-10 pt-5 pb-5 ">
                  50 elderly and disabled people need wheelchairs
                </p>
                <div className="flex justify-between text-green-500  font-bold px-10 pb-8">
                  <p>$26.288,78</p>
                  <p>45,72%</p>
                </div>
                <div className="items-center mx-8 ml-4 w-[90%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <div className="text-green-500 px-10 py-5 font-bold ">
                  1253 people supported this project
                </div>

                <div className="flex justify-center">
                  <button className="bg-green-500 w-[90%] py-3 text-white rounded-xl  px-10">
                    Support Project
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" flex justify-center lg:py-10 sm:pt-10 md:pt-10">
        <button className="">
          View All Projects <faArrowsSplitUpAndLeft />
        </button>
      </div>
    </div>
  );
};

export default FundProject;
