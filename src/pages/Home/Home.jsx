import React, { useState } from "react";
import logo from "../../images/logo.png";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Courses from "../../components/Home/Courses";
import Teams from "../../components/Home/Teams";
import Testimonials from "../../components/Home/Testimonials";
import Footer from "../../components/Footer/Footer";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import OurInstructors from "../../components/Home/OurInstructors";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <div className="bg-black">
    {/* <Navbar/> */}
    <Header/>
    <Courses/>
    <SocialMedia/>
    <WhyChoose/>
    <Teams/>
    {/* <OurInstructors/> */}

    <Testimonials/>
    {/* <Footer/> */}
  </div>
  );
};

export default Home;
