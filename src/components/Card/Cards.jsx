import React from "react";
import Card from "./Card";
import { cardData } from "../../assets/Data/Data";


const Cards = () => {
  return (
    <div>
      <div className="mt-12 overflow-x-hidden w-full p-20 bg-slate-200 relative ">
        <div className="flex justify-center gap-8 md:w-full sm:w-full xs:w-[340%] w-[480%] animate-slide">
          {cardData.map((data) => {
            return <Card key={data.id} {...data} />;
          })}
        </div>
        <div className="text-center mt-10 font-semibold">See All news <i className="fa fa-solid fa-arrow"></i></div>
      </div>
    </div>
  );
};

export default Cards;
