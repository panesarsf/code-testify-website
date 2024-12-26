import React from "react";
import { Link } from "react-router-dom";
import styles from "./SectionHeading.module.css";

const SectionHeading = ({ heading, url }) => {
  return (
    <div className={styles.heading}>
      <h2>{heading}</h2>
      <Link to={`/${url}`}>See More</Link>
    </div>
  );
};

export default SectionHeading;
