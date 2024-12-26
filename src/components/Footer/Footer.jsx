import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerList}>
        <li className={styles.footerItem}>
          <div className={styles.logo}></div>
        </li>
        <li className={styles.footerItem}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
          delectus?
        </li>
      </ul>
      <ul className={styles.footerList}>
        <li className={styles.footerItemHeader}>Links</li>
        <li className={styles.footerItem}>Careers</li>
        <li className={styles.footerItem}>Blog</li>
        <li className={styles.footerItem}>Press</li>
        <li className={styles.footerItem}>Privacy Policy</li>
        <li className={styles.footerItem}>Contact Us</li>
      </ul>
      <ul className={styles.footerList}>
        <li className={styles.footerItemHeader}>Links</li>
        <li className={styles.footerItem}>Careers</li>
        <li className={styles.footerItem}>Blog</li>
        <li className={styles.footerItem}>Press</li>
        <li className={styles.footerItem}>Privacy Policy</li>
      </ul>
    </footer>
  );
};

export default Footer;
