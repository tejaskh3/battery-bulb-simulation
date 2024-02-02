import { createContext, useState } from "react";

export const BatteryBulbContext = createContext({});

export const BatterBulbProvider = ({ children }) => {
  const [numberOfBulb, setNumberOfBulb] = useState(0);
  const [numberOfBattery, setNumberOfBattery] = useState([]);
  const isBatteryLeft = numberOfBattery?.some(
    (battery) => battery.unitsLeft > 0
  );
  console.log(numberOfBulb);
  // bulb controllers
  const addBulb = () => {
    setNumberOfBulb((prev) => prev + 1);
  };
  const removeBulb = () => {
    if (numberOfBulb <= 0) {
      alert("Please provider at least one bulb to remove.");
      return;
    }
    setNumberOfBulb((prev) => prev -  1);
  };

  // batteryControllers
  const addBattery = () => {
    setNumberOfBattery((prev) => {
      const isOtherBatteryDraining = prev.find(
        (item) => item.isDraining === true
      );
      return [
        ...prev,
        { unitsLeft: 1000, isDraining: !isOtherBatteryDraining },
      ];
    });
  };
  const removeBattery = () => {
    if (numberOfBattery.length <= 0) {
      alert("please add at least one battery to remove.");
      return;
    }
    setNumberOfBattery((prev) => {
      const newBatteries = prev.slice(0, -1);
      return newBatteries;
    });
  };

  // controller for draining battery
  function drainBattery() {
    // isDraining can be added here.
    // use context for data;
    setNumberOfBattery((prev) => {
      // name change
      const newValue = [...prev];
      const drainingBattery = newValue.find(
        (battery) => battery.isDraining === true
      );
      if (
        drainingBattery &&
        drainingBattery?.unitsLeft <= 0 &&
        newValue?.length > 1
      ) {
        // isDraining can be moved to a function
        const indexofDrainedBattery = newValue.findIndex(
          (battery) => battery.isDraining === true
        );
        // this logic can be separated into another function.
        const nextBattery = newValue[indexofDrainedBattery + 1];
        if (!nextBattery) return newValue;
        nextBattery.isDraining = true;
        drainingBattery.isDraining = false;
        console.log(newValue, "new value");
        return newValue;
      }
      drainingBattery.unitsLeft -= 10;
      return newValue;
    });
  }

  const value = {
    numberOfBattery,
    addBattery,
    removeBattery,
    numberOfBulb,
    addBulb,
    removeBulb,
    isBatteryLeft,
    drainBattery,
  };

  return (
    <BatteryBulbContext.Provider value={value}>
      {children}
    </BatteryBulbContext.Provider>
  );
};
