import React from 'react'
import { Link } from 'react-router-dom'

const Option_Selection_Scrope_Of_work = () => {
  return (
    <div>
    <label htmlFor="option" className="block mb-2 text-sm font-semibold ">
      Scope Of Work
    </label>
    <select
      id="option"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 mb-5 focus:border-blue-500 block w-[70vw] p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-blue-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option selected>
        <Link to="/humanitarian-relief">Humanitarian Relief</Link>
      </option>
      <option value="OH">
        <Link to="/human-rights">Human Rights</Link>
        </option>
      <option value="AC">
        <Link to="/humanitarian-diplomacy">Humanitarian Diplomacy</Link>
      </option>
      <option value="AF">
      <Link to='/emergency-aid' >Emergency Aid</Link>
      </option>
      <option value="PR">
      
      <Link to='/search-and-rescue' >Search and Rescue</Link>
      </option>
      <option value="HR">
      <Link to='/volunteer-works' >voluntary Activities</Link>
      </option>
      <option value="RA">
      <Link to='/raising-awareness' >Raising Awareness</Link>
      </option>
    </select>
  </div>
  )
}

export default Option_Selection_Scrope_Of_work