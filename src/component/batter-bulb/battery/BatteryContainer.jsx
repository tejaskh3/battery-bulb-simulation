import React, { useContext } from "react";
import { BatteryBulbContext } from "../../../context/BatteryBulbContext";
const BatteryContainer = () => {
  const { numberOfBatteries } = useContext(BatteryBulbContext);
  console.log(numberOfBatteries);
  return <div>BatteryContainer</div>;
};

export default BatteryContainer;
