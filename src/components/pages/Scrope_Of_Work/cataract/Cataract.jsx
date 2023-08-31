import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Navbar_2 from "../../../Navbar/Navbar_2";
import Footer from "../../../Footer/Footer";


const Cataract = () => {
  return (
    <div>
      <Navbar />

      <div
        id="container"
        className="lg:flex justify-between mt-[6%] p-10 bg-slate-100 gap-5"
      >


        <div
          id="content"
          className="bg-white py-14 px-10 border m-auto shadow rounded w-[70vw]"
        >
          <div className="">
            <img
              className="rounded"
              src="https://ihh.org.tr/public/page/0/17/ktrktkpk.jpg"
            />
            <h1 className="font-semibold text-center pt-5 text-3xl">
              You have given light to more than 168 thousand people
            </h1>
            <p className=" text-center py-8">
              Over the last 15 years, thanks to your goodness, more than 168
              thousand people have regained their sight. Cataract operations
              that we started in 2007 under the slogan "If you see them, they
              will see too," continue in 18 countries in Africa and Asia.
            </p>
            <p>
              Cataract is most commonly seen in elderly patients in Turkey, and
              if left untreated, it can lead to blindness. It is widespread due
              to factors such as malnutrition, long-term exposure to bright
              light, and eye traumas, in addition to old age. Millions of people
              lose their sight and rely on others because they cannot afford
              surgery.
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
                        {" "}
                        How Do Cataract Patients See the World?
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

                    <img
                      className="my-6"
                      src="https://ihh.org.tr/public/page/0/17/agac.jpg"
                    />
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
                        Is It Possible to Cure It?
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
                      The cure is the surgery only and it only takes 15 minutes.
                      However considering the poverty and lack of adequate
                      resources ieven a short surgery as such can be impossible
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
                        What Does IHH Do For This Matter?
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
                        We have been facilitating surgeries since 2007. So far
                        we have done;
                      </p>
                      <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        Medical check-up on 920.000 people.
                      </p>
                      <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        Medical examination on 615.802 people
                      </p>
                      <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        Surgeries on 177.000 patients who regained their
                        eyesight
                      </p>
                      <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        Since 2007 IHH has facilitated periodic cataract
                        surgeries in 18 African countries in total which are as
                        follows: Togo, Benin, Nigeria, Ghana, Mali, Chad,
                        Uganda, Tanzania, South Africa, Sierra Leone, Niger,
                        Sudan, Ethiopia, Mozambique, Somalia, Bangladesh,
                        Pakistan and India. In 2014 we have established an eye
                        hospital in Niger where surgeries are carried out
                        regularly.
                      </p>
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
                        Patience Selection and Surgery Duration
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
                      The number of patients in regions where we conduct
                      cataract operations is determined according to the
                      donations made. The number of cataract patients treated
                      depends on the budget allocated for this purpose.
                      Determining the patients, the duration of surgery and
                      recovery process can vary according to the country. As
                      legal procedures are long in certain countries, this can
                      increase this process to up to 6-8 months.
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
                        How Can I Contribute?
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
                      You can fund the surgery of an African cataract patient to
                      regain his eyesight by donating{" "}
                      <span className="font-bold">75$</span> only. You should
                      see the patients leaving the hospital with smiling eyes
                      that are able to see and pray for the donors. Because if
                      you see them they will also see.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center py-20 ">
            <button className="bg-green-500 p-4 rounded text-white hover:text-black"> <i className="fa fa-heart"></i> I want to open the eyes of a cataract patient</button>
          </div>

          <div>
            <h3 className="font-bold py-10">168 thousand people in 15 years</h3>
            <p>
              For the past 15 years, IHH has continued its operations in Africa,
              assisting 168 thousand people in regaining their sight. IHH, which
              operates under the slogan "Goodness anytime and anywhere" is
              expanding its operations globally.
            </p>
            <h3 className="font-bold py-10">Niger Eye Hospital</h3>
            <p>
              In Niger, where deserts cover 60 percent of the land, there are
              130.000 cataract patients due to insufficient healthcare services.
              The most common cause of cataract in this area is sand getting
              into the eye, which is one of the causes of cataract. In 2014, IHH
              supported in the establishment of an eye hospital in Niamey,
              Niger's capital. The hospital, which provides hope and light to
              thousands of patients who are unable to receive surgery due to a
              lack of financial and technical resources, plans to operate on
              6,000 patients over the next five years. Furthermore, specialized
              doctors from Turkey provide medical training for local doctors to
              become qualified to perform the surgeries.
            </p>
            <img
              className="rounded py-10"
              src="https://ihh.org.tr/public/page/0/17/nijer_goz_sagligi_merkezi_muayene_ve_ameliyat_(50).jpg"
            />
          </div>

          <div className="pl-10">
            <h3 className="font-bold">WE WERE THERE</h3>
            <h4 className="py-10 font-bold">I was the first person he saw</h4>
            <p>
              I had been to several African countries before, but this time was
              different; we came to perform cataract surgery on 300 people. That
              meant 300 people could see again. They wanted me to remove the
              bandage from the eyes of a child who had undergone surgery. I was
              extremely excited. I knelt down and attempted to remove the
              bandage. I moved slowly, as if I didn't want to startle a bird. I
              noticed he was staring into my eyes after I removed the second
              bandage. I was the first person he saw in his life. He was
              surprised, and I was super happy.
            </p>
            <p>
              I'm at a loss for words to express my joy. He examined everything
              around him after looking at my face. Ordinary things seemed
              strange to him because we had seen and grown accustomed to them
              thousands of times. He was going through everything one by one,
              almost like a scanner. I don't think I've ever seen a more
              beautiful view in my life. A cataract surgery changes a person's
              life. On that day, 300 people began a new life in Togo.
            </p>
            <p className="italic float-right pt-8">İzzet Şahin / Togo</p>
            <br />
            <div className="text-center block pt-20">
              <button className="bg-green-500 text-white px-5 py-2.5 rounded-lg">
                <i className="fa fa-heart "></i> Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cataract;
