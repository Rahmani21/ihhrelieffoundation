import React from "react";

import Sidebar_for_institutional from "../../sidebar/Sidebar_for_institutional";
import Option_Selection_Institutional from "../../Option_selection/Option_Selection_Institutional";
import Navbar from "../../Navbar/Navbar";
import Navbar_2 from "../../Navbar/Navbar_2";
import Footer from "../../Footer/Footer";

const Human_Resources = () => {
  return (
    <div>
      <Navbar />


      <div
        id="container"
        className="lg:flex justify-between lg:mt-[5.5%]  p-10 bg-slate-100 gap-5"
      >
        <div className="lg:flex hidden">
          <Sidebar_for_institutional />
        </div>
        <div className="lg:hidden mt-10">
          <Option_Selection_Institutional />
        </div>

        <div
          id="content"
          className="bg-white py-14 px-10 border rounded w-[70vw]"
        >
          <h1 className="font-bold text-2xl">Authorized Committees</h1>
          <p className="my-10">
            IHH Human Resources' mission is to achieve the goals and objectives
            of the institution, by employing personnel who are educated and owns
            a career, trained or to be trained in accordance with the desired
            qualifications. The Human Resources unit sees the human in the
            center of the organization, tries to provide both material and moral
            satisfaction of the human resource in the right time and place. It
            is a unit that provides development and career opportunities,
            respects human rights and freedoms, includes experts and competent
            people in humanitarian aid, defines its personnel as an exemplary
            model in terms of social, legal, cultural and moral aspects and will
            mobilize their work in this direction. The vision of IHH's human
            resources is to train human resources who continue their
            humanitarian aid activities regardless of religion, language, race,
            sect and set an example in terms of knowledge, skills and morals in
            their work, and whose knowledge and experience will be consulted
            with IHH's purpose and mission.
          </p>

          <h1>Our Working Principles</h1>

          <ul className="my-10 space-y-4">
            <li>- To be a pioneer</li>
            <li>- To be a bridge between communities</li>
            <li>- To be a referee</li>
            <li>- To be the voice of the oppressed</li>
            <li>
              - To contribute to the rebuilding of a just world without
              exploitation
            </li>
            <li>- To make the most of escrow</li>
            <li>- To be transparent</li>
            <li>- To promote the service, not the brand or name</li>
            <li>
              - To help without discrimination based on religion, language,
              race, sect
            </li>
          </ul>

          <ul className="space-y-2">
            <li>* Justice</li>
            <li>* Kindness</li>
            <li>* Freedom</li>
            <li>* Brotherhood</li>
            <li>* Trustiness</li>
            <li>* Courage</li>
            <li>* Solidarity</li>
            <li>* Sincerity</li>
            <li>* Morality</li>
            <li>* Honor</li>
            <li>* Respect</li>
            <li>* Volunteering</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Human_Resources;
