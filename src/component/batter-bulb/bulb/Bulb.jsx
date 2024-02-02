import React, { useEffect } from "react";

const Bulb = ({ isBatteryLeft, drainBattery }) => {
  const glowing = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
  const notGlowing = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
  const imageSource = isBatteryLeft ? glowing : notGlowing;

  useEffect(() => {
    let timer;
    if (!isBatteryLeft) {
      clearInterval(timer);
      return;
    }

    timer = setInterval(() => {
      drainBattery();
    }, 1000);

    return () => clearInterval(timer);
  }, [isBatteryLeft]);

  return <img src={imageSource} style={{ height: "50px", width: "50px" }} />;
};

export default Bulb;
