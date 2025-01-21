import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./Navbar.module.css";

const links = [
  {
    to: "#services",
    label: "Build",
    submenu: [
      "Custom Software Development",
      "Web Application Development",
      "Salesforce Implementation and Customization",
      "Internet of Things (IoT) Solutions",
      "Digital Lending Solutions",
    ],
  },
  {
    to: "#salesforce",
    label: "Run",
    submenu: [
      "Software Automation",
      "Robotic Process Automation (RPA)",
      "DevOps Solutions",
      "Site Reliability Engineering (SRE)",
      "Integration Services",
    ],
  },
  {
    to: "#solutions",
    label: "Test",
    submenu: [
      "Quality Assurance (QA)",
      "Performance Assurance",
      "Cloud Assurance",
      "Functional Assurance",
      "Application Performance Management (APM)",
    ],
  },
  { to: "#about-us", label: "About" },
  { to: "tel:+123-456-7890", label: "Schedule" },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const [dropdown, setDropdown] = useState({
    Build: false,
    Run: false,
    Test: false,
  });

  const handleMouseEnter = (link) => {
    setDropdown((prev) => ({ ...prev, [link]: true }));
  };

  const handleMouseLeave = (link) => {
    setDropdown((prev) => ({ ...prev, [link]: false }));
  };

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
          <li
            key={link.to}
            onMouseEnter={() => handleMouseEnter(link.label)}
            onMouseLeave={() => handleMouseLeave(link.label)}
          >
            <a href={link.to} onClick={() => setMenu(false)}>
              {link.label}
            </a>
            {link.submenu && dropdown[link.label] && (
              <ol>
                {link.submenu.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
