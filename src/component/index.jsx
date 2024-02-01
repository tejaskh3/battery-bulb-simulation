import React from "react";
import styles from "./index.module.css";
import BatteryContainer from "./batter-bulb/battery/BatteryContainer";
import BulbContainer from "./batter-bulb/bulb/BulbContainer";
const BatterBulbWrapper = () => {
  return (
    <div className={styles.container}>
      <BatteryContainer></BatteryContainer>
      <BulbContainer></BulbContainer>
    </div>
  );
};

export default BatterBulbWrapper;
