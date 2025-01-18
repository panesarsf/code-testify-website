import React from "react";
import styles from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  return (
    <div className={styles.whyChooseUsSection}>
      <h2>Why Choose Us?</h2>
      <p>
        Proven Expertise: Years of experience delivering exceptional results.
        Innovative Solutions: Cutting-edge technology tailored to your needs.
        Customer Focused: We listen, analyze, and deliver what matters most.
        FailProof Processes: Ensuring reliability, scalability, and excellence
        in every step.
      </p>
      <ul>
        <li>
          <span>Expertise Across Domains:</span> From QA to full-stack
          development, we’ve got you covered.
        </li>
        <li>
          <span>Customer-Centric Approach:</span> We listen, understand, and
          deliver solutions that matter.
        </li>
        <li>
          <span>Cutting-Edge Technology:</span> Staying ahead of trends to
          ensure top-tier performance.
        </li>
        <li>
          <span>End-to-End Solutions:</span> Comprehensive services to address
          all your tech needs.
        </li>
      </ul>
    </div>
  );
};

export default WhyChooseUs;
