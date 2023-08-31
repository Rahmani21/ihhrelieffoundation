import React from "react";

const Application = () => {
  return (
    <div className="lg:flex lg:justify-between lg:h-[82vh] px-20 sm:px-40 md:px-40 sm:h-auto md:h-auto md:items-center sm:items-start bg-orange-200">
      <div className="md:w-[100%]">
        <div className="flex flex-col mt-20">
          <h1 className="text-2xl pb-5 py-5">Easiest way to do good</h1>
          <p className="text-xl w-[70%] text-orange-500">
            Through our application you can easily donate, give payment
            instruction, add reminders
          </p>
          <div className="flex gap-5 py-10 ">
            <button className="bg-orange-300 py-3 text-orange-900 px-5 rounded">
              <i className="fa fa-brand fa-iphone"></i> App Store
            </button>
            <button className="bg-orange-300 py-3 text-orange-900 px-5 rounded">
              <i className="fa fa-brand fa-android"></i> Google Play
            </button>
          </div>
        </div>
      </div>

      <div>
      <img className="  lg:w-[60%] lg:h-auto" src="https://ihh.org.tr/images/common/app-cover-en.png" alt="Application"/>
      
      </div>
    </div>
  );
};

export default Application;
