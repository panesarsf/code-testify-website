import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./Navbar.module.css";

const links = [
  { to: "/", label: "Home" },
  { to: "#about-us", label: "About Us" },
  { to: "#services", label: "Services" },
  { to: "#salesforce", label: "Salesforce" },
  { to: "#solutions", label: "Solutions" },
  { to: "tel:+123-456-7890", label: "Schedule" },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} alt="logo">
        CodeTestify.io
      </div>
      <CiMenuFries className={styles.menu} onClick={() => setMenu(true)} />

      <ul className={`${styles.navList} ${menu ? styles.active : ""}`}>
        <li className={styles.logo}>
          CodeTestify.io{" "}
          <AiOutlineClose
            className={styles.menu}
            onClick={() => setMenu(false)}
          />
        </li>
        {links.map((link) => (
          <li key={link.to}>
            <a href={link.to} onClick={() => setMenu(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
