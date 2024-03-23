import React from "react";
import TopBar from "../TopBar/TopBar";
import Calendar from "../Calendar/Calendar";
import OrderStat from "../assets/OrderStat";
import PaidStat from "../assets/PaidStat";
import NonpaidStat from "../assets/NonpaidStat";
import ZpStat from "../assets/ZpStat";

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
      <div className={styles.fourRows}>
        <div className={styles.miniCard}>
          <div
            className={styles.icon}
            style={{ "background-color": "#e8f0fa" }}
          >
            <OrderStat></OrderStat>
          </div>
          <span className={styles.statName}>Все заказы на этой неделе</span>
          <span className={styles.statValue}>₽ {data[0].value}</span>
        </div>

        <div className={styles.miniCard}>
          <div
            className={styles.icon}
            style={{ "background-color": "#EDF8F4" }}
          >
            <PaidStat></PaidStat>
          </div>
          <span className={styles.statName}>Все заказы на этой неделе</span>
          <span className={styles.statValue}>₽ {data[0].value}</span>
        </div>

        <div className={styles.miniCard}>
          <div
            className={styles.icon}
            style={{ "background-color": "#FDECE9" }}
          >
            <NonpaidStat></NonpaidStat>
          </div>
          <span className={styles.statName}>Все заказы на этой неделе</span>
          <span className={styles.statValue}>₽ {data[0].value}</span>
        </div>

        <div className={styles.miniCard}>
          <div
            className={styles.icon}
            style={{ "background-color": "#FEF6EE" }}
          >
            <ZpStat></ZpStat>
          </div>
          <span className={styles.statName}>Все заказы на этой неделе</span>
          <span className={styles.statValue}>₽ {data[0].value}</span>
        </div>
      </div>
      <div className={styles.threeRows}>
        <div className={styles.smallCard}>
          <h3 className={styles.summaryHeader}>Сводка доходов</h3>
          <div className={styles.daigramsContainer}>
            <div className={styles.diagram}>
              <div
                className={`${styles.pie} ${styles.animate}`}
                style={{
                  "--p": `${data[0].percentage}`,
                  "--c": `${data[0].color}`,
                }}
              >
                ₽{data[0].value}
              </div>
              <span className={styles.diagramLegend}>Эта неделя</span>
            </div>
            <div className={styles.diagram}>
              <div
                className={`${styles.pie} ${styles.animate}`}
                style={{
                  "--p": `${data[1].percentage}`,
                  "--c": `${data[1].color}`,
                }}
              >
                ₽{data[0].value}
              </div>
              <span className={styles.diagramLegend}>Прошлая неделя</span>
            </div>
            <div className={styles.diagram}>
              <div
                className={`${styles.pie} ${styles.animate}`}
                style={{
                  "--p": `${data[2].percentage}`,
                  "--c": `${data[2].color}`,
                }}
              >
                ₽{data[0].value}
              </div>
              <span className={styles.diagramLegend}>Ваша лучшая неделя</span>
            </div>
          </div>
        </div>

        <div className={styles.bigCard}>
          <div className={styles.orders}>
            <h5>Заказы</h5>
            <button className={styles.order}>{orders[0].orderNumber}</button>
            <button className={styles.order}>{orders[0].orderNumber}</button>
            <button className={styles.order}>{orders[0].orderNumber}</button>
          </div>

          <div className={styles.prices}>
            <h5>Стоимость</h5>
            <span className={styles.price}>{orders[0].price}</span>
            <span className={styles.price}>{orders[0].price}</span>
            <span className={styles.price}>{orders[0].price}</span>
          </div>

          <div className={styles.taxes}>
            <h5>Налог</h5>
            <span className={styles.tax}>{orders[0].tax}</span>
            <span className={styles.tax}>{orders[0].tax}</span>
            <span className={styles.tax}>{orders[0].tax}</span>
          </div>

          <div className={styles.customers}>
            <h5>Клиент</h5>
            <button className={styles.customer}>{orders[0].customer}</button>
            <button className={styles.customer}>{orders[0].customer}</button>
            <button className={styles.customer}>{orders[0].customer}</button>
          </div>

          <div className={styles.drivers}>
            <h5>Водитель</h5>
            <span className={styles.driver}>{orders[0].driver}</span>
            <span className={styles.driver}>{orders[0].driver}</span>
            <span className={styles.driver}>{orders[0].driver}</span>
          </div>
        </div>

        <div className={styles.smallCard}>
          <h3 className={styles.summaryHeader}>
            Все заказы на этой неделе {data[0].orders.total}
          </h3>
          <div className={styles.ordersContainer}>
            <div className={styles.ordersLine}>
              <span>Новые</span>
              <span>{data[0].orders.new}</span>
            </div>
            <div className={styles.ordersLine}>
              <span>Назначенные</span>
              <span>{data[0].orders.appointed}</span>
            </div>
            <div className={styles.ordersLine}>
              <span>Забрано</span>
              <span>{data[0].orders.takenAway}</span>
            </div>
            <div className={styles.ordersLine}>
              <span>Доставлены</span>
              <span>{data[0].orders.delivered}</span>
            </div>
            <div className={styles.ordersLine}>
              <span>Счет</span>
              <span>{data[0].orders.check}</span>
            </div>
            <div className={styles.ordersLine}>
              <span>Оплачены</span>
              <span>{data[0].orders.paid}</span>
            </div>
            <div className={styles.ordersLine}>
              <span>Удаленные</span>
              <span>{data[0].orders.deleted}</span>
            </div>
            <div className={styles.ordersLine}>
              <span>Архивированные</span>
              <span>{data[0].orders.archived}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
