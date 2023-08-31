import React from "react";
import { Link } from "react-router-dom";

const Option_Selection_Institutional = () => {
  return (
    <div className="">
      <label htmlFor="option" className="block mb-2  text-sm font-semibold ">
        Institutional
      </label>
      <select
        id="option"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 mb-5 focus:border-blue-500 block w-[70vw] p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-blue-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>
          <Link to="/about">About us</Link>
        </option>
        <option value="OH">
          <Link to="/history">Our History</Link>
          </option>
        <option value="AC">
          <Link to="/authorized-committees">Authoritative Committees</Link>
        </option>
        <option value="AF">
        <Link to='/foundation-deed' >Articles of Foundation</Link>
        </option>
        <option value="PR">
        
        <Link to='/press/document' >Press Room</Link>
        </option>
        <option value="HR">
        <Link to='/human-resources' >Human Resources</Link>
        </option>
      </select>
    </div>
  );
};

export default Option_Selection_Institutional;
