import React from "react";
import styles from "./Calendar.module.css";
import CalendarIcon from "../assets/CalendarIcon";

function Calendar() {
  function getMonthName(month) {
    const monthNames = [
      "Янв",
      "Фев",
      "Мар",
      "Апр",
      "Мая",
      "Июн",
      "Июл",
      "Авг",
      "Сен",
      "Окт",
      "Ноя",
      "Дек",
    ];
    return monthNames[month];
  }

  function formatDate(date) {
    const day = date.getDate();
    const month = getMonthName(date.getMonth());
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  console.log(formattedDate); //"3 Мая 2024"

  let futureDate = new Date(currentDate);
  futureDate.setDate(futureDate.getDate() + 7);

  return (
    <>
      <button className={styles.calendarButton}>
        <CalendarIcon className={styles.icon}></CalendarIcon>{" "}
        <span className={styles.text}>
          {formatDate(currentDate)} - {formatDate(futureDate)}
        </span>
      </button>
    </>
  );
}

export default Calendar;
