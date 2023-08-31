import React from "react";
import { Link } from "react-router-dom";

const Sidebar_for_Scope_of_wrok = () => {
  return (
    <div>
      <div className=" bg-white w-[130%] py-8 px-6 border rounded h-[70vh]">
        <h2 className="text-green-500 pb-5 font-bold">Scope Of Work</h2>
        <ul
          id="institutional_sidebar"
          className="space-y-8 font-semibold text-slate-500"
        >
          <li>
            <Link to="/humanitarian-relief">Humanitarian Relief</Link>
          </li>
          <li>
            <Link to="/human-rights">Human Rights</Link>
          </li>
          <li>
            <Link to="/humanitarian-diplomacy">Humanitarian Diplomacy</Link>
          </li>
          <li>
            <Link to="/emergency-aid">Emergency Aid</Link>
          </li>
          <li>
            <Link to="/search-and-rescue">Search and Rescue</Link>
          </li>
          <li>
            <Link to="/volunteer-works">voluntary Activities</Link>
          </li>
          <li>
            <Link to="/raising-awareness">Raising Awareness</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar_for_Scope_of_wrok;
