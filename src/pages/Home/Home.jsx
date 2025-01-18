import React from "react";

import HeroSection from "../../sections/HeroSection/HeroSection";
import AboutUs from "../../sections/AboutUs/AboutUs";
import Services from "../../sections/Services/Services";

import styles from "./Home.module.css";
import Solutions from "../../sections/Solutions/Solutions";
import WhyChooseUs from "../../sections/WhyChooseUs/WhyChooseUs";
import ContactUs from "../../sections/ContactUs/ContactUs";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <HeroSection />
      <AboutUs />
      <Services />
      <Solutions />
      <WhyChooseUs />
      {/* <ContactUs /> */}
    </div>
  );
};

export default Home;
