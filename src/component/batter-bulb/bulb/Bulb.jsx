import React from "react";

const Bulb = () => {
  const glowing = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
  const notGlowing = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
  return <img src={notGlowing} style={{ height: "50px", width: "50px" }} />;
};

export default Bulb;
