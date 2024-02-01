import React from "react";
import styles from "./battery.module.css";

const Battery = () => {
  const batteryDrained = false;
  return (
    <div className={styles.batteryContainer}>
      <div className={styles.batteryItem}>
        {/* height needs to be changed dynamically  */}
        <div
          className={`${styles.batteryLevel} ${batteryDrained && styles.alert}`}
          style={{ height: "100%" }}
        ></div>
      </div>
    </div>
  );
};

export default Battery;
