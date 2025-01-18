import React from "react";

import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <h1>Welcome to CodeTestify.io</h1>
      <p>
        Your Trusted Partner for Quality Assurance, Software Automation, and
        Custom Solutions
      </p>
      <button className={styles.learnMoreButton}>Learn More</button>
    </div>
  );
};

export default HeroSection;
