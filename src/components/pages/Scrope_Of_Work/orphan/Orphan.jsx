import React from "react";
import Sidebar_for_Orphan from "../../../sidebar/Sidebar_for_Orphan";
import Option_Selection_Orphan from "../../../Option_selection/Option_Selection_Orphan";
import Navbar from "../../../Navbar/Navbar";
import Navbar_2 from "../../../Navbar/Navbar_2";
import Footer from "../../../Footer/Footer";

const Orphan = () => {
  return (
    <div>
      <Navbar />

      <div
        id="container"
        className="lg:flex justify-between lg:mt-[5.5%] p-10 bg-slate-100 gap-5"
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
          <div>
            <img
              className="rounded"
              src="https://ihh.org.tr/public/page/0/13/yetim-hediye.jpg"
            />
            <p className="pt-5">
              The majority of children who lose their families, and live without
              any guardian or protection, are in the Muslim world. Human
              traffickers and various criminal organizations are only some of
              the threatening facts that they may have to face. Meanwhile,
              missionary organizations grab millions of children who have no one
              to protect them in Muslim countries and use them for their
              missionary interests.
            </p>
            <p className="py-10">
              As IHH we are trying to care for hundreds of thousands of orphans
              in dozens of countries. We keep working relentlessly to support
              them until they can stand on their own feet and provide for their
              needs, from accommodation to healthcare, education, and food. We
              want them to grow up in their homeland without losing their
              culture and depending on someone else other than their relatives.
              We build orphanages with a cozy home environment for orphans, who
              lost their parents and cannot stay with their relatives.
            </p>
            <p className="">
              We are covering the living expenses of more than 133 thousand
              orphans in 44 countries and 80 cities across Turkey on a monthly
              regular basis and support them in terms of education, healthcare,
              food, and accommodation. Annually, we support nearly more than 1
              million orphans in 120 countries.
            </p>
          </div>

          <div className="lg:flex pt-10">
            <img
              className="product--image w-[50vw] h-[50vh]"
              src="https://ihh.org.tr/public/page/0/13/99.jpg"
            />
            <div className="w-[50vw] h-[50vh] bg-gray-200 pl-10 pt-16">
              <h1 className="font-semibold">An armful of goodness</h1>
              <p className="w-[20vw]">
                What say you to changing the lives of orphans with an armful of
                goodness?
              </p>
              <button className="bg-green-500 p-4 mt-5 rounded text-white hover:text-black">
                <i className="fa fa-heart"></i> Support Orphan
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl py-5">
              How do we provide for Orphans?
            </h3>
            <p className="py-5">
              We have developed several methods to carry out orphans’ education,
              healthcare, food, clothing, and shelter expenses, give away new
              outfits to keep them smiling during the holidays, and fund the
              construction of orphanages anytime in a year where they can grow
              up in a safe environment. These are as follows:
            </p>
          </div>

          {/*Summary and detailed*/}
          <div>
            <div className="max-w-screen-xl mx-auto px-5 bg-white">
              <div className="grid divide-y divide-neutral-200 w-full  mx-auto mt-8">
                <div className="py-6 border shadow rounded px-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="font-semibold">
                        Orphan Sponsorship Program
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
                      With this system, an individual, family, organization,
                      friend circle, classroom or school can sponsor an orphan;
                      by donating 22$ on a monthly basis, this contribute
                      significantly to the education, healthcare, food, clothing
                      and shelter needs for the sponsored orphan.
                    </p>
                    <div className="flex justify-center pt-20">
                      <button className="bg-green-500 p-4 mt-5 rounded text-white hover:text-black">
                        I want to support Orphan
                      </button>
                    </div>
                  </details>
                </div>
              </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-5 bg-white">
              <div className="grid divide-y divide-neutral-200 w-full  mx-auto mt-8">
                <div className="py-6 border shadow rounded px-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="font-semibold">
                        Orphan Education Sponsorship
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
                      We will continue to support orphans until they are able to
                      stand on their own two feet. Through the Orphan Education
                      Sponsorship, we help our children over the age of 18
                      continue their education until they find employment. Our
                      youth who have the opportunity to complete their education
                      in this manner are independent and able to contribute to
                      their family, community, and nation.
                    </p>
                  </details>
                </div>
              </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-5 bg-white">
              <div className="grid divide-y divide-neutral-200 w-full  mx-auto mt-8">
                <div className="py-6 border shadow rounded px-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="font-semibold">Project Sponsorship</span>
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
                      Project based relief activities such as orphanage and
                      house construction or renovation, educational materials,
                      healthcare can be sponsored by a certain person or body.
                      Those who volunteer to sponsor a project can bear the
                      expenses of an entire orphanage construction or parts of
                      it like a library, dormitory, kitchen, or a hall. The
                      volunteering sponsors can also contribute to the expenses
                      of one-year maintenance of an orphanage. If you would like
                      to sponsor a project or build an orphanage please call
                      0212 631 2121 to get in touch with IHH Orphan-care Office.
                    </p>
                  </details>
                </div>
              </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-5 bg-white">
              <div className="grid divide-y divide-neutral-200 w-full  mx-auto mt-8">
                <div className="py-6 border shadow rounded px-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="font-semibold">Orphan Support Pool</span>
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
                      Apart from the Orphan Sponsorship Program and Project
                      Sponsorship, all donations made to orphans are collected
                      in the Orphan Support pool. The funds collected in this
                      pool are then used for orphanage renovation, setting up a
                      library or a dormitory, healthcare, organizing social
                      activities for orphans, purchasing Eid outfits for
                      orphans.
                    </p>
                    <div className="flex justify-center pt-20">
                      <button className="bg-green-500 p-4 mt-5 rounded text-white hover:text-black">
                        I want to donate to orphan support pool
                      </button>
                    </div>
                  </details>
                </div>
              </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-5 bg-white">
              <div className="grid divide-y divide-neutral-200 w-full  mx-auto mt-8">
                <div className="py-6 border shadow rounded px-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="font-semibold">
                        Classes Competing for Goodness
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
                      A classroom of pre-school, primary school, high school,
                      private school, and madrasa students in Turkey who donate
                      their pocket money to raise $22 per month can meet the
                      monthly needs of an orphan throughout the year with this
                      aid campaign. Through the campaign supported by the
                      Ministry of National Education and Eğitim Bir Sen,
                      benevolent students in 1.928 institutions took care of
                      more than 5,000 orphans in Turkey and around the world in
                      2021. If you are a student or parent, you can join this
                      campaign by contacting your school. For more information
                      call the IHH Orphan Department on +90(212) 631 2121.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5">
            <h1 className="font-bold px-5 pt-20 text-xl">
              42 orphanages, 1 Education Village and 1 Education Center in 12
              countries
            </h1>
            <div>
              <div className="max-w-screen-xl mx-auto px-5 bg-white">
                <div className="grid divide-y divide-neutral-200 w-full  mx-auto mt-8">
                  <div className="py-6 border shadow rounded px-5">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="font-semibold">
                          Why does IHH open orphanages?
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
                        IHH orphanages serve beyond places of accommodation
                        where orphans sleep in. They are built according to the
                        particular conditions of the region and often hold
                        strategic importance. In some countries, Muslims are
                        oppressed, and their children are unable to receive
                        education in their mother tongue and in Islamic
                        subjects. Orphanages built by IHH in these regions meet
                        both the need for accommodation and education.
                        Orphanages built in Pakistan after a major earthquake
                        were aimed at protecting the children against missionary
                        organizations. IHH orphanages and colleges that evolved
                        into educational institutions are regarded as the most
                        prestigious educational institutions in the country. The
                        education center that opened in 2013 in Somalia, which
                        has been plagued by civil war for the past 20 years,
                        features a school, a mosque, a dormitory, a medical
                        center, and a playground. 1.500 students, including 400
                        boarding students study there. The education center aims
                        to equip children who had to quit school due to civil
                        war or poverty with the necessary skills and
                        qualifications to join society. This is the biggest
                        investment in children, who are the future of the
                        country as it aims to help them..
                      </p>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-5 px-5">
            <img
              src="https://ihh.org.tr/public/page/0/13/_mg_9728.jpg"
              alt="image"
            />
            <button className="bg-green-500 p-3.5 rounded text-white font-semibold hover:text-black">
              <i className="fa fa-heart"></i> Support Orphanages
            </button>
          </div>

          <div className="px-5 pt-8">
            <h3 className="font-bold  text-xl">Orphan Solidarity Days</h3>
            <p className="py-5">
              Every year, IHH organizes teams of volunteers who set out from
              Türkiye to visit orphans all over the world, provide aid, open
              orphanages, regularly inspect the work, make orphans happy, and
              meet their needs. We call this goodness mobilization Orphan
              Solidarity Days. Orphan Solidarity Days is one of the most
              important activities we organize for orphans throughout the year.
            </p>
            <p>Among the realized projects:</p>
            <ul className="list-disc space-y-2 pt-5 list-inside ml-5">
              <li>Buying home furnishings for families of orphans</li>
              <li>Covering renovation expenses for orphanages</li>
              <li>
                Vocational training for orphan families with vocational courses
              </li>
              <li>Facilitating medical check-ups</li>
              <li>Helping orphans without economic means get married</li>
              <li>Providing stationery and books needed</li>
              <li>Organizing picnics and kite festivals</li>
            </ul>
            <div className="text-center">
              <button className="p-3 text-white rounded bg-green-500"><i className="fa fa-heart"></i> Donate Now</button>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Orphan;
