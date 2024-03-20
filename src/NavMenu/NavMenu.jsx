import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavMenu.module.css";
import ContactIcon from "../assets/ContactIcon";
import DriverIcon from "../assets/DriversIcon";
import MessagesIcon from "../assets/MessagesIcon";
import OrdersIcon from "../assets/OrdersIcon";
import StatisticsIcon from "../assets/StatisticIcon";
import Logo from "../assets/Logo";

function NavMenu() {
  return (
    <div className={styles.menuContainer}>
      <Logo />
      <nav className={styles.menu}>
        <Link to="/" className={styles.menuItem}>
          <OrdersIcon />
          <span>Заказы</span>
        </Link>
        <Link to="/Statistics" className={styles.menuItem}>
          <StatisticsIcon />
          <span>Статистика</span>
        </Link>
        <Link to="/Drivers" className={styles.menuItem}>
          <DriverIcon />
          <span>Водители</span>
        </Link>
        <Link to="/Contacts" className={styles.menuItem}>
          <ContactIcon />
          <span>Контакты</span>
        </Link>
        <Link to="/Messages" className={styles.menuItem}>
          <MessagesIcon />
          <span>Сообщения</span>
        </Link>
      </nav>
    </div>
  );
}

export default NavMenu;
