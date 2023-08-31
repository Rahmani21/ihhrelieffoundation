import React from "react";

import Sidebar_for_institutional from "../../sidebar/Sidebar_for_institutional";

import Option_Selection_Institutional from "../../Option_selection/Option_Selection_Institutional";
import Navbar from "../../Navbar/Navbar";
import Navbar_2 from "../../Navbar/Navbar_2";
import Footer from "../../Footer/Footer";
import { management_data, trustees_data } from "../../../assets/Data/Data";


const AuthorativeCommettee = () => {
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
          <h3 className="font-bold text-xl py-5">Board of Trustees</h3>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name Surename
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody>
                {trustees_data.map((data) => {
                  return (
                    <tr className="bg-white border font-semibold">
                      <td className=" border px-6 py-3">{data.name}</td>
                      <td className=" border px-6 py-3">{data.rol}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-bold text-xl mt-20 mb-10">Board of Auditors</h3>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name Surename
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border font-semibold">
                    <td className=" border px-6 py-4">
                      Muhammet Hanefi KUTLUOĞLU
                    </td>
                  </tr>

                  <tr className="bg-white border font-semibold">
                    <td className=" border px-6 py-4">Ali YANDIR</td>
                  </tr>

                  <tr className="bg-white border font-semibold"></tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="font-bold text-xl py-6">Board of Management</h3>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name Surename
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody>
                {management_data.map((manage_data) => {
                  return (
                    <tr
                      className="bg-white border font-semibold"
                      key={manage_data.id}
                    >
                      <td className=" border px-6 py-3">{manage_data.name}</td>
                      <td className=" border px-6 py-3">{manage_data.role}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthorativeCommettee;
