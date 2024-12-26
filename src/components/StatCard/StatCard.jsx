import React from "react";
import styles from "./StatCard.module.css";

const StatCard = ({ value, label }) => {
  return (
    <div className={styles.stats}>
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  );
};

export default StatCard;
