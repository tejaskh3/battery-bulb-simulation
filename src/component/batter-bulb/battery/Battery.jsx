import React from "react";
import styles from "./battery.module.css";

const Battery = ({ percentLeft }) => {
  const batteryDrained = percentLeft === 0;
  return (
    <div className={styles.batteryContainer}>
      <div className={styles.batteryItem}>
        {/* height needs to be changed dynamically  */}
        <div
          className={`${styles.batteryLevel} ${batteryDrained && styles.alert}`}
          style={{ height: `${percentLeft}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Battery;
