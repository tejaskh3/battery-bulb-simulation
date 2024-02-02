import React, { useContext } from "react";
import { BatteryBulbContext } from "../../../context/BatteryBulbContext";
import styles from "./bulb.module.css";
import Bulb from "./Bulb";

const BulbContainer = () => {
  const { numberOfBulb, addBulb, removeBulb, isBatteryLeft, drainBattery } =
    useContext(BatteryBulbContext);
  const Bulbs = Array.from({ length: numberOfBulb }).map((_, index) => {
    return (
      <Bulb
        key={index}
        isBatteryLeft={isBatteryLeft}
        drainBattery={drainBattery}
      />
    );
  });
  return (
    <div className={styles.batteryContainer}>
      <h2>Bulbs</h2>
      <div className={styles.buttonContainer}>
        <button onClick={addBulb}>Add</button>
        <button onClick={removeBulb}>Remove</button>
      </div>
      <div
        className={`${styles.batteriesContainerMain} ${
          numberOfBulb > 0 ? styles.batteryContainerShadow : ""
        }`}
      >
        {Bulbs}
      </div>
    </div>
  );
};

export default BulbContainer;
