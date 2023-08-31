import React from "react";

import Sidebar_for_Scope_of_wrok from "../../../sidebar/Sidebar_for_Scope_of_wrok";
import Option_Selection_Scrope_Of_work from "../../../Option_selection/Option_Selection_Scrope_Of_work";
import Navbar from "../../../Navbar/Navbar";
import Navbar_2 from "../../../Navbar/Navbar_2";
import Footer from "../../../Footer/Footer";

const Humanitarian_Relief = () => {
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
            <h1 className="font-bold text-2xl">Humanitarian Relief</h1>
            <p className="py-10">
              Millions of people who are victims of wars, conflicts, natural
              disasters, epidemics, diseases, poverty, drought worldwide are
              struggling to survive. The goal of our foundation is to delivery
              basic human needs of these needy and destitute people. While we
              intervene in emergency situations we also bring service to the
              regions in terms of healthcare, food, shelter and education.
              Moreover we bring about development strategies to help the region
              become self-dependent.
            </p>
            <p>
              In our relief efforts, we prioritize to improve solidarity,
              brotherhood and goodness in Turkey as well as around the world and
              develop social and cultural projects to this end. Our foundation
              serves as a role model and mentor for the NGOs operating in crisis
              areas and builds permanent facilities like schools, orphanages,
              wells, culture centres, medical clinics and hospitals.
            </p>
            <p className="py-10">
              We bring healthcare services such as medical check-up, treatment,
              medical equipment aid, rehab to the areas in need. Moreover we
              network and organize medical staff in different countries and
              support their medical professional training as a way to help
              deliver healthcare service to the needy people.
            </p>
            <p>
              In areas where regular education is suspended and the resources
              are insufficient, we build, renovate or refurbish schools,
              madrasas, institutes. We also help students from crisis areas to
              get education in other countries and faciliate professional
              training programs for educator. Among our activities are providing
              textual and visual materials, setting up culture centres, building
              places of worship, organizing vocational training courses,
              translation of scholarly works and setting up media outlets.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Humanitarian_Relief;
