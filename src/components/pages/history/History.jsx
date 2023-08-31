import React from "react";

import Sidebar_for_institutional from "../../sidebar/Sidebar_for_institutional";
import Option_Selection_Institutional from "../../Option_selection/Option_Selection_Institutional";
import Navbar from "../../Navbar/Navbar";
import Navbar_2 from "../../Navbar/Navbar_2";
import Footer from "../../Footer/Footer";

const History = () => {
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
          <p>
            IHH Humanitarian Relief Foundation was founded in Istanbul in 1995
            to structure humanitarian aid work initiated by volunteers who could
            not remain insensitive to the Bosnian War that erupted in 1992. IHH
            Humanitarian Relief Foundation assists victims of war, occupation,
            and natural disasters, as well as people in need who have been
            displaced and become refugees; in addition to in-kind and cash
            assistance, it also supports those in need with long-term projects.
            IHH Humanitarian Relief Foundation also provides emergency aid,
            social assistance, education, and health care, as well as resolving
            grievances resulting from human rights violations. In this context,
            IHH's priorities are to bring the aggrieved geographies supported by
            aid and development projects to the forefront of the agenda, to
            inform opinion leaders of our society's grievances, and to take
            concrete steps toward a solution by raising awareness on this issue.
            In addition to regular Ramadan and Qurban aid, the IHH Humanitarian
            Relief Foundation implements long-term projects in areas affected by
            war, occupation, and natural disasters. These projects include the
            construction of permanent residences and educational facilities, as
            well as the drilling of water wells. The problems of the aggrieved
            geographies are announced to the public through the campaigns that
            the IHH Humanitarian Relief Foundation brings to the agenda on a
            regular basis, and important projects are carried out in the
            aggrieved geographies with the support of the Turkish people. In
            addition to the studies it conducts in different parts of the world,
            from Asia to Africa, from the Balkans to the Far East, the IHH
            Humanitarian Relief Foundation addresses an important need in
            Turkish geography. The IHH Humanitarian Relief Foundation, which
            sets a good example for civil organizations' active role in the
            improvement and construction of society, works to eliminate
            grievances caused by natural disasters and continues its aid
            activities in Turkey with projects such as educational aid, Ramadan
            and Qurban aids. IHH Humanitarian Relief Foundation, which is
            defined by the General Directorate of Foundations as "the foundation
            that makes the best use of its resources" and is deemed worthy of
            the Grand National Assembly of Turkey Distinguished Service Award,
            prioritizes the realization of permanent projects in the geographies
            in which it operates and continues to work in the fields of social
            assistance.
          </p>
          <h3 className="py-10 font-semibold">Firsts of IHH</h3>
          <ul className="list-disc list-inside ml-4 space-y-5">
            <li>
              IHH is the first NGO that broke the siege in Sarajevo to deliver
              aid and to raise awareness about the horrible things happening to
              Bosnians during Bosnian War.
            </li>
            <li>
              IHH is the first Turkey based NGO that delivers relief aid to 123
              countries across five continents.
            </li>
            <li>
              IHH is the first NGO in Turkey that carried out international Eid
              al-Fitr charity campaigns.
            </li>
            <li>
              IHH is one of the first relief organizations that entered Gaza
              following the fall of the wall built on Egypt-Gaza border.
            </li>
            <li>
              IHH is the first charity organization from Turkey that delivered
              aid to Kosovo.
            </li>
            <li>
              IHH is the first charity organization in the world that delivered
              aid to Chechen people.
            </li>
            <li>
              IHH is the first NGO in Turkey that launched a nationwide campaign
              for Africa (2006 Africa Emergency Aid Campaign).
            </li>
            <li>
              Kosovo government named IHH among the top three organization that
              delivered the greatest amount of aid to the country.
            </li>
            <li>
              As a Turkey-based NGO IHH launched the biggest healthcare campaign
              in Africa with its “Cataract Project”
            </li>
            <li>
              IHH is the first NGO in the Islamic world that carries out
              humanitarian diplomacy.
            </li>
            <li>
              IHH organized an international humanitarian aid flotilla headed to
              Gaza in 2009 by land and in 2010 by sea.
            </li>
            <li>
              IHH carried out the greatest humanitarian diplomatic operation
              since WWII in the world by facilitating the release of over two
              thousand captives and prisoners in Syria in 2013.
            </li>
            <li>
              IHH established Independent Monitoring Council of five members
              including one IHH representative to supervise and monitor
              Philippines-Bangsamoro peace process in 2013.
            </li>
            <li>
              IHH proposed World Orphan Day to OIC which endorsed it and
              announced 15th of Ramadan every year as such in 2013.
            </li>
            <li>
              IHH organized “Open the Road to Aleppo” convoy of 5.000 vehicles
              with over 40.000 participants that drove from Istanbul to Antioch
              in an effort to open safe passage for civilians in besieged Aleppo
              in 2016. As a result of its humanitarian efforts 45.000 civilians
              were evacuated from Aleppo to safe zone.
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default History;
