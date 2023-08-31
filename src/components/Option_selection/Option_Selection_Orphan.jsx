import React from "react";
import { Link } from "react-router-dom";

const Option_Selection_Orphan = () => {
  return (
    <div>
      <label htmlFor="option" className="block mb-2 text-sm font-semibold ">
        Orphan
      </label>
      <select
        id="option"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 mb-5 focus:border-blue-500 block w-[70vw] p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-blue-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>
          <Link to="/orphan">Why orphans?</Link>
        </option>
        <option value="OH">
          <Link to="/orphanages">Orphanages</Link>
        </option>
        <option value="AC">
          <Link to="/ihh-raf-child-life-center">
            RAF & IHH Children's Living Center
          </Link>
        </option>
        <option value="AF">
          <Link to="/our-orphans-around-the-world">Sponsored Orphans Across The Globe</Link>
        </option>
        <option value="PR">
          <Link to="/press/document">Sponsored Orphan in Turkey</Link>
        </option>
        <option value="HR">
          <Link to="/human-resources">Orphan Sponsorship Application</Link>
        </option>
      </select>
    </div>
  );
};

export default Option_Selection_Orphan;
