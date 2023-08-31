import React, { useState, useEffect } from "react";

import {
  agendaDropItems,
  currency,
  documentDropItem,
  followDropListItems,
  informationDropItem,
  institutionalDropItem,
  languages,
  logDropItems,
  scopeDropItems,
  whatCanYouDoDropItems,
} from "../../assets/Data/Data";

import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faGlobe,
  faLanguage,
  faMobileAndroid,
  faBagShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import MobileNavbar from "./MobileNavbar";
import Navbar_2 from "./Navbar_2";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [active, setActive] = useState(null);

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  return (
    <div>
      <nav

      >
        <div className="py-2.5 bg-[#F2F2F7] px-32 text-lg text-[#838080]">
          <div className="lg:flex hidden justify-between">
            <div className="flex gap-5">
              <div id="mobIconBox">
                <FontAwesomeIcon
                  id="mobileIcons"
                  icon={faMobileAndroid}
                  className="mr-2"
                />
                <a href="tel:+90 212 631 21 21">+90 212 631 21 21</a>
              </div>
              <div>
                <ul className="">
                  <li className="relative group z-10">
                    <div id="followIconBox">
                      <FontAwesomeIcon
                        id="followIcon"
                        icon={faCheck}
                        className="mr-2 bg-[#838080] text-white rounded-full p-0.5"
                      />
                      Follow
                    </div>
                    <ul className="mx-0 px-6 py-2 space-y-5 absolute bg-white top-7 rounded-lg shadow-lg hidden group-hover:block ">
                      {followDropListItems.map((item) => {
                        return (
                          <li className="hover:text-blue-500" key={item.id}>
                            <div className="flex items-center">
                              <i className="fa fa-facebook mr-2"></i>
                              <a href>{item.listItem}</a>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <ul className="">
                  <li className="relative group z-10">
                    <div id="langBox">
                      <FontAwesomeIcon
                        id="langIcon"
                        icon={faGlobe}
                        className="mr-2"
                      />{" "}
                      EN
                    </div>
                    <ul className="mx-0 px-6 py-2 space-y-5 absolute hidden bg-white top-7 rounded-lg shadow-lg group-hover:block ">
                      {languages.map((language) => {
                        return (
                          <li className="hover:text-black" key={language.id}>
                            <div className="w-32">
                              <a>{language.languageName}</a>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="">
                  <li className="relative group z-10">
                    <div id="currBox">
                      <FontAwesomeIcon
                        id="currIcon"
                        icon={faLanguage}
                        className="mr-2"
                      />
                      TRY
                    </div>
                    <ul className="mx-0 px-6 py-2 space-y-5 absolute hidden bg-white top-7 rounded-lg shadow-lg  group-hover:block ">
                      {currency.map((curr) => {
                        return (
                          <li className="hover:text-green-500" key={curr.id}>
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                icon={curr.icon}
                                className="mr-2 bg-[#838080] rounded-full text-white p-1 hover:bg-green-500"
                              />
                              <a>{curr.currencyName}</a>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/*Mobile Nav*/}
          <div className="flex lg:hidden items-center justify-center">
            <div id="mobIconBox">
              <FontAwesomeIcon
                id="mobileIcons"
                icon={faMobileAndroid}
                className="mr-2"
              />
              <a href="tel:+90 212 631 21 21">+90 212 631 21 21</a>
            </div>
          </div>
        </div>

        <div className={`${
          active ? " py-3 border bg-white": "top-5"
        }
        fixed w-full top-0 left-0 z-20
        lg:flex hidden md:px-14 text-xl items-center justify-between text-[#838080] px-32 py-6`}>
          <div className={`${
            active ? "py-2 transition-all duration-300" : " py-4"
          } `}>
            <ul className="flex">
              <li className=" mx-1 px-3 py-2 relative group z-10">
                <a href="">Who are we</a>
                <ul className="absolute bg-white text-slate-500 top-14 left-0 hidden group-hover:block px-3 shadow rounded-lg space-y-5  py-8 border border-slate-300 ">
                  <li className="flex">
                    <div className="mx-3">
                      <h1 className="mb-5 text-[1.1rem]">Institutional</h1>
                      <ul className="space-y-2">
                        {institutionalDropItem.map((item) => {
                          return (
                            <div
                              id="header_2_dropdown_1"
                              className="flex items-center w-60 py-2 text-[1rem]"
                              key={item.id}
                            >
                              <FontAwesomeIcon
                                id="icon"
                                icon={item.icon}
                                className=" mr-2 bg-slate-200 py-3 px-3 rounded-xl"
                              />
                              <li>
                                <Link to={item.href}>
                                  {item.dropListItemName}
                                </Link>
                              </li>
                            </div>
                          );
                        })}
                      </ul>
                    </div>

                    <div className="mx-3">
                      <h1 className="mb-5 text-[1.1rem]">Information</h1>
                      <ul className=" space-y-2">
                        {informationDropItem.map((item) => {
                          return (
                            <div
                              id="header_2_dropdown_1"
                              className="flex items-center w-60 py-2 text-[1rem]"
                              key={item.id}
                            >
                              <FontAwesomeIcon
                                id="icon"
                                icon={item.icon}
                                className=" mr-2 bg-slate-200 py-3 px-3 rounded-xl"
                              />
                              <li>
                                <Link to={item.href}>
                                  {item.dropListItemName}
                                </Link>
                              </li>
                            </div>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="mx-3">
                      <h1 className="mb-5 text-[1.1rem]">Document</h1>
                      <ul className="mr-10 space-y-2">
                        {documentDropItem.map((item) => {
                          return (
                            <div
                              id="header_2_dropdown_1"
                              className="flex items-center w-60 py-2 text-[1rem]"
                              key={item.id}
                            >
                              <FontAwesomeIcon
                                id="icon"
                                icon={item.icon}
                                className=" mr-2 bg-slate-200 py-3 px-3 rounded-xl"
                              />
                              <li>
                                <Link to={item.href}>
                                  {item.dropListItemName}
                                </Link>
                              </li>
                            </div>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>

              <li className=" mx-1 px-6 py-2  relative group z-10">
                <a href="" className="">
                  What we do
                </a>
                <ul className="absolute bg-white top-14 left-0 hidden group-hover:block px-3 shadow rounded-lg space-y-5 py-5 border border-slate-300 ">
                  <li className="flex ">
                    <div className="mx-3 ">
                      <h1 className="mb-5 text-[1.1rem]">Scope of Work</h1>
                      <ul className="mr-10 space-y-2">
                        {scopeDropItems.map((item) => {
                          return (
                            <div
                              id="header_2_dropdown_2"
                              className="flex items-center w-60 py-2 text-[1rem]"
                              key={item.id}
                            >
                              <FontAwesomeIcon
                                id="icon"
                                icon={item.icon}
                                className=" mr-2 bg-slate-200 py-3 px-3 rounded-xl"
                              />
                              <li>
                                <Link to={item.href}>
                                  {item.dropListItemName}
                                </Link>
                              </li>
                            </div>
                          );
                        })}
                      </ul>
                    </div>

                    <div className="mx-3">
                      <h1 className="mb-5 text-[1.1rem]">Agenda</h1>
                      <ul className="mr-10 space-y-2">
                        {agendaDropItems.map((item) => {
                          return (
                            <div
                              id="header_2_dropdown_2"
                              className="flex items-center w-60 py-2 text-[1rem]"
                              key={item.id}
                            >
                              <FontAwesomeIcon
                                id="icon"
                                icon={item.icon}
                                className=" mr-2 bg-slate-200 py-3 px-3 rounded-xl"
                              />
                              <li>
                                <Link to={item.href}>
                                  {item.dropListItemName}
                                </Link>
                              </li>
                            </div>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li className=" mx-1 px-6 py-2  relative group z-10">
                <a href="">What can you do</a>
                <ul className="absolute bg-white top-14 left-0 hidden group-hover:block px-3 shadow rounded-lg space-y-5 py-8 border border-slate-300 ">
                  <li className="flex gap-10 ">
                    <div className="mx-5">
                      <ul className="mr-10 space-y-2 w-52">
                        {whatCanYouDoDropItems.map((item) => {
                          return (
                            <div
                              id="header_2_dropdown_3"
                              className="flex items-center text-[1rem] w-60"
                              key={item.id}
                            >
                              <FontAwesomeIcon
                                id="icon"
                                icon={item.icon}
                                className=" mr-2 bg-slate-200 py-2 px-3 rounded-xl"
                              />
                              <li>
                                <Link to={item.href}>
                                  {item.dropListItemName}
                                </Link>
                              </li>
                            </div>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>

              <li className="mx-1 py-2">
                <i className="fa fa-search"></i>
              </li>
            </ul>
          </div>
          <div>
            <img src={logo} alt="Logo" className="md:cursor-auto h-10" />
          </div>
          <div className="">
            <ul className="flex items-center gap-5">
              <li className=" mx-1 px-6 py-2  relative group z-10">
                <a href="" className="">
                  Login
                </a>
                <ul className="absolute bg-white top-14 right-0 hidden group-hover:block px-3 shadow rounded-lg space-y py-8 border border-slate-300 w-80">
                  <li className="flex gap-10 ">
                    <div className="mx-5">
                      <ul className="mr-10 space-y-2 w-60">
                        {logDropItems.map((item) => {
                          return (
                            <div
                              id={item.idNameForTage}
                              className="flex items-center text-[1rem]"
                              key={item.id}
                            >
                              <FontAwesomeIcon
                                id="icon"
                                icon={item.icon}
                                className=" mr-2 bg-slate-200 py-2 px-3 rounded-xl"
                              />
                              <li>
                                <Link to={item.href}>
                                  {item.dropListItemName}
                                </Link>
                              </li>
                            </div>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li className=" mx-1 px-4 py-3 bg-green-100 rounded-xl  relative group z-10">
                <FontAwesomeIcon
                  icon={faBagShopping}
                  className=" text-green-500"
                />
                <ul className="absolute bg-white top-14 right-0 hidden group-hover:block shadow rounded-lg space-y-5 py-8 border border-slate-300 w-[650%]">
                  <li className="flex gap-5">
                    <div className="mx-10">
                      <h1 className=" font-semibold">My Donation Cart</h1>
                      <div className="bg-slate-200 my-5 rounded-xl h-32 w-52">
                        <div className="flex items-center flex-col">
                          <FontAwesomeIcon
                            icon={faBagShopping}
                            className=" text-green-500  mt-[20%]"
                          />

                          <p>You cart is empty</p>
                        </div>
                      </div>
                      <button className="bg-green-500 w-full rounded-xl text-white py-2">
                        Start Donating
                      </button>
                    </div>
                  </li>
                </ul>
              </li>

              <li>
                <button className="bg-green-500 text-white py-[0.6rem] px-6 rounded-xl">
                  Donate
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/*MOBILE SIZE*/}

        <div className={`${
          active ? " py-4 border bg-white": "top-11 pb-1"
        }
        fixed w-full top-0 left-0 z-20
        py-4 bg-white lg:hidden `}>
          <div className="flex justify-between px-4">
            <div>
              <img src={logo} alt="Logo" className="md:cursor-auto h-10" />
            </div>
            <div>
              <ul className="flex gap-3 items-center">
                <li className=" mx-1 px-4 py-3 bg-green-100 rounded-xl">
                  <FontAwesomeIcon
                    icon={faBagShopping}
                    className="text-green-500"
                  />
                </li>
                <li>
                  <button className="bg-green-500 text-white py-[0.6rem] px-6 rounded-xl">
                    Donate
                  </button>
                </li>
                <li className="text-3xl text-slate-600">
                  <FontAwesomeIcon
                    icon={faBars}
                    className="cursor-pointer"
                    onClick={() => setToggle(true)}
                  />
                </li>
              </ul>
            </div>
          </div>

          {toggle && (
            <div className="fixed h-full w-full top-0 left-0 z-20 bg-white flex flex-col items-center shadow-lg gap-8 py-8 ">
              <MobileNavbar />

              <FontAwesomeIcon
                icon={faXmark}
                className="absolute right-12 top-5 text-3xl cursor-pointer"
                onClick={(prev) => setToggle(!prev)}
              />
            </div>
          )}
        </div>


      </nav>
    </div>
  );
};

export default Navbar;
