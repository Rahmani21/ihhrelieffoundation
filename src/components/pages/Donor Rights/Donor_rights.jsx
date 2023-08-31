import React from "react";

import Sidebar_for_institutional from "../../sidebar/Sidebar_for_institutional";
import Option_Selection_Institutional from "../../Option_selection/Option_Selection_Institutional";
import Navbar from "../../Navbar/Navbar";
import Navbar_2 from "../../Navbar/Navbar_2";
import Footer from "../../Footer/Footer";

const Donor_rights = () => {
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
          <div>
            {" "}
            <h1 className="text-3xl font-bold">Donor Rights</h1>
            <p className="py-10">
              IHH Humanitarian Relief Foundation, knowing that it is a virtuous
              behavior to donate and share on a voluntary basis, accepts the
              donor rights stated below in order to gain the trust and respect
              of its donors.
            </p>
            <ul className="list-disc list-inside mx-10 space-y-4">
              <li>
                Our donors have the right to ask questions and receive
                immediate, accurate and clear answers while making a donation.
              </li>
              <li>
                To obtain information about the board of directors and managers,
                waiting for managers to fulfill their duties in a prudent manner
                in accordance with the corporate culture,
              </li>
              <li>
                To be informed about the mission and vision of IHH, how the
                donation will be used, and its capacity and intention to use the
                donation efficiently for its purposes,
              </li>
              <li>Access to annual financial information,</li>
              <li>
                Requesting a guarantee that the donation will be used in
                accordance with its purpose,
              </li>
              <li>A proper thank you,</li>
              <li>
                To demand the confidentiality of their donations in accordance
                with the law,
              </li>
              <li>
                Demanding that all relations established by all employees
                representing IHH be at a professional level,
              </li>
              <li>
                Knowing whether the person requesting for donation is a
                volunteer or an employee,
              </li>
              <li>Seeing donations at any time,</li>
              <li>Request deletion of contact information.</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Donor_rights;
