import React, { useContext } from "react";
import { BatteryBulbContext } from "../../../context/BatteryBulbContext";
import styles from "./battery.module.css";
import Battery from "./Battery";
const BatteryContainer = () => {
  const { addBattery, removeBattery, numberOfBattery } =
    useContext(BatteryBulbContext);
  const Batteries = numberOfBattery?.map((battery) => {
    const percentage = (battery.unitsLeft / 1000) * 100;
    return <Battery percentLeft={percentage} />;
  });

  return (
    <div className={styles.batteryContainer}>
      <h2>Batteries</h2>
      <div className={styles.buttonContainer}>
        <button onClick={addBattery}>Add</button>
        <button onClick={removeBattery}>Remove</button>
      </div>
      <div
        className={`${styles.batteriesContainerMain}
        ${numberOfBattery ? styles.batteryContainerShadow : ""}`}
      >
        {Batteries}
      </div>
    </div>
  );
};

export default BatteryContainer;
