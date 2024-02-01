import React from "react";
import styles from "./bulb.module.css";

const Bulb = ({ totalPower, powerNeeded }) => {
  const glow = totalPower > powerNeeded ? styles.glow : "";
  return <div className={`${styles.container}  ${glow}`}></div>;
};

export default Bulb;
