import React from "react";

import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.contactUsSection}>
      <h2>Let’s Build Together!</h2>
      <p>
        Whether you're looking to enhance your software quality, develop a web
        application, or create a custom solution, CodeTestify.io is here to
        help. Contact us today and take the first step towards transforming your
        vision into reality.
      </p>
      <form>
        <input type="email" placeholder="Your Email" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default ContactUs;
