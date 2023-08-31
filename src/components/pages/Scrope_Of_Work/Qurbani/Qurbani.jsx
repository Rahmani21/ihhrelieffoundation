import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Navbar_2 from "../../../Navbar/Navbar_2";
import Footer from "../../../Footer/Footer";

const Qurbani = () => {
  return (
    <div>
      <Navbar />

      <div
        id="container"
        className="lg:flex justify-between p-10 lg:mt-[6%] bg-slate-100 gap-5"
      >
        <div
          id="content"
          className="bg-white py-14 px-10 border m-auto shadow rounded w-[70vw]"
        >
          <div className="text-center">
            <img
              className="rounded"
              src="https://ihh.org.tr/public/page/0/24/10905293767.jpg"
            />
            <p className=" pt-5">
              Thanks to you, millions of people in 48 countries welcome Eid with
              joy. We have reached another Eid on the path we set out on with
              the motto "Qurbani is Worship, Sharing Means Brotherhood". With
              your support, we delivered blessings and brotherhood to 48
              countries and reminded them that they are not alone.
            </p>
            <p className=" py-8">
              We thank you on behalf of millions of people in need whom you have
              not left alone. May your Eid be blessed.
            </p>
            <h4 className="font-bold">To which countries did we reach?</h4>
            <h2 className=" font-bold py-10">MIDDLE EAST</h2>
            <p>
              Yemen, Palestine (Gaza and West Bank), Syria, Iraq, Lebanon,
              Jordan
            </p>
            <h2 className=" font-bold py-10">AFRICA</h2>
            <p>
              {" "}
              Chad, Mali, Togo, Niger, Sierra Leone, Burkina Faso, Mauritania,
              Guinea, Burundi, Ethiopia, Uganda, Malawi, Sudan, Somalia,
              Tanzania, Kenya, Benin
            </p>
            <h2 className=" font-bold py-10">CENTRAL ASIA AND CAUCASUS</h2>
            <p>
              Mongolia, Georgia (Adjara), Afghanistan, Azerbaijan, Kyrgyzstan,
              Tajikistan, Kazakhstan
            </p>
            <h2 className="font-bold py-10">SOUTH ASIA</h2>
            <p>
              Bangladesh (Arakan), Myanmar (Arakan), Pakistan, Thailand
              (Patani), Nepal, Sri Lanka, Philippines (Bangsamoro), India
              (Kashmir), Vietnam
            </p>
            <h2 className="font-bold py-10">BALKANS AND EUROPE</h2>
            <p>
              Bosnia and Herzegovina, Kosovo, Albania, North Macedonia,
              Montenegro, Serbia (Sandzak and Preşova), Romania, Ukraine
              (Crimea)
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Qurbani;
