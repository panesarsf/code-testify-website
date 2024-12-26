import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact Us" },
  { to: "/solutions", label: "Solutions" },
  { to: "/courses", label: "Courses" },
  { to: "/schedule", label: "Schedule" },
];

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} alt="Space Code Logo">
        Space Code Logo
      </div>
      <ul className={styles.navList}>
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
