import React from "react";

import Sidebar_for_institutional from "../../sidebar/Sidebar_for_institutional";
import Option_Selection_Institutional from "../../Option_selection/Option_Selection_Institutional";
import Navbar from "../../Navbar/Navbar";
import Navbar_2 from "../../Navbar/Navbar_2";
import Footer from "../../Footer/Footer";

const Anti_corruption_and_bribery = () => {
  return (
    <div>
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
          <h1 className="text-3xl font-bold">Information Security Policy</h1>
          <p className="pt-10">
            IHH Humanitarian Relief Foundation continues to carry out its
            capacity-building activities. The foundation, which makes systems to
            make sure the Personal Data Protection Law is always followed, also
            made the International Information Security Management System work
            for the organization as a whole. At the end of 2018, it got the ISO
            27001 standard compliance certificate.
          </p>
          <p className="py-10">
            In 2020, IHH earned a certificate again by establishing an
            international management system in accordance with ISO 37001, the
            Anti-Corruption and Bribery System, in line with the principles of
            transparency and accountability, after a 6-month preparation process
            that included theoretical information on the fight against
            corruption, case studies, and questions and answers about lived
            experiences. In this context, IHH, which has operationalized its
            policies, will undergo regular surveillance audits every year within
            the scope of a 3-year certificate valid as of October 5, 2020.
            Certification was carried out in accordance with NAVIGA Inspection
            and Certification Procedures.
          </p>
          <p>
            ISO 37001 specifies and guides the requirements for a management
            system designed to help an organization prevent, detect, and respond
            to corruption, and to help the organization comply with
            anti-corruption laws and voluntary commitments to its operations.
            The framework for anti-corruption practices in the institution
            includes all staff, management, and third parties who are important
            to the foundation. The Secretary General will represent this
            sensitivity at the highest level.
          </p>
          <p className="py-10">
            The duties to be undertaken regarding the relevant operational roles
            will be followed by the Corporate Compliance and Risk
            Coordinatorship, and the Control Supervision unit will assume
            responsibility for the internal audit roles to be performed at least
            once a year. The ABMS management representative (Secretary General)
            leads the Compliance and Risk officers and subsequent related
            operations, validates the documents, and manages the allocation of
            necessary resources for this purpose.
          </p>
          <p>
            All personnel and management were prepared for ISO 37001 by
            providing notification and training on the roles, responsibilities,
            and procedures of all units, and the system began to operate. Among
            the policies developed within the scope of the process are policies
            such as gifts and entertainment, notification and expression,
            prevention of retaliation, prevention of conflict of interest,
            communication, and business ethics guide.
          </p>
          <p className="py-10">
            After the training, the basic philosophy and objectives of the ISO
            37001 standard were learned; information was obtained about the
            benefits of the standard; the structure, articles, and conditions of
            the standard were learned; the connection of daily business
            activities with the ISO 37001 standard was understood; and the
            ability to effectively apply the standard in business processes was
            gained.
          </p>
          <p>
            IHH, with the aim of carrying out humanitarian aid activities in war
            and war-torn regions, regions struck by natural disasters,
            poverty-stricken countries, and regions, to prevent the impediment
            of the fundamental rights and freedoms of these people and to raise
            qualified people, continues to develop its systems with the support
            of senior management.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Anti_corruption_and_bribery;
