import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
const Sidebar_for_institutional = () => {
  return (
    <div>
      <div className=" bg-white w-[130%] py-8 px-6 border rounded h-[70vh]">
        <h2 className="text-green-500 pb-5 font-bold">Institutional</h2>
        <ul
          id="institutional_sidebar"
          className="space-y-8 font-semibold text-slate-500"
        >
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/history">Our History</Link>
          </li>
          <li>
          <Link to='/authorized-committees' >Authoritative Committees</Link>
          </li>
          <li>
          <Link to='/foundation-deed' >Articles of Foundation</Link>
          </li>
          <li>
          <Link to="/press/document" >Press Room</Link>
          </li>
          <li>
          <Link to='/human-resources' >Human Resources</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar_for_institutional;
