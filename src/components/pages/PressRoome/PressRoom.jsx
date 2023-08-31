import React from "react";

import Navbar from "../../Navbar/Navbar";
import Navbar_2 from "../../Navbar/Navbar_2";
import Footer from "../../Footer/Footer";

const PressRoom = () => {
  return (
    <div>
      <Navbar />

      <div
        id="container"
        className="lg:flex h-[100vh] px-10 mt-[9%] bg-slate-100 gap-5"
      >
        <div className="flex items-center flex-col ml-[20%] mt-10 h-[40vh] space-y-4">
          <img
            src="data:image/jpeg;base64,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"
            alt="Page Not Found"
          />
          <h1 className="font-bold text-2xl">Page not found but…</h1>
          <p className="text-xl">
            You can look at the menus or search the site to find the content you
            are looking for.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PressRoom;
