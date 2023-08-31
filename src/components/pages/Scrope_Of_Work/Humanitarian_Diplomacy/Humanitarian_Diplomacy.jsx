import React from "react";

import Sidebar_for_Scope_of_wrok from "../../../sidebar/Sidebar_for_Scope_of_wrok";
import Option_Selection_Scrope_Of_work from "../../../Option_selection/Option_Selection_Scrope_Of_work";
import Navbar from "../../../Navbar/Navbar";
import Navbar_2 from "../../../Navbar/Navbar_2";
import Footer from "../../../Footer/Footer";

const Humanitarian_Diplomacy = () => {
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
            <h1 className="font-bold text-2xl">Humanitarian Diplomacy</h1>
            <p className="py-10">
              The Middle East comes first in the list of places plagued with
              human rights violations in the world. In addition to millions of
              lives threatened every day, hundreds and thousands of people are
              deprived of their right to live freely as they are imprisoned
              without a fair trial.
            </p>
            <p>
              In addition to humanitarian relief work and human rights
              activities, IHH is carrying out humanitarian diplomacy and take
              action where inter-governmental diplomacy fails in order to
              protect civilians, to find missing people, to rescue hostages,
              take steps to resolve the issues in conflict areas, areas hit by
              natural disaster and warzones.
            </p>
            <p className="py-10">
              We put official and diplomatic efforts about issues where human
              life is concerned, serve as mediator, and negotiate to remove the
              obstacles blocking humanitarian relief work.
            </p>
            <p>
              Our Foundation is represented not only in national and regional
              level but also in many international outlets about relief work so
              that we strengthen our relations on national and international
              level to work more efficiently in all these areas.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Humanitarian_Diplomacy;
