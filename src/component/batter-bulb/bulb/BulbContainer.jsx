import React, { useContext } from "react";
import { BatteryBulbContext } from "../../../context/BatteryBulbContext";
const BulbContainer = () => {
  const { numberOfBulb } = useContext(BatteryBulbContext);
  console.log(numberOfBulb);
  return <div>BulbContainer</div>;
};

export default BulbContainer;
