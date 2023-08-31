import React from "react";
import { nextSlide, prevSlide, dotSlide } from "../Feature/Slices/SliderSlices";
import { useDispatch, useSelector } from "react-redux";

const SliderButtons = () => {
    const slideIndex = useSelector((state) => state.slider.value);
    console.log("sliderIndex", slideIndex);
    const dispatch = useDispatch();
  return (
    <div>
    <div id="slide_buttons">
    <button
      className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300"
      onClick={() => dispatch(nextSlide(slideIndex + 1))}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
    <button
      className="absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300"
      onClick={() => dispatch(prevSlide(slideIndex - 1))}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </button>
    
  </div>
    </div>
  );
};

export default SliderButtons;
