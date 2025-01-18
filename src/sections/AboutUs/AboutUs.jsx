import React from "react";

import illustration from "../../assets/images/illustration.webp";

import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs} id="about-us">
      <div className={styles.leftColumn}>
        <h2>About Us</h2>
        <p>
          We specialize in providing end-to-end solutions tailored to your
          business needs. Our services include:
        </p>
        <ul>
          <li>Salesforce Development for customized CRM solutions.</li>
          <li>
            Web Development for creating dynamic and user-friendly websites.
          </li>
          <li>
            Comprehensive Testing to ensure seamless functionality across all
            platforms.
          </li>
          <li>
            Expert Marketing strategies to enhance your brand's presence and
            reach.
          </li>
        </ul>
        <p>
          Our mission: Empowering businesses through precision, innovation, and
          excellence.
        </p>
      </div>
      <div className={styles.rightColumn}>
        <img src={illustration} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
