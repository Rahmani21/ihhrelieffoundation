import React from "react";

import Sidebar_for_Orphan from "../../../sidebar/Sidebar_for_Orphan";
import Option_Selection_Orphan from "../../../Option_selection/Option_Selection_Orphan";
import Navbar from "../../../Navbar/Navbar";
import Navbar_2 from "../../../Navbar/Navbar_2";
import Footer from "../../../Footer/Footer";

const Orphanages = () => {
  return (
    <div>
      <Navbar />
    

      <div
        id="container"
        className="lg:flex justify-between p-10 lg:mt-[5.5%] bg-slate-100 gap-5"
      >
        <div className="lg:flex hidden">
          <Sidebar_for_Orphan />
        </div>
        <div className="lg:hidden mt-10">
          <Option_Selection_Orphan />
        </div>

        <div
          id="content"
          className="bg-white py-14 px-10 border rounded w-[70vw]"
        >
          <h1 className="font-bold text-2xl">Orphanages</h1>
          <h2 className="font-bold text-xl py-5 text-center">ORPHANAGES</h2>
          <p>
            IHH's ''orphan'' adventure began with the invasion of Afghanistan.
            The U.S. occupation, which targeted civilians, left hundreds of
            orphans behind. The orphans who took refuge in Pakistan together
            with the refugees fleeing the occupation began to be the target of
            human smugglers. IHH, which is already continuing its projects in
            Pakistan, decided to find a permanent solution for orphaned
            children. Our blessed journey, in which we started to open
            orphanages, as a result, continues today with 38 orphanages, 1 child
            life center, and 1 orphan education center in 13 countries.{" "}
          </p>

          <div>
            <div className="max-w-screen-xl mx-auto bg-white">
              <div className="grid divide-y divide-neutral-200 w-full  mx-auto mt-8">
                <div className="py-6 border shadow rounded px-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="font-semibold">
                        What is the importance of an orphanage?
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      Orphanages, which serve a strategic purpose rather than
                      providing shelter, address the education, religion,
                      health, social, and political issues confronting Muslims
                      in the region, particularly children. Orphanages with
                      various functions all over the world, such as a school for
                      children in Somalia who cannot get an education due to the
                      civil war, a shelter for orphans in Pakistan who want to
                      be protected from human smugglers, and a place of freedom
                      for children in Myanmar who want to live their culture
                      that the state has banned. The main goal of orphanages is
                      to support orphans who cannot afford to live on their own
                      until they are able to stand on their own two feet, to
                      educate them, and to prepare them for life with family
                      affection.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div className="px-5">
            <p className="py-5">
              IHH aims to raise orphaned children in mentally, spiritually, and
              physically healthy ways without separating them from their land,
              and culture. With this purpose in mind, IHH has put 38 orphanages
              into service.
            </p>
            <p className="py-5">
              In 50 countries globally and 77 cities in Turkey, IHH takes
              regular care of more than 110 thousand orphaned children and
              supports them in education, health, food, and shelter. In
              addition, it provides periodic assistance to 800 thousand of
              orphans in 120 countries and regions every year.
            </p>
          </div>
          <div>
            <h3 className="font-bold">AFGHANISTAN</h3>
            <p className="py-5">
              In Afghanistan; stability cannot be achieved due to wars and
              occupations, the national industry is almost destroyed, almost all
              of the consumable items are imported, and twenty percent of
              school-age children cannot receive an education. There is only one
              doctor for every seven thousand people. The only way to ensure
              development is to use the natural resources for the country’s
              benefit and educate the youth for this purpose. However, under
              current conditions, it does not seem possible for the Afghan
              people to break such a vicious circle of conflicts, lack of
              infrastructure, lack of education, and poverty on their own. For
              this reason, they need the help of other Muslim countries and
              peoples.
            </p>
            <img
              className="rounded-xl"
              src="https://ihh.org.tr/public/page/0/41/afganistan-ydg-2015-1.jpg"
            />

            <div className="max-w-screen-xl mx-auto bg-white">
              <div className="grid divide-y divide-neutral-200 w-full  mx-auto mt-8">
                <div className="py-6 border shadow rounded px-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="font-semibold">
                        Istanbul-Kabul Orphanage
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      The Istanbul-Kabil Brotherhood Orphanage, the only IHH
                      orphanage in Afghanistan, was established in memory of
                      Martyrs Faruk Aktaş and Bahattin Yldz. There is a dining
                      hall, study halls, computer laboratory, library, activity
                      hall, administration rooms, recreation room, guest room,
                      and playground in the building built for the two pioneers
                      who were martyred in Afghanistan, where they went to look
                      after the orphanage land. Many tournaments are organized
                      for this purpose in orphanages where sports are as
                      important as education. Boys are housed in the orphanage,
                      where competitions in religion and science are also held.
                    </p>
                    <div className=" py-5 space-y-2">
                      <p>
                        <span className="font-bold">Location</span>{" "}
                        Afghanistan/Kabul
                      </p>
                      <p>
                        <span className="font-bold"> Date of Opening:</span>{" "}
                        April 1, 2013
                      </p>

                      <p>
                        <span className="font-bold">
                          Number of Hosted Children:
                        </span>
                        80
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5">
            <h3 className="font-bold">BANGLADESH</h3>
            <p className="py-5">
              Bangladesh is one of the painful places in Islamic geography. When
              the sufferings of Arakan have added, a terrible picture emerges in
              the country. IHH is trying to humanize this picture, where 10
              million children live on the street, and pays special attention to
              orphanages.
            </p>
            <p className="py-5">
              The devastating effects of poverty in the country are perceived
              more in the field of education. Bangladesh is one of the poorest
              countries in the world, hit by poverty, epidemics, and frequent
              natural disasters. As the most vulnerable segment of society,
              orphans are the most affected by the adverse conditions in the
              country. The number of orphaned children is estimated to have
              reached 5 million. As IHH, we have been carrying out relief
              efforts in Bangladesh for many years, and we have 9 orphanages in
              the country. Our foundation also supports 15 orphanages with
              orphan sponsorship and periodic aid.
            </p>
            <img
              className="rounded-xl"
              src="https://ihh.org.tr/public/page/0/41/daruliman.jpg"
            />

            <div className="max-w-screen-xl mx-auto bg-white">
              <div className="grid divide-y divide-neutral-200 w-full  mx-auto mt-8">
                <div className="py-6 border shadow rounded px-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="font-semibold">
                        Daru’l-Iman Orphanage
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      Daru'l-Iman is an orphanage established right on the
                      border of Arakan, one of the most troubled areas in
                      Islamic geography. It is on Bangladeshi territory and is
                      home to Muslim children fleeing Arakan. Because of the
                      region's problems, the orphanage serves many purposes.
                      Boys live in the orphanage, where they receive services
                      such as education, food, health, clothing, and
                      socialization.
                    </p>
                    <div className=" py-5 space-y-2">
                      <p>
                        <span className="font-bold">Location</span>{" "}
                        Bangladesh/Cox’s Bazar (Arakan border)
                      </p>
                      <p>
                        <span className="font-bold"> Date of Opening:</span>{" "}
                        January 1, 2009
                      </p>

                      <p>
                        <span className="font-bold">
                          Number of Hosted Children:
                        </span>{" "}
                        35
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5">
            <img
              className="rounded-xl"
              src="https://ihh.org.tr/public/page/0/41/esma-biltaci-yet..jpg"
            />

            <div className="max-w-screen-xl mx-auto bg-white">
              <div className="grid divide-y divide-neutral-200 w-full  mx-auto mt-8">
                <div className="py-6 border shadow rounded px-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="font-semibold">
                        Esma Biltaci Orphanage
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      Esma was the daughter of Mohammed Biltaci, a Brotherhood
                      leader who was deposed in an Egyptian coup and sentenced
                      to death. She was martyred in the street where the West
                      had left to put an end to the massacre of Egypt's own
                      children. The orphanage was built in Kurigram for Esma,
                      who died at the age of 17. Dormitory, study rooms,
                      administration room, library, and kitchen in the orphanage
                      Services are provided in the orphanage where the boys stay
                      to meet the children's educational, food, health,
                      clothing, and social needs.
                    </p>
                    <div className=" py-5 space-y-2">
                      <p>
                        <span className="font-bold">Location</span> Bangladesh/
                        Bhukdanga Purpara
                      </p>
                      <p>
                        <span className="font-bold"> Date of Opening:</span>{" "}
                        Nisan 2016
                      </p>

                      <p>
                        <span className="font-bold">
                          Number of Hosted Children:
                        </span>{" "}
                        32
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5">
            <img
              className="rounded-xl"
              src="https://ihh.org.tr/public/page/0/41/banglades-muhammed-enes-yetimhanesi-acilis-pro.jpg"
            />

            <div className="max-w-screen-xl mx-auto bg-white">
              <div className="grid divide-y divide-neutral-200 w-full  mx-auto mt-8">
                <div className="py-6 border shadow rounded px-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="font-semibold">
                        Muhammed Enes Orphanage
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      Muhammed Enes, a Boaziçi University student who died in a
                      traffic accident, had a dream of establishing an
                      orphanage. IHH made this dream a reality in Bangladesh by
                      honoring Muhammed Enes, who was active in charity work.
                      The Mohammed Enes Orphanage in Chandpur includes a
                      dormitory, study rooms, an administration room, and a
                      kitchen. Services for education, food, health, clothing,
                      and social needs are provided in the orphanage where boys
                      are housed.
                    </p>
                    <div className=" py-5 space-y-2">
                      <p>
                        <span className="font-bold">Location</span> Bangladesh/
                        Bangladesh/Dhonarpar
                      </p>
                      <p>
                        <span className="font-bold"> Date of Opening:</span>{" "}
                        April 2016
                      </p>

                      <p>
                        <span className="font-bold">
                          Number of Hosted Children:
                        </span>{" "}
                        32
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5">
            <img
              className="rounded-xl"
              src="https://ihh.org.tr/public/page/0/41/banglades-inegol-yetimhanesi-acilisi-02.05.201.jpg"
            />

            <div className="max-w-screen-xl mx-auto bg-white">
              <div className="grid divide-y divide-neutral-200 w-full  mx-auto mt-8">
                <div className="py-6 border shadow rounded px-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="font-semibold">İnegöl Orphanage</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      Bursa negöl Orphanage, which began construction in
                      February 2015, was completed shortly and put into service.
                      Intensive trainings are provided for the children to stand
                      on their own feet in the orphanage, which aims to raise
                      conscious Muslims rather than being a shelter for orphans.
                      The orphanage has a dormitory, study rooms, an
                      administration room, and a kitchen. Services are provided
                      in the orphanage for boys to meet the children's
                      educational, food, health, clothing, and social needs.
                    </p>
                    <div className=" py-5 space-y-2">
                      <p>
                        <span className="font-bold">Location</span> Bangladesh/
                        Bangladesh/Shyamnagar
                      </p>
                      <p>
                        <span className="font-bold"> Date of Opening:</span>{" "}
                        April 2016
                      </p>

                      <p>
                        <span className="font-bold">
                          Number of Hosted Children:
                        </span>{" "}
                        32
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5">
            <img
              className="rounded-xl"
              src="https://ihh.org.tr/public/page/0/41/iyilikhane.jpg"
            />

            <div className="max-w-screen-xl mx-auto bg-white">
              <div className="grid divide-y divide-neutral-200 w-full  mx-auto mt-8">
                <div className="py-6 border shadow rounded px-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="font-semibold">
                        İyilikhane Orphanage
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      The orphanage, which opened with the help of the
                      Iyilikhane Children's Association, currently houses 100
                      Bangladeshi orphans. The orphanage, which has a capacity
                      of 170 people, will house 70 more orphans. With 32 rooms,
                      the building is IHH's largest orphanage in Bangladesh and
                      the organization's tenth in the region. The orphanage also
                      has classrooms, an infirmary, a kitchen, a game room, a
                      conference hall, a laundry, teachers' rooms, and a library
                      in addition to the bedrooms.
                    </p>
                    <div className=" py-5 space-y-2">
                      <p>
                        <span className="font-bold">Location</span> Bangladesh/
                        Bangladesh/Khulna
                      </p>
                      <p>
                        <span className="font-bold"> Date of Opening:</span>{" "}
                        April 2, 2018
                      </p>

                      <p>
                        <span className="font-bold">
                          Number of Hosted Children:
                        </span>{" "}
                        200
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5">
            <img
              className="rounded-xl"
              src="https://ihh.org.tr/public/page/0/41/banglades-ydg-2015-2.jpg"
            />

            <div className="max-w-screen-xl mx-auto bg-white">
              <div className="grid divide-y divide-neutral-200 w-full  mx-auto mt-8">
                <div className="py-6 border shadow rounded px-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="font-semibold">Togra Orphanage</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      Bangladesh has approximately 4 million orphans, which is
                      frequently on the agenda due to economic inadequacies and
                      poor policies. IHH is particularly concerned about orphans
                      in the region, recognizing the gravity of the situation.
                      Togra Orphanage, one of the outcomes of this interest,
                      houses 60 orphans. IHH rebuilt the orphanage, which was
                      damaged in the region's flood disaster. Services are
                      provided in the orphanage for boys to meet the children's
                      educational, food, health, clothing, and social needs.
                    </p>
                    <div className=" py-5 space-y-2">
                      <p>
                        <span className="font-bold">Location</span> Bangladesh/
                        Bangladesh/Pirojpur
                      </p>
                      <p>
                        <span className="font-bold"> Date of Opening:</span>{" "}
                        January 1, 2009
                      </p>

                      <p>
                        <span className="font-bold">
                          Number of Hosted Children:
                        </span>{" "}
                        80
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5">
            <img
              className="rounded-xl"
              src="https://ihh.org.tr/public/page/0/41/banglades-babul-amman-yetimhanesi-2013-acilis_.jpg"
            />

            <div className="max-w-screen-xl mx-auto bg-white">
              <div className="grid divide-y divide-neutral-200 w-full  mx-auto mt-8">
                <div className="py-6 border shadow rounded px-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="font-semibold">
                        Babu’l-Aman Orphanage
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      Dhaka, the wealthy capital with world-class golf courses,
                      has a dark side. Children suffer the most from the
                      capital's misery, where millions of people work up to 12
                      hours a day for $3 per day. IHH, which has established an
                      orphanage for children who are vulnerable to various
                      outside dangers, tries to meet the orphans' educational,
                      food, health, clothing, and social needs. The orphanage
                      has a dormitory, study rooms, an administration room, a
                      meeting room, and a kitchen.
                    </p>
                    <div className=" py-5 space-y-2">
                      <p>
                        <span className="font-bold">Location</span> Bangladesh/
                        Bangladesh/Uttara/Dhaka
                      </p>
                      <p>
                        <span className="font-bold"> Date of Opening:</span>{" "}
                        October 215, 2013
                      </p>

                      <p>
                        <span className="font-bold">
                          Number of Hosted Children:
                        </span>{" "}
                        32
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5">
            <img
              className="rounded-xl"
              src="https://ihh.org.tr/public/page/0/41/banglades-ydg-2015-4.jpg"
            />

            <div className="max-w-screen-xl mx-auto bg-white">
              <div className="grid divide-y divide-neutral-200 w-full  mx-auto mt-8">
                <div className="py-6 border shadow rounded px-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="font-semibold">
                        Babu’l-Aman Orphanage
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      The orphanage, located on Bangladesh's Arakan border,
                      houses orphans who have escaped Arakan. Dormitory,
                      kitchen, administration room, meeting room, and study
                      rooms are located on the one-story orphanage. Services are
                      provided to meet the educational, nutritional, health,
                      clothing, and social needs of girls from the orphanage's
                      second floor, which is currently under construction.
                    </p>
                    <div className=" py-5 space-y-2">
                      <p>
                        <span className="font-bold">Location</span> Bangladesh/
                        Bangladesh/Cox’s Bazar
                      </p>
                      <p>
                        <span className="font-bold"> Date of Opening:</span>{" "}
                        June 1, 2013
                      </p>

                      <p>
                        <span className="font-bold">
                          Number of Hosted Children:
                        </span>{" "}
                        50
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5">
            <img
              className="rounded-xl"
              src="https://ihh.org.tr/public/page/0/41/abdulhamid.jpg"
            />

            <div className="max-w-screen-xl mx-auto bg-white">
              <div className="grid divide-y divide-neutral-200 w-full  mx-auto mt-8">
                <div className="py-6 border shadow rounded px-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="font-semibold">
                        Sultan Abdulhamid Han Orphanage
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      This orphanage has three floors, 20 dormitories, a study
                      room, a reading room, executive rooms, a dining hall, a
                      kitchen, a bathroom, and a toilet. The orphanage
                      structure, which opened in 2014, features a meeting room,
                      classrooms, a dining hall, and a dormitory. Services are
                      provided in the orphanage where the boys reside to meet
                      the children's educational, food, health, clothing, and
                      social needs.
                    </p>
                    <div className=" py-5 space-y-2">
                      <p>
                        <span className="font-bold">Location</span> Bangladesh/
                        Bangladesh/Gazipur
                      </p>
                      <p>
                        <span className="font-bold"> Date of Opening:</span>{" "}
                        April 1, 2014
                      </p>

                      <p>
                        <span className="font-bold">
                          Number of Hosted Children:
                        </span>{" "}
                        100
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Orphanages;
