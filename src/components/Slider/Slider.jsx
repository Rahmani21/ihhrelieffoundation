import React from "react";
import { nextSlide, prevSlide, dotSlide } from "../Feature/Slices/SliderSlices";
import { useDispatch, useSelector } from "react-redux";

import { firstSlideData } from "../../assets/Data/Data";
import SliderContent from "./SliderContent";
import "./slider.css";
import SliderButtons from "./SliderButtons";
import BottomHeaderSlider from "./BottomHeaderSlider";

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  console.log("sliderIndex", slideIndex);
  const dispatch = useDispatch();

  return (
    <>
      <div
        id="outer_slide_box"
        className="relative top-32 py-16 px-[100px]  lg:text-[30px]"
      >
        <div
          id="inner_slide_box"
          className="h-[70vh]  lg:bg-red-500 rounded-2xl"
        >
          {firstSlideData.map((data) => {
            return <SliderContent key={data.id} {...data} />;
          })}
        </div>

        <div>
          <SliderButtons />
        </div>
      </div>

      <BottomHeaderSlider />
    </>
  );
};

export default Slider;
