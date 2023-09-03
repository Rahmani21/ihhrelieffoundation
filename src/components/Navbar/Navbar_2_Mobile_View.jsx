import React from "react";

const Navbar_2_Mobile_View = () => {
  return (
    <div className="block whitespace-nowrap">
      <div className=" mr-2.5 inline-block ">
        <div className="w-[50vw] ">
          <i
            className="text-green-500 fa fa-shopping-cart mr-3"
            name="cart"
          ></i>
          Account Numbers <span className="ml-5 text-slate-500">|</span>
        </div>
      </div>
      <div className=" mr-2.5 inline-block ">
        <div className="w-[50vw] ">
          <i className="text-green-500 fa fa-book mr-3" name="book"></i>
          Crypto Donation <span className="ml-5 text-slate-500">|</span>
        </div>
      </div>
      <div className=" mr-2.5 inline-block ">
        <div className="w-[50vw] ">
          <i className="text-green-500 fa fa-phone mr-3" name="phone"></i>
          Contact Us <span className="ml-5 text-slate-500">|</span>
        </div>
      </div>
      <div className=" mr-2.5 inline-block ">
        <div className="w-[50vw] ">
          <i className="text-green-500 fa fa-leaf mr-3" name="leaf"></i>
          Share Your Bread
        </div>
      </div>
    </div>
  );
};

export default Navbar_2_Mobile_View;
