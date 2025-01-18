import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <div>
          <h3>About Us</h3>
          <ul>
            <li>
              <a href="#">Mission and Vission</a>
            </li>
            <li>
              <a href="#">Caeers</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#">Quality Assurance</a>
            </li>
            <li>
              <a href="#">Software Automation</a>
            </li>
            <li>
              <a href="#">Web Development</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="#">Email: info@codetestify.in</a>
            </li>

            <li>
              <a href="#">+123-456-7890</a>
            </li>
            <li>
              <a href="#">Address:</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Services</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        © 2025 CodeTestify.io. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
