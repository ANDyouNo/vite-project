import React from "react";
import OrderStat from "../../assets/OrderStat";
import PaidStat from "../../assets/PaidStat";
import NonpaidStat from "../../assets/NonpaidStat";
import ZpStat from "../../assets/ZpStat";
import styles from "./MiniCard.module.css";

function MiniCard() {
  const data = {
    weekOrdersAll: "575.00",
    weekOrdersPaid: "417159.00",
    weekOrdersUnpaid: "205890.00",
    yourSalary: ["99872.00", "0", "134", "234"],
  };

  return (
    <div className={styles.fourRows}>
      <div className={styles.miniCard}>
        <div className={styles.icon} style={{ "background-color": "#e8f0fa" }}>
          <OrderStat></OrderStat>
        </div>
        <span className={styles.statName}>Все заказы на этой неделе</span>
        <span className={styles.statValue}> ₽ {data.weekOrdersAll} </span>
      </div>

      <div className={styles.miniCard}>
        <div className={styles.icon} style={{ "background-color": "#EDF8F4" }}>
          <PaidStat></PaidStat>
        </div>
        <span className={styles.statName}>Все заказы на этой неделе</span>
        <span className={styles.statValue}>₽ {data.weekOrdersPaid}</span>
      </div>

      <div className={styles.miniCard}>
        <div className={styles.icon} style={{ "background-color": "#FDECE9" }}>
          <NonpaidStat></NonpaidStat>
        </div>
        <span className={styles.statName}>Все заказы на этой неделе</span>
        <span className={styles.statValue}>₽ {data.weekOrdersUnpaid}</span>
      </div>

      <div className={styles.lastCard}>
        <div className={styles.wrap}>
          <div
            className={styles.icon}
            style={{ "background-color": "#FEF6EE" }}
          >
            <ZpStat></ZpStat>
          </div>
          <span className={styles.statName}>Все заказы на этой неделе</span>
          <span className={styles.statValue}>₽ {data.yourSalary[0]}</span>
        </div>
        <div className={styles.wrap}>
          <div
            className={styles.microCard}
            style={{
              "border-bottom": "1px solid #e9ebef",
              "border-left": "1px solid #e9ebef",
            }}
          >
            <span className={styles.microCardName}>Аванс</span>
            <span className={styles.microCardValue}>
              {data.yourSalary[1]} ₽
            </span>
          </div>
          <div
            className={styles.microCard}
            style={{
              "border-bottom": "1px solid #e9ebef",
              "border-left": "1px solid #e9ebef",
            }}
          >
            <span className={styles.microCardName}>Бонусы</span>
            <span className={styles.microCardValue}>
              {data.yourSalary[2]} ₽
            </span>
          </div>
          <div
            className={styles.microCard}
            style={{ "border-left": "1px solid #e9ebef" }}
          >
            <span className={styles.microCardName}>Штрафы</span>
            <span className={styles.microCardValue}>
              {data.yourSalary[3]} ₽
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniCard;
