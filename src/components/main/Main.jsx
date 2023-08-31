import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import Cards from "../Card/Cards";
import DynamicBackgroundImage from "../DynamicBackgroundImage/DynamicBackgroundImage";
import Stories from "../Stories/Stories";
import Navbar_2 from "../Navbar/Navbar_2";
import Story from "../Stories/Story";
import MultiCardSlider from "../Stories/MultiCardSlider";
import Story1 from "../Stories/Story1";
import FundProject from "../FundProject/FundProject";
import Application from "../Application/Application";
import Donate from "../Donate/Donate";
import Publications from "../Publication/Publication";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div className=" font-Poppins">
      <Navbar />
      <Navbar_2 />
      <Slider />
      <Cards />
      <DynamicBackgroundImage />
      <Story />
      <FundProject />
      <Application />
      <Donate />
      <Publications />
      <Footer />
    </div>
  );
};

export default Main;
