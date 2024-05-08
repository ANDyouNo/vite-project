import React from 'react';
import TopBar from '../TopBar/TopBar';
import styles from './Orders.module.css'

function Orders() {
  return (
    <div className={styles.wrap}>
      <TopBar></TopBar>
      <div className={styles.content}>
      <h2>Orders</h2>
      <p>Заказ 1</p>
      <p>Заказ 3</p>
      <p>Заказ 2</p>
      </div>
    </div>
  );
}

export default Orders;