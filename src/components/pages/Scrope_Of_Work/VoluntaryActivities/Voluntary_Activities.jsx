import React from "react";

import Sidebar_for_Scope_of_wrok from "../../../sidebar/Sidebar_for_Scope_of_wrok";
import Option_Selection_Scrope_Of_work from "../../../Option_selection/Option_Selection_Scrope_Of_work";
import Navbar from "../../../Navbar/Navbar";
import Navbar_2 from "../../../Navbar/Navbar_2";
import Footer from "../../../Footer/Footer";

const Voluntary_Activities = () => {
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
            <h1 className="font-bold text-2xl">Voluntary Activities</h1>
            <p className="py-10">
              IHH carries out its activities based on voluntary spirit. If we
              are able to operate in numerous countries around the world it is
              thanks to God first and then to the volunteers that support us
              physically and spiritually. The key to the long living existence
              of IHH is the volunteers and charitable people.
            </p>
            <p>
              The volunteers can take part in any areas of our activities to
              support us. Our volunteers contribute to many activities from
              fundraising to healthcare service, to education activities,
              Project development and execution in cooperation with professional
              associations. Many of our permanent projects are realized thanks
              to the support of our volunteers such as orphanages in Asia, wells
              in Africa, a mosque in Gambia or an eye hospital in Niger.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Voluntary_Activities;
