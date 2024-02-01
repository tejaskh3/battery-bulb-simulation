import React from "react";
import styles from "./battery.module.css";
const Battery = ({numberOf}) => {
  return (
    <div className={styles.container}>
      <span>+</span>
      <span>-</span>
    </div>
  );
};

export default Battery;
