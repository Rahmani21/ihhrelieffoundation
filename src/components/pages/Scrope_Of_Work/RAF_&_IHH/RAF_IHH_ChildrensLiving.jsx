import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Navbar_2 from "../../../Navbar/Navbar_2";
import Footer from "../../../Footer/Footer";

const RAF_IHH_ChildrensLiving = () => {
  return (
    <div>
      <Navbar />
      
      <div
        id="container"
        className="lg:flex justify-between p-10 mt-[6%] bg-slate-100 gap-5"
      >
        <div
          id="content"
          className="bg-white py-14 px-10 border m-auto shadow rounded w-[70vw]"
        >
          <div className="">
            <h1 className="font-semibold pt-5 text-3xl">
              RAF & IHH Children’s Living Center
            </h1>
            <p className=" text-center py-8">
              The RAF & IHH Children’s Living Center constructed on a plot
              totaling almost 100 decares in Hatay/Reyhanlı is the new home of
              the orphaned war victims who lost their parents. On completion,
              the complex will be the world’s largest children’s living center
              for the children orphaned in the war that has caused major
              destruction.
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
                        Background of the Project
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
                      IHH, that has materialized projects especially for
                      orphaned children since it was established, laid the
                      foundation of this huge project in the Reyhanlı province
                      of Hatay in collaboration with the Qatari organization RAF
                      on July 2015, which coincides with the 15 Ramadan Orphan
                      Day. In accordance with the agreement signed with the
                      Republic of Turkey Ministry of Family and Social Policies,
                      the first step was taken in establishing the RAF & IHH
                      Children’s Living Center.
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
                      <span className="font-semibold">
                        Why was there a need for such a project?
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
                      Undoubtedly, children are the most affected by the war in
                      Syria that has continued since 2011. According to reports,
                      one in every three Syrian children, in other words almost
                      3.7 million children were born after the conflict began.
                      Currently, 8.4 million (more than 80% of the all the
                      Syrian children) both in Syria and those who live as
                      refugees in neighboring countries, are continuing to be
                      affected by the war. Furthermore, these children are in
                      need of support in many aspects ranging from education to
                      healthcare, shelter to food, psychological support to
                      security.
                    </p>

                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      It is estimated that more than 600 thousand children were
                      orphaned in the last five years in Syria, where 450
                      thousand people have lost their lives due to the war.
                      Syrian orphans, like orphans all over the world, face the
                      threat of drug abuse, forced recruitment, human
                      trafficking, missionary organizations, and also organ,
                      prostitution and begging mafias. The short lives of these
                      traumatized children that came into the world in the
                      center of this conflict or distant from their homelands,
                      has been shaped by violence, fear, the fear of loss and
                      forced migration. If the war does not end, this will
                      continue.
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
                      <span className="font-semibold">
                        What is the aim of this children’s center?
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
                    <div className="space-y-5 pt-5">
                      <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        The aim of the center is that the Syrian children, who
                        are victims of war;
                      </p>
                      <ul className="list-disc list-inside px-5">
                        <li>
                          Grow up healthy both physically and psychologically
                          and are equipped for the future.
                        </li>
                        <li>
                          Are provided with their needs such as shelter,
                          education, healthcare, food and clothing in a home
                          environment.
                        </li>
                        <li>
                          Are rehabilitated for the psychological issues due to
                          the trauma they suffered from the war.
                        </li>
                        <li>
                          Are protected from missionary activities, crime and
                          mafia organizations, and live in a safe environment.
                        </li>
                        <li>
                          Adapt to normal life, and also develop in the social
                          aspect; in their skills and self-confidence.
                        </li>
                        <li>
                          Grow up on the basis of Syrian-Turkish brotherhood and
                          convey kindness and friendship to future generations.
                        </li>
                      </ul>
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
                        What does the living center contain?
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
                      In addition to 55 homes, each of which are 350m2
                      accommodating 990 orphans in total, the complex comprises
                      of three schools, a mosque, healthcare center, play areas,
                      culture center, indoor sports hall, rehabilitation center,
                      polyclinic, art workshops, plantation areas, recreation
                      area and olive orchards.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div>
              <h1 className="font-bold text-xl py-20">
                A new home for 990 orphans
              </h1>
              <p>
                The main purpose of the living center is to protect and care for
                the orphans who are victims of war.
              </p>
            </div>

            <div>
              <div className="flex flex-col items-center py-16 space-y-4">
                <img
                  className="w-10 h-10"
                  src="https://ihh.org.tr/public/page/0/40/raf-ihh-couk-yasam-merkzi-yasam.png"
                />
                <h5 className="font-bold">Living conditions</h5>
              </div>
              <div>
                <p className="text-left">
                  The living center was designed in the form of a small
                  neighborhood. This new living space will help children, who
                  have escaped the environment of war and experienced major
                  traumas, return to normal life. In the complex, children will
                  have the chance not only to live a healthy, peaceful life, but
                  also live in an environment where they acquire
                  self-confidence; where their emotions of kindness and
                  compassion will develop by caring for animals and trees; where
                  they learn to control their emotions and dream of a better
                  future.
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col items-center py-16 space-y-4">
                <img
                  className="w-10 h-10"
                  src="https://ihh.org.tr/public/page/0/40/raf-ihh-couk-yasam-merkzi-ev.png"
                />
                <h5 className="font-bold">Homes</h5>
              </div>
              <div>
                <p className="text-left">
                  Homes in the living center were designed to meet the shelter,
                  food, education, sharing, healthcare, clothing needs of the
                  orphans in a family environment. The architectural design of
                  the homes not only allows the children to care for themselves,
                  but also teaches them to show consideration for private living
                  spaces. Each of the homes, including the colors of the walls
                  in the sleeping, dining, study areas was prepared with great
                  care.
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col items-center py-16 space-y-4">
                <img
                  className="w-10 h-10"
                  src="https://ihh.org.tr/public/page/0/40/raf-ihh-couk-yasam-merkzi-terapi.png"
                />
                <h5 className="font-bold">Therapy</h5>
              </div>
              <div>
                <p className="text-left">
                  Conflict, bombs, the sound of gunfire and loss of family
                  members inflicts deep emotional and psychological wounds on
                  children. The special therapy center established for children
                  that have experienced major traumas is one of the most
                  important places in this living center. This aims to provide
                  the children with psychological support, emotional security,
                  self-confidence, the courage to ask advice and sharing their
                  emotions.
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col items-center py-16 space-y-4">
                <img
                  className="w-10 h-10"
                  src="https://ihh.org.tr/public/page/0/40/raf-ihh-couk-yasam-merkzi-egitim.png"
                />
                <h5 className="font-bold">Education</h5>
              </div>
              <div>
                <p className="text-left">
                  The education system in the center was prepared for the
                  children to gain social skills and a career so they can live
                  without being dependent on others throughout their lives. At
                  the same time, this education system will also contribute to
                  their character education. These children, that receive a
                  regular education, also have the chance to practice what they
                  learn in the social areas, sport hall, mosque, plantation
                  areas, in the home, the barber and market within the living
                  center complex.
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col items-center py-16 space-y-4">
                <img
                  className="w-10 h-10"
                  src="https://ihh.org.tr/public/page/0/40/raf-ihh-couk-yasam-merkzi-saglik.png"
                />
                <h5 className="font-bold">Health</h5>
              </div>
              <div>
                <p className="text-left">
                  Health is undoubtedly one of the main basic needs of children.
                  The living center was constructed so the children grow up in a
                  natural, healthy environment. In the plantation areas, these
                  children can cultivate their own fruits and vegetables that
                  will provide them with their daily needs; their efforts of
                  cultivating the soil will be rewarding for their physical and
                  mental health. With the center’s health clinic and balanced
                  diet of the meal system, the children will be physically
                  healthier.
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col items-center py-16 space-y-4">
                <img
                  className="w-10 h-10"
                  src="https://ihh.org.tr/public/page/0/40/raf-ihh-couk-yasam-merkzi-spor.png"
                />
                <h5 className="font-bold">Sport</h5>
              </div>
              <div>
                <p className="text-left">
                  Sport is one of the most important activities that contribute
                  to physical and mental health. In addition to the living
                  center’s general social environment, the sport hall, football,
                  volleyball and basketball grounds enable the children to use
                  their energy in the proper way. Playing these games not only
                  allows them to discover their own skills, but also contributes
                  to their psychological health. Children that are talented in
                  these sports can develop their skills even further.
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col items-center py-16 space-y-4">
                <img
                  className="w-10 h-10"
                  src="https://ihh.org.tr/public/page/0/40/raf-ihh-couk-yasam-merkzi-gelisim.png"
                />
                <h5 className="font-bold">Development</h5>
              </div>
              <div>
                <p className="text-left">
                  Monitoring and reporting the behavior of these children in a
                  home environment, and their behavior process in school, social
                  spaces and in the therapy center was another objective of
                  establishing the living center. Evaluating the development
                  process of these children reveals the problems they face
                  during the adaptation process to a normal life and enables
                  experts to find solutions to these problems.
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col items-center py-16 space-y-4">
                <img
                  className="w-10 h-10"
                  src="https://ihh.org.tr/public/page/0/40/raf-ihh-couk-yasam-merkzi-istihdam.png"
                />
                <h5 className="font-bold">Employment</h5>
              </div>
              <div>
                <p className="text-left">
                  This center is not simply an accommodation place for these
                  children. This is a huge living space where almost 500
                  personnel are employed ranging from carers to teachers,
                  doctors to shopkeepers, gardeners to administrators, security
                  experts and psychologist. While living in these homes, the
                  children are supervised by expert carers every moment of the
                  day; they can receive education and advice from their
                  teachers, instruction on growing fruit, vegetables and
                  plantation from the gardeners; consult the psychologist and
                  train with the sport trainers any time they wish.
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col items-center py-16 space-y-4">
                <img
                  className="w-10 h-10"
                  src="https://ihh.org.tr/public/page/0/40/raf-ihh-couk-yasam-merkzi-bilinc.png"
                />
                <h5 className="font-bold">Awareness</h5>
              </div>
              <div>
                <p className="text-left">
                  In addition to being an exceptional project that works to
                  rebuild humanity, the living center also aims to protect the
                  children of the community. The priority of the center is
                  ensuring that these unprotected, orphaned children that are
                  exposed to all kinds of threats can rebuild their lives, grow
                  up to have respect for themselves and for others, and with
                  human love and affection. In the future, these children that
                  grow up in the living center with community awareness and
                  where the sense of brotherhood becomes an essential part of
                  their lives will be able to achieve accomplishments that will
                  be beneficial to humanity.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src="https://ihh.org.tr/public/page/0/40/yasam-merkezi-genel.png" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RAF_IHH_ChildrensLiving;
