import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const CourseCard = ({ name, description, url }) => {
  return (
    <div className={styles.course}>
      <div className={styles.thumbnail}></div>
      <div className={styles.details}>
        <h3>{name}</h3>
        <p>{description}</p>
        <Link to={`/courses/${url}`}>Read More &gt;</Link>
      </div>
    </div>
  );
};

export default CourseCard;
