import React from "react";

import Sidebar_for_institutional from "../../sidebar/Sidebar_for_institutional";

import "./about.css";
import Option_Selection_Institutional from "../../Option_selection/Option_Selection_Institutional";
import Navbar from "../../Navbar/Navbar";
import Navbar_2 from "../../Navbar/Navbar_2";
import Footer from "../../Footer/Footer";

const About = () => {
  return (
    <div className="">
      <Navbar />

      <div
        id="container"
        className="lg:flex justify-between lg:mt-[5.5%]  p-10 bg-slate-100 gap-5"
      >
        <div className="lg:flex hidden">
          <Sidebar_for_institutional />
        </div>
        <div className="lg:hidden mt-10">
          <Option_Selection_Institutional />
        </div>

        <div
          id="content"
          className="bg-white py-14 px-10 border rounded w-[70vw]"
        >
          <p>
            IHH has been working since 1992 with the purpose of delivering aid
            to all people who are in need, who have experienced a catastrophe,
            who are victims of war, natural disaster, etc. or wounded, crippled,
            starved, homeless and persecuted, wherever they are, regardless of
            their religion, language, race or sect, and to prevent the violation
            of the basic human rights and freedoms of those people. IHH’s
            voluntary relief activities evolved into an official organization in
            1995 and spread around five continents as it established a bridge of
            goodwill stretching from Turkey to 123 countries.
          </p>
          <h3 className="py-10 font-semibold">
            IHH gives priority to the following in its relief operations:
          </h3>
          <ul className="list-disc list-inside ml-4 space-y-5">
            <li>War-zone or war-torn countries and territories</li>
            <li>Regions struck by natural disaster</li>
            <li>Poverty-stricken countries and territories coun</li>
          </ul>

          <h3 className="py-5 text-xl font-bold">Mission</h3>
          <ul className="list-disc list-inside ml-4 space-y-5">
            <li>
              To give all needy and oppressed people the chance of a dignified
              life while delivering aid wherever they are with an understanding
              of universal brotherhood in order to help prevent evil and to let
              good and justice prevail.
            </li>
            <li>
              To work toward stopping the policies and activities persecuting
              and discriminating against people in order to prevent violations
              of their basic rights and freedoms.
            </li>
            <li>To maintain consistent values in an ever-changing world</li>
            <li>To let the good rule everywhere.</li>
          </ul>

          <h3 className="py-5 text-xl font-bold">Vision</h3>
          <ul className="list-disc list-inside ml-4 space-y-5">
            <li>
              To give all needy and oppressed people the chance of a dignified
              life while delivering aid wherever they are with an understanding
              of universal brotherhood in order to help prevent evil and to let
              good and justice prevail.
            </li>
            <li>
              To pioneer humanitarian work globally and improve cooperation
              between countries and organizations to pave the way to the
              formation of a common consciousness.
            </li>
            <li>
              To strengthen the individuals and organizations in impoverished
              communities.
            </li>
            <li>
              To get help to the areas in trouble right away so that as little
              damage as possible is done.
            </li>
            <li>
              To offer permanent solutions by realizing permanent projects
            </li>
            <li>
              To contribute to the elimination of poverty and the establishment
              of justice.
            </li>
          </ul>

          <h3 className="py-5 text-xl font-bold">Work Ethics</h3>
          <ul className="list-disc list-inside ml-4 space-y-5">
            <li>To pioneer</li>
            <li>To bridge the nations.</li>
            <li>To be the judge</li>
            <li>To be the voice of the oppressed</li>
            <li>
              To help in the creation of a just world where there is no
              exploitation.
            </li>
            <li>to use what is entrusted to us in the best way possible.</li>
            <li>To be transparent.</li>
            <li>
              To prioritize serving the people, not the brand or the name.
            </li>
            <li>
              To help every person in need regardless of religion, race,
              language, or sect.
            </li>
          </ul>

          <h3 className="py-5 text-xl font-bold">Work Ethics</h3>
          <ul className="list-disc list-inside ml-4 space-y-5">
            <li>
              United Nations Economic and Social Council (ECOSOC) membership of
              a consultant status
            </li>
            <li>
              Organization of Islamic Cooperation (OIC) membership of a
              consultant status
            </li>
            <li>
              Organization of Islamic Cooperation Humanitarian Funds (OICHF)
              councillorship
            </li>
            <li>Humanitarian Forum (THF) membership</li>
            <li>Union of NGOs of the Islamic World (IDSP) membership</li>
            <li>Turkey Voluntary Agencies Foundation (TGTV) membership</li>
            <li>International Council of Voluntary Agencies (ICVA)</li>
          </ul>

          <h3 className="py-5 text-xl font-bold">Award</h3>
          <p className="py-5">
            The authorities and several bodies have shown their appreciation for
            IHH’s relief activities since 1995. IHH’s achievements are testified
            by the awards that it received. The latest awards are as follows:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-5">
            <li>
              “The Best Use of Resources Toward Realization of Its Objectives”
              Award granted by General Directorate of Foundations (2005)
            </li>
            <li>
              “The Best Realized Project” Award for IHH’s Ashiyana Orphanage in
              Pakistan granted by General Directorate of Foundations (2006)
            </li>
            <li>
              “The Best Realized Project” Award for IHH’s Women Education Centre
              in Somalia granted by General Directorate of Foundations (2006)
            </li>
            <li>
              “The Best Realized Project” Award for IHH’s Mobile Hospital in
              Iraq granted by General Directorate of Foundations (2006)
            </li>
            <li>
              Outstanding Service Award granted by the Turkish Parliament (2007)
            </li>
            <li>Human Rights Award granted by COJEP International (2010)</li>
            <li>
              Agricultural School Project (Somalia) - AK Party Civil Society
              Awareness Awards Contest, Winner in Humanitarian Aid Category
              (2017)
            </li>
          </ul>
        </div>
      </div>

    <Footer />
    </div>
  );
};

export default About;
