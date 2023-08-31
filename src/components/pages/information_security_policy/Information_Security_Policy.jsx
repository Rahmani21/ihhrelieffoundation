import React from "react";

import Sidebar_for_institutional from "../../sidebar/Sidebar_for_institutional";
import Option_Selection_Institutional from "../../Option_selection/Option_Selection_Institutional";
import Navbar from "../../Navbar/Navbar";
import Navbar_2 from "../../Navbar/Navbar_2";
import Footer from "../../Footer/Footer";

const Information_Security_Policy = () => {
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
          <h1 className="text-3xl font-bold">Information Security Policy</h1>
          <p>
            In order to manage all types of risks to our information security
            and information assets, IHH Humanitarian Relief Foundation and its
            employees;
          </p>
          <p className="py-10">
            * Considers corporate information, personnel personal information,
            donor, volunteer and needy data (financial data, personal
            information...) valuable and critical and to fulfill the obligations
            required by laws regarding information security,
          </p>
          <p>
            * To provide the necessary infrastructure and to take the necessary
            security measures in order to ensure that the IT services used in
            the realization of our corporate activities continue
            uninterruptedly, and that access to personal and private data can
            only be accessed by authorized persons,
          </p>
          <p className="py-10">
            * To document and continuously improve our information security
            management system in a way that fulfills the requirements of the
            ISO/IEC 27001 standard,
          </p>
          <p>
            * To comply with all legal regulations and contracts related to
            information security,
          </p>
          <p className="py-10">
            * To systematically manage risks associated with information assets,
          </p>
          <p>
            * We guarantee to carry out educational programs that will develop
            technical and behavioral competencies in order to increase awareness
            of information security, and we work with all our strength to become
            an exemplary organization in terms of information security in the
            field of non-governmental organizations by managing it in an
            integrated manner with other management systems we apply.
          </p>
          <div className="py-10">
            <img
              className="rounded-xl"
              src="https://ihh.org.tr/public/page/0/61/iso-27701.png"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Information_Security_Policy;
