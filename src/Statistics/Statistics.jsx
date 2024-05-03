import React from "react";
import TopBar from "../TopBar/TopBar";
import Calendar from "../Calendar/Calendar";
import MiniCard from "./components/MiniCard";
import BigCard from "./components/BigCard";


import styles from "./Statistics.module.css";

function Statistics() {
  const data = [
    {
      value: 164943.0,
      color: "red",
      text: "Эта неделя",
      percentage: 25,
      orders: {
        total: 18,
        new: 1,
        appointed: 2,
        takenAway: 5,
        delivered: 2,
        check: 3,
        paid: 5,
        deleted: 0,
        archived: 0,
      },
    },
    {
      value: 250234.0,
      color: "orange",
      text: "Прошлая неделя",
      percentage: 50,
    },
    {
      value: 422537.0,
      color: "green",
      text: "Ваша лучшая неделя",
      percentage: 100,
    },
    {
      //Аванс
      value: 0,
    },
    {
      //Бонусы
      value: 1152,
    },
    {
      //Штрафы
      value: 1152,
    },
  ];

  const orders = [
    {
      orderNumber: "98H8594B",
      price: 3400,
      tax: 300,
      customer: "Западная грузовая компания",
      driver: "Иван Дока",
    },
  ];

  const percentage = 80;
  const color = "lightgreen";

  // Вычисляем общую сумму для определения долей в процентах
  const total = data.reduce((acc, item) => acc + item.value, 0);
  const percentages = data.map((item) =>
    Math.round((item.value / total) * 100)
  );
  return (
    <div className={styles.wrapper}>
      <TopBar></TopBar>
      <div className={styles.header}>
        <h1>Статистика</h1>
        <Calendar></Calendar>
      </div>
      
      <MiniCard></MiniCard>
      
      <BigCard></BigCard>
      
    </div>
  );
}

export default Statistics;
