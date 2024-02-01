import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./app.module.css";

import Bulb from "./component/bulb/Bulb";
import Battery from "./component/battery/Battery";

function App() {
  
  const [totalPower, setTotalPower] = useState(numberOfBattery * 1000);
  const [powerNeeded, setPowerNeeded] = useState(numberOfBulb * 10);
  useEffect(() => {
    let intervalId = null;

    if (totalPower > 0 && numberOfBulb > 0) {
      intervalId = setInterval(() => {
        console.log(totalPower);
        setTotalPower((prevTotalPower) => prevTotalPower - powerNeeded);
        if (totalPower <= 0) {
          // setNumberOfBulb((prevNumberOfBulb) => prevNumberOfBulb - 1);
          setTotalPower(numberOfBattery * 1000);
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [totalPower, numberOfBulb, numberOfBattery]);

  // useEffect(() => {
  //   let intervalId = null;
  //   if (numberOfBattery > 0 && numberOfBulb > 0) {
  //     intervalId = setInterval(() => {
  //       console.log(totalPower);
  //       setTotalPower((prevTotalPower) => prevTotalPower - powerNeeded);
  //     }, 1000);
  //   }

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [numberOfBattery, numberOfBulb, powerNeeded]);

  // Update powerNeeded whenever numberOfBulb changes
  useEffect(() => {
    setPowerNeeded(numberOfBulb * 10);
  }, [numberOfBulb]);

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.batteryContainer}>
          {[...Array(numberOfBattery).keys()].map((_, i) => (
            <div className={styles.batteries} key={i}>
              <Battery />
            </div>
          ))}
        </div>
        <div className={styles.batterButtonContainer}>
          <button
            onClick={() => {
              setNumberOfBattery(numberOfBattery + 1);
              setTotalPower(numberOfBattery * 1000);
            }}
          >
            increase
          </button>
          <button
            onClick={() => {
              if (numberOfBattery == 0) {
                alert("there is no battery to remove please add one.");
                return;
              }
              setNumberOfBattery(numberOfBattery - 1);
              setTotalPower(numberOfBattery * 100);
            }}
          >
            decrease
          </button>
        </div>
      </div>
      <div className={styles.bulbContainer}>
        {[...Array(numberOfBulb).keys()].map((_, index) => (
          <div style={{ width: "100%" }}>
            <Bulb
              key={index}
              totalPower={totalPower}
              powerNeeded={powerNeeded}
            />
          </div>
        ))}
      </div>
      <div className={styles.batterButtonContainer}>
        <button
          onClick={() => {
            setNumberOfBulb(numberOfBulb + 1);
            setPowerNeeded(numberOfBulb * 10);
          }}
        >
          add bulb
        </button>
        <button
          onClick={() => {
            if (numberOfBulb == 0) {
              alert("there is no bulb to remove please add one.");
              return;
            }
            setNumberOfBulb(numberOfBulb - 1);
            setPowerNeeded(numberOfBulb * 10);
          }}
        >
          remove bulb
        </button>
      </div>
    </div>
  );
}

export default App;
