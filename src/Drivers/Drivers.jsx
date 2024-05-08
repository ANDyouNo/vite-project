import React from "react";
import TopBar from "../TopBar/TopBar";
import Tabs from "./components/Tabs";
import styles from "./Drivers.module.css"; // Импорт модуля CSS
import RightBarActivity from "./components/RightBarActivity";

function Drivers() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.genSec}>
        <TopBar></TopBar>
        <h1>Водители</h1>
        <Tabs></Tabs>
      </div>
      <RightBarActivity></RightBarActivity>
    </div>
  );
}

export default Drivers;
