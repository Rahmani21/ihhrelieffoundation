import React from "react";
import { dotSlide, nextSlide, prevSlide } from "../Feature/Slices/SliderSlices";
import { useDispatch, useSelector } from "react-redux";
import { firstSlideData } from "../../assets/Data/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottomHeaderSlider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  console.log("sliderIndex", slideIndex);
  const dispatch = useDispatch();
  return (
    <>
      <div className="pt-16 text-xl pb-20">
        <div className="p-5">
          <div className="lg:flex hidden items-center justify-center gap-[4%] top-140 left-[45%]">
            {firstSlideData.map((dot, index) => {
              return (
                <div className=" mr-4" key={dot.id}>
                  <div
                    className={
                      index === slideIndex
                        ? "bg-red-300  p-2 rounded cursor-pointer"
                        : "  p-2 cursor-pointer"
                    }
                    onClick={() => dispatch(dotSlide(index))}
                  >
                    <div className="flex justify-center">
                      <img src={dot.icon} alt="" />
                    </div>
                  </div>
                  <p className="flex justify-center items-center">{dot.bHeading}</p>
                </div>
              );
            })}
          </div>

          <div
            id="mobile_view"
            className="flex items-center justify-center gap-[4%] mt-16  left-[45%] lg:hidden"
          >
            {firstSlideData.map((dot, index) => {
              return (
                <div className=" mr-4" key={dot.id}>
                  <div
                    className={
                      index === slideIndex
                        ? "bg-red-300 text-black  p-2 rounded-xl cursor-pointer"
                        : " bg-slate-500 p-2 rounded-xl cursor-pointer"
                    }
                    onClick={() => dispatch(dotSlide(index))}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomHeaderSlider;
