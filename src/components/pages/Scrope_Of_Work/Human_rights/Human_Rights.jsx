import React from "react";

import Sidebar_for_Scope_of_wrok from "../../../sidebar/Sidebar_for_Scope_of_wrok";
import Option_Selection_Scrope_Of_work from "../../../Option_selection/Option_Selection_Scrope_Of_work";
import Navbar from "../../../Navbar/Navbar";
import Navbar_2 from "../../../Navbar/Navbar_2";
import Footer from "../../../Footer/Footer";

const Human_Rights = () => {
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
            <h1 className="font-bold text-2xl">Human Rights</h1>
            <p className="py-10">
              In spite of international conventions and agreements protecting
              human rights and dignity the violations of human rights and
              freedoms are escalating around the world while oppressors get away
              with their crimes. Although social justice should prevail all
              around the world the human exploitation of economically stronger
              countries knows no end.
            </p>
            <p>
              We belive that it is our duty to make sure that people around the
              world regardless of their race and religion have a life with
              justice and freedom without persecution. We believe that every
              human being deserves a diginified life without needing assistance
              of others and this is only possible by upholding justice and human
              rights.
            </p>
            <p className="py-10">
              We prepare reports about the aftermath of disasters, crises and
              wars to raise awareness in the international community and develop
              a common understanding for solutions. We also undertake crisis
              avoidance activities. While we reach out to destitute people
              affected by oppression, war and natural disaster we also take
              action to stop violations of these people’s basic human rights and
              freedoms.
            </p>
            <p>
              We develop projects to alleviate the suffering of destitute people
              and put efforts to mobilize the international judiciary bodies to
              take affirmative action against violations in conflict areas and
              warzones.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Human_Rights;
