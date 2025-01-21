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
      <h3>What We Do</h3>
      <p>
        From consultation, creation, promotion & automation, get everything your business needs
        to leap into the next phase of growth.
      </p>

      {/* Our Clients */}
      <h3>Our Clients</h3>
      <p>
        Our portfolio holds the work of some of the most reputed enterprise & startup brands.
        All it is missing is YOU!
      </p>

      {/* Our Success Stories */}
      <h3>Our Success Stories</h3>
      <p>
        Our portfolio holds the work of some of the most reputed enterprise & startup brands.
        All it is missing is YOU!
      </p>
      <button className={styles.learnMoreButton}>Read Full Case Study</button>

      {/* Client Testimonial */}
      <h3>Client Testimonial</h3>
      <p>
        1. Our portfolio holds the work of some of the most reputed enterprise & startup brands.
        All it is missing is YOU!
      </p>
      <p>
        2. Our portfolio holds the work of some of the most reputed enterprise & startup brands.
        All it is missing is YOU!
      </p>
      <p>
        3. Our portfolio holds the work of some of the most reputed enterprise & startup brands.
        All it is missing is YOU!
      </p>
      <button className={styles.learnMoreButton}>Learn More</button>
    </div>
  );
};

export default HeroSection;
