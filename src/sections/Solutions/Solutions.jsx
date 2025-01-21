import React from "react";

import styles from "./Solutions.module.css";

const Solutions = () => {
  return (
    <div className={styles.solutions} id="solutions">
      <h2>Solutions</h2>
      <p>
        Tailored to meet the unique needs of your business, our solutions focus
        on innovation and sustainability:
      </p>
      <ol className={styles.container}>
        <li className={styles.solution}>
          <h3>Custom Software Development</h3>
          <p>Solutions built to align with your business goals.</p>
        </li>
        <li className={styles.solution}>
          <h3>Digital Lending Solutions</h3>
          <p>Empowering businesses with secure and scalable digital tools.</p>
        </li>
        <li className={styles.solution}>
          <h3>Internet of Things (IoT)</h3>
          <p>Smart solutions to connect and optimize your devices.</p>
        </li>
      </ol>
    </div>
  );
};

export default Solutions;
