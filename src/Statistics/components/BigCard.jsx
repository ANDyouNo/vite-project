import React from "react";
import styles from "./BigCard.module.css";

function BigCard() {
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

  return (
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
        <table>
          <tr>
            <h5 className={styles.headers}>Заказы</h5>
            <h5 className={styles.headers}>Стоимость</h5>
            <h5 className={styles.headers}>Налог</h5>
            <h5 className={styles.headers}>Клиент</h5>
            <h5 className={styles.headers}>Водитель</h5>
          </tr>
          <tr>
            <button className={styles.order}>{orders[0].orderNumber}</button>
            <span className={styles.price}>₽{orders[0].price}</span>
            <span className={styles.tax}>₽{orders[0].tax}</span>
            <button className={styles.customer}>{orders[0].customer}</button>
            <span className={styles.driver}>{orders[0].driver}</span>
          </tr>
          <tr>
            <button className={styles.order}>{orders[0].orderNumber}</button>
            <span className={styles.price}>₽{orders[0].price}</span>
            <span className={styles.tax}>₽{orders[0].tax}</span>
            <button className={styles.customer}>{orders[0].customer}</button>
            <span className={styles.driver}>{orders[0].driver}</span>
          </tr>
          <tr>
            <button className={styles.order}>{orders[0].orderNumber}</button>
            <span className={styles.price}>₽{orders[0].price}</span>
            <span className={styles.tax}>₽{orders[0].tax}</span>
            <button className={styles.customer}>{orders[0].customer}</button>
            <span className={styles.driver}>{orders[0].driver}</span>
          </tr>
        </table>
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
  );
}

export default BigCard;
