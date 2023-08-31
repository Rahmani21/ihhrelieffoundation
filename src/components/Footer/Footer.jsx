import React from "react";
import logo from "../../assets/logos/logo.png";
import sistem from "../../assets/logos/sistem.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="py-1 h-auto">
      <div className=" text-left border rounded mx-5 mt-20">
        <div className="mx-5 grid gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 py-10">
          <div
            id="institutional_footer_col"
            className="lg:px-10 flex items-center lg:gap-8 md:gap-5 sm:gap-5 "
          >
            <div className="text-center">
              <p>
                <FontAwesomeIcon icon={faHeadphones} />
              </p>
              <p>Contact Us</p>
            </div>
            <div className="h-14 bg-slate-200 w-0.5 "></div>
          </div>
          <div
            id="institutional_footer_col"
            className="lg:px-10 flex items-center lg:gap-8 md:gap-5 sm:gap-5 "
          >
            <div className="text-center">
              <p>
                <img src="https://ihh.org.tr/en/press" alt="" />
              </p>
              <p>Press Room</p>
            </div>
            <div className="h-14 bg-slate-200 w-0.5 "></div>
          </div>
          <div
            id="institutional_footer_col"
            className="lg:px-10 flex items-center lg:gap-8 md:gap-5 sm:gap-5 "
          >
            <div className="text-center">
              <p>
                <img src="https://ihh.org.tr/en/partner" alt="" />
              </p>
              <p>Association</p>
            </div>
            <div className="h-14 lg:bg-slate-200 w-0.5 "></div>
          </div>
          <div
            id="institutional_footer_col"
            className="lg:px-10 flex items-center lg:gap-5 md:gap-3 sm:gap-5 "
          >
            <div className="text-center">
              <p>
                <img src="https://ihh.org.tr/en/offices" alt="" />
              </p>
              <p>Representative</p>
            </div>
            <div className="h-14 bg-slate-200 w-0.5 "></div>
          </div>
          <div
            id="institutional_footer_col"
            className="lg:px-10 flex items-center lg:gap-8 md:gap-5 sm:gap-5 "
          >
            <div className="text-center">
              <p>
                <img src="https://ihh.org.tr/en/news?category=gencihh" alt="" />
              </p>
              <p>IHH Youth</p>
            </div>
            <div className="h-14 bg-slate-200 w-0.5 "></div>
          </div>
          <div
            id="institutional_footer_col"
            className="lg:px-10 flex items-center lg:gap-8 md:gap-5 sm:gap-5 "
          >
            <div className="text-center">
              <p>
                <img src="https://insamer.com/" alt="" />
              </p>
              <p>Insamer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-6 py-10 text-left md:text-center">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div id="institutional_footer_col" className="px-10 mt-16 ">
            <h1 className="text-orange-500 mb-5">INSTITUTIONAL</h1>
            <h3 className="font-semibold">
              Press Room{" "}
              <i className="fa-solid fa-arrow-right text-orange-500 ml-2"></i>
            </h3>
            <h3 className="font-semibold">
              Representations{" "}
              <i className="fa-solid fa-arrow-right text-orange-500 ml-2"></i>
            </h3>
            <h3 className="font-semibold">
              Newsletter/SMS{" "}
              <i className="fa-solid fa-arrow-right text-orange-500 ml-2"></i>
            </h3>
          </div>
          <div id="information_footer_col" className="px-10 mt-16 ">
            <h1 className="text-blue-500 mb-5">GET INFORMATION</h1>
            <h3 className="font-semibold">
              How can you contribute?{" "}
              <i className="fa-solid fa-arrow-right text-blue-500 ml-2"></i>
            </h3>
            <h3 className="font-semibold">
              FAQ <i className="fa-solid fa-arrow-right text-blue-500 ml-2"></i>
            </h3>
            <h3 className="font-semibold">
              Be a Volunteer{" "}
              <i className="fa-solid fa-arrow-right text-blue-500 ml-2"></i>
            </h3>
            <h3 className="font-semibold">
              Information Security Policy{" "}
              <i className="fa-solid fa-arrow-right text-blue-500 ml-2"></i>
            </h3>
          </div>
          <div id="donate_footer_col" className="px-10 mt-16">
            <h1 className="text-green-500 mb-5">DONATE</h1>
            <h3 className="font-semibold">
              Emergency{" "}
              <i className="fa-solid fa-arrow-right text-green-500 ml-2"></i>
            </h3>
            <h3 className="font-semibold">
              Water Wells{" "}
              <i className="fa-solid fa-arrow-right text-green-500 ml-2"></i>
            </h3>
            <h3 className="font-semibold">
              Ramadan 2023{" "}
              <i className="fa-solid fa-arrow-right text-green-500 ml-2"></i>
            </h3>
            <h3 className="font-semibold">
              Qurbani 2023{" "}
              <i className="fa-solid fa-arrow-right text-green-500 ml-2"></i>
            </h3>
          </div>
          <div id="shortcuts_footer_col" className="px-10 mt-16">
            <h1 className="text-red-500 mb-5">SHORTCUTS</h1>
            <h3 className="font-semibold">
              Qurbani Proxy{" "}
              <i className="fa-solid fa-arrow-right text-red-500 ml-2"></i>
            </h3>
            <h3 className="font-semibold">
              Sponsorship Payment{" "}
              <i className="fa-solid fa-arrow-right text-red-500 ml-2"></i>
            </h3>
            <h3 className="font-semibold">
              Moneybox Request Form{" "}
              <i className="fa-solid fa-arrow-right text-red-500 ml-2"></i>
            </h3>
          </div>
        </div>
      </div>

      <div className="lg:hidden border py-5">
        <img className="w-32 h-20 ml-[40%] md:order-1" src={logo} alt="Logo" />
      </div>

      <div className="flex justify-between items-center border py-5 px-10">
        <p>English</p>
        <img className="w-32 h-20 sm:hidden " src={logo} alt="Logo" />
        <img className="w-32 h-20 " src={sistem} alt="Logo" />
      </div>

      <div className="mx-[15%] items-center flex flex-col">
        <p className=" mt-10">
          İHH Humanitarian Relief Foundation • Our foundation is granted tax
          exemption by the Council of Ministers decision dated 04.04.2011 and
          numbered 2011/1799.
        </p>
        <a className="mt-10">insani@hs01.kep.tr</a>
      </div>
    </div>
  );
};

export default Footer;
