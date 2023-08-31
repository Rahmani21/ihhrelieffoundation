import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar_for_Orphan = () => {
    return (
        <div>
          <div className=" bg-white w-[100%] py-8 px-6 border rounded h-[70vh]">
            <h2 className="text-green-500 pb-5 font-bold">Orphan</h2>
            <ul
              id="institutional_sidebar"
              className="space-y-8 font-semibold text-slate-500"
            >
              <li>
                <Link to="/orphan">Why Orphan</Link>
              </li>
              <li>
                <Link to="/orphanages">Orphanages</Link>
              </li>
              <li>
              <Link to='/ihh-raf-child-life-center' >RAF & IHH Children's Across The Globe</Link>
              </li>
              <li>
              <Link to='/our-orphans-around-the-world' >Sponsored Orphan in Turkey</Link>
              </li>
              <li>
              <Link to="/press/document" >Orphan Sponsorship Application</Link>
              </li>

            </ul>
          </div>
        </div>
      );
}

export default Sidebar_for_Orphan