import React from "react";
import styles from "./Calendar.module.css";

function Calendar() {
  const data = {
    start: Date.now(),
    end: Date.now(),
  };
  return (
    <>
      <button className={styles.calendarButton}></button>
    </>
  );
}

export default Calendar;
