import React from "react";

const Card = ({img,text,heading}) => {
  return (
    <div>
      <div className="shadow-lg min-w-[15rem] bg-white rounded-md">
        <img src={img} alt="" className="w-[100vw] h-[40vh] product--image" />
        <div className="px-5 pt-5 font-bold"> {heading}</div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 ">
            <div className="text-sm p-5">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
