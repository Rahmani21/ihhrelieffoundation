import React from "react";

import Sidebar_for_Orphan from "../../../sidebar/Sidebar_for_Orphan";
import Option_Selection_Orphan from "../../../Option_selection/Option_Selection_Orphan";
import "./supported_orphan_across.css";
import Navbar from "../../../Navbar/Navbar";
import Navbar_2 from "../../../Navbar/Navbar_2";
import Footer from "../../../Footer/Footer";

const Supported_Orphans_Across_The_World = () => {
  return (
    <div>
      <Navbar />
  

      <div
        id="container"
        className="lg:flex justify-between lg:mt-[5.5%] p-10 bg-slate-100 gap-5"
      >
        <div className="lg:flex hidden">
          <Sidebar_for_Orphan />
        </div>
        <div className="lg:hidden mt-10">
          <Option_Selection_Orphan />
        </div>

        <div
          id="content"
          className="bg-white py-14 px-10 border rounded w-[70vw]"
        >
          <h1 className="font-bold text-2xl py-5">
            Supported Orphans Across The World
          </h1>

          <div id="SOATW_container" className="border">
            <div className=" box box1">box1</div>
            <div className=" box box2">box2</div>
            <div className=" box box3">box3</div>
            <div className=" box box4">box4</div>
            <div className=" box box5">box5</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Supported_Orphans_Across_The_World;
