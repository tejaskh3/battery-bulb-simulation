import React, { useContext } from "react";
import { BatteryBulbContext } from "../../../context/BatteryBulbContext";
const BatteryContainer = () => {
  const { numberOfBattery } = useContext(BatteryBulbContext);
  console.log(numberOfBattery);
  return <div>BatteryContainer</div>;
};

export default BatteryContainer;
