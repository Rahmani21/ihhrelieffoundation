import React from "react";
import { nextSlide, prevSlide, dotSlide } from "../Feature/Slices/SliderSlices";
import { useDispatch, useSelector } from "react-redux";
import { firstSlideData } from "../../assets/Data/Data";

const SliderContent = ({ id, img, icon, bHeading, heading, text }) => {
  const slideIndex = useSelector((state) => state.slider.value);
  console.log("sliderIndex", slideIndex);
  const dispatch = useDispatch();

  return (
    <div className="">
      <div
        key={id}
        id="content_box"
        className={
          parseInt(id) === slideIndex
            ? "opacity-100 duration-700 ease-in-out scale-100"
            : "fixed"
        }
      >
        <div id="slide_content" className="lg:flex py-1 pt-20">
          <div id="content_heading">
            {parseInt(id) === slideIndex && (
              <h1 className="font-bold text-3xl w-[80%] px-40 py-12">
                {heading}
              </h1>
            )}
            {parseInt(id) === slideIndex && (
              <h5 className=" text-xl w-[80%] pl-20">{text}</h5>
            )}
            {parseInt(id) === slideIndex && (
              <button className="lg:text-xl px-40 pt-5">
                More Information >
              </button>
            )}
          </div>
          <div id="content_image" className="flex flex-reverse justify-center">
            {parseInt(id) === slideIndex && (
              <img
                className="h-[300px] w-[2005] pt-10 pr-10"
                src={img}
                alt=""
              ></img>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderContent;
