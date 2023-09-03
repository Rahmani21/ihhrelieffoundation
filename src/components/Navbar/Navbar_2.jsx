import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar_2_Mobile_View from "./Navbar_2_Mobile_View";

const Navbar_2 = () => {

  return (
    <>
      <div
        id="largeScreenNavbar_2"
        className=" border border-slate-200 py-3 absolute top-[19%] left-0 w-full"
      >
        <div className="flex justify-center gap-5" id="wrapper">
          <ul id="items" className="flex justify-center gap-10">
            <li className="list_item flex justify-between items-center ">
              <i
                className="text-green-500 fa fa-shopping-cart mr-3"
                name="cart"
              ></i>
              Account Numbers <span className="ml-5 text-slate-500">|</span>
            </li>
            <li className="list_item flex justify-between items-center ">
              <i className="text-green-500 fa fa-book mr-3" name="book"></i>
              Crypto Donation <span className="ml-5 text-slate-500">|</span>
            </li>
            <li className="list_item flex justify-between items-center ">
              <i className="text-green-500 fa fa-phone mr-3" name="phone"></i>
              Contact Us <span className="ml-5 text-slate-500">|</span>
            </li>
            <li className="list_item flex justify-between items-center ">
              <i className="text-green-500 fa fa-leaf mr-3" name="leaf"></i>
              Share Your Bread
            </li>
          </ul>
        </div>

        </div>
        {/* Mobile Screen View*/}
        <div
          className="lg:hidden block overflow-x-scroll border border-slate-200 py-3 absolute top-[19%] left-0 w-full"
        >
          <Navbar_2_Mobile_View />
        </div>
    </>
  );
};

export default Navbar_2;
