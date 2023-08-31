import React from "react";

import Sidebar_for_Scope_of_wrok from "../../../sidebar/Sidebar_for_Scope_of_wrok";
import Option_Selection_Scrope_Of_work from "../../../Option_selection/Option_Selection_Scrope_Of_work";
import Navbar from "../../../Navbar/Navbar";
import Navbar_2 from "../../../Navbar/Navbar_2";
import Footer from "../../../Footer/Footer";

const Search_and_Rescue = () => {
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
            <h1 className="font-bold text-2xl">Search and Rescue</h1>
            <p className="py-10 italic">
              The geography on which we are living is not far from earthquakes.
              Thousands of our citizens were buried under the rubble in the
              catastropbic earthquake in Yalova on 17 August 1999. Over the past
              three decades 2.3 million people died in natural disasters around
              the globe. IHH emergency search and rescue teams set off from
              Turkey in many incidents of natural disasters across the world.
              Our teams give priority to examining the situation and reporting
              it back to our headquarters as soon as possible. We develop
              projects based on these actual reports and meet the needs of the
              destitute people.
            </p>
            <p>
              IHH search and rescue teams go through various trainings to become
              efficient and qualified rescuers. Training sessions for search and
              rescue underwater, in fire and under debris are held in
              consecutive levels. Fire search and rescue training is given by
              experts along with simulations in Firefighters Department Training
              Centre. The teams acquire the skills to transfer wounded from the
              fire, set up transfer operations and son on thus become qualified
              to interfere the fire situation based on the nature of the place.
            </p>
            <p className="py-10">
              Individual training sessions geared for search and rescue under
              collapsed buildings and how to use the specialized equipment are
              given by AFAD trainers. The teams are also trained how to set up
              walkie talkies stations and use them accordingly for efficient
              communication in the disaster areas where phone and internet cable
              network collapsed.
            </p>
            <p>
              Teams are trained for underwater search and rescue in open air
              pools or the sea. After completing first aid medical training the
              teams become qulified to step in to help in disaster and accident
              scenes.
            </p>
            <p className="py-10">
              The training sessions are held periodically and on certain levels.
              It takes long yeas to become expert in search and rescue
              operations. Therefore IHH continues training its teams. So far
              2.100 pople have trained been trained in various levels and are
              ready to interfere in the case of a disaster.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search_and_Rescue;
