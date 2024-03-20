import React from "react";
import TopBar from "../TopBar/TopBar";
import Calendar from "../Calendar/Calendar";

import styles from "./Statistics.module.css";

function Statistics() {
  return (
    <div className={styles.wrapper}>
      <TopBar></TopBar>
      <div className={styles.header}>
        <h1>Статистика</h1>
        <Calendar></Calendar>
      </div>
      <div className={styles.fourRows}>
        <div className={styles.miniCard}>1</div>
        <div className={styles.miniCard}>2</div>
        <div className={styles.miniCard}>3</div>
        <div className={styles.miniCard}>4</div>
      </div>
      <div className={styles.threeRows}>
        <div className={styles.smallCard}>small</div>
        <div className={styles.bigCard}>big</div>
        <div className={styles.smallCard}>small</div>
      </div>
    </div>
  );
}

export default Statistics;
