import React from "react";

import Sidebar_for_Scope_of_wrok from "../../../sidebar/Sidebar_for_Scope_of_wrok";
import Option_Selection_Scrope_Of_work from "../../../Option_selection/Option_Selection_Scrope_Of_work";
import Navbar from "../../../Navbar/Navbar";
import Navbar_2 from "../../../Navbar/Navbar_2";
import Footer from "../../../Footer/Footer";

const Raising_awareness = () => {
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
              Despite international conventions that protect human rights and
              dignity violations of human rights and freedoms escalate while the
              perpetrators get away with their crimes. Although social justice
              should prevail all around the world economically superior
              countries continue exploiting others.
            </p>
            <p>
              As a part of our human rights activities we develop projects that
              would alleviate the suffering of the oppressed people. We let the
              international community become aware of the violations that happen
              in warzones and conflict areas and try to get international
              justice bodies take action about them. Moreover we raise awareness
              about these issues and network with volunteers in order to create
              solutions for the problems around the world and let good will and
              justice prevail globally. In this rend together we organize
              coferences, seminars and meeting and publish reports,
              documentaries, magazines and books as well as audio visual
              material on these issues.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Raising_awareness;
