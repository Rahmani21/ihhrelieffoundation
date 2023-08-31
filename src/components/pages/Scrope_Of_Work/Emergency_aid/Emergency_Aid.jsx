import React from "react";

import Sidebar_for_Scope_of_wrok from "../../../sidebar/Sidebar_for_Scope_of_wrok";
import Option_Selection_Scrope_Of_work from "../../../Option_selection/Option_Selection_Scrope_Of_work";
import Navbar from "../../../Navbar/Navbar";
import Navbar_2 from "../../../Navbar/Navbar_2";
import Footer from "../../../Footer/Footer";

const Emergency_Aid = () => {
  return (
    <div>
      <Navbar />

      <div
        id="container"
        className="lg:flex justify-between lg:mt-[5.5%] p-10 bg-slate-100 gap-5"
      >
        <div className="lg:flex hidden">
          <Sidebar_for_Scope_of_wrok />
        </div>
        <div className="lg:hidden mt-10">
          <Option_Selection_Scrope_Of_work />
        </div>

        <div
          id="content"
          className="bg-white py-14 px-10 border rounded w-[70vw]"
        >
          <div>
            <h1 className="font-bold text-2xl">Emergency Aid</h1>
            <p className="py-10">
              War, civil war, earthquake, flood, tsunami, fire, landslide,
              drought, epidemic, poverty and famine… Millions of people affected
              by the above are struggling to survive around the globe. Thousands
              of families are destroyed daily due to neverending wars.
              Nonetheless the primary goal of the relief operations is to reach
              out to the destitute people fighting to survive despite adversity.
            </p>
            <p>
              The most important leg of IHH Humanitarian Relief is made of
              emergency aid activities. In addition to meeting the urgent needs
              of destitute people, raising awareness about an emerging crisis,
              conflict or war in the international community and undertaking
              crisis avoidance strategies remain at the heart of our activities.
            </p>
            <p className="py-10">
              Our humanitarian relief activities when an emegency situation
              happens anywhere in the world are as follows:
            </p>
            <ul className="list-disc ml-10 space-y-3">
              <li>
                Food, clothes and other supplies for basic humanitarian needs,
              </li>
              <li>Safe environment for women, children and homeless,</li>
              <li>
                Setting up tents, container shelters, mobile soup kitchens,
              </li>
              <li>
                Providing medical trucks, medical supplies, surgeries and
                similar healthcare service.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Emergency_Aid;
