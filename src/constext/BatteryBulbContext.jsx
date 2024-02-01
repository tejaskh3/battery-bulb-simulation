import { createContext, useState } from "react";

export const BatteryBulbContext = createContext({});

export const BatterBulbProvider = ({ children }) => {
  const [numberOfBulb, setNumberOfBulb] = useState(0);
  const [numberOfBattery, setNumberOfBattery] = useState(0);
  const powerPerBattery = 1000;
  const totalPower = numberOfBattery * powerPerBattery;
  const powerConsumptionPerBulb = 10;
  const powerNeeded = numberOfBulb * powerConsumptionPerBulb;

  // bulb controllers
  const addBulb = () => {
    setNumberOfBulb((prev) => prev + 1);
  };
  const removeBulb = () => {
    if (numberOfBulb <= 0) {
      alert("Please provider at least one bulb to remove.");
      return;
    }
    setNumberOfBulb((prev) => {
      prev - 1;
    });
  };

  // batteryControllers
  const addBattery = () => {
    setNumberOfBattery((prev) => prev + 1);
  };
  const removeBattery = () => {
    if (numberOfBattery <= 0) {
      alert("please add at least one battery to remove.");
      return;
    }
    setNumberOfBattery((prev) => prev - 1);
  };

  const value = {
    numberOfBattery,
    addBattery,
    removeBattery,
    numberOfBulb,
    addBulb,
    removeBulb,
  };

  return (
    <BatteryBulbContext.Provider value={value}>
      {children}
    </BatteryBulbContext.Provider>
  );
};
