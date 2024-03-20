import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavMenu.module.css";
import ContactIcon from "../assets/ContactIcon";
import DriverIcon from "../assets/DriversIcon";
import MessagesIcon from "../assets/MessagesIcon";
import OrdersIcon from "../assets/OrdersIcon";
import StatisticsIcon from "../assets/StatisticIcon";
import Logo from "../assets/Logo";

function NavMenu() {
  const location = useLocation();
  console.log("Текущий URL:", location.pathname);
  return (
    <div className={styles.menuContainer}>
      <Logo />
      <nav className={styles.menu}>
        <Link
          to="/Statistics"
          className={
            location.pathname === "/Statistics"
              ? styles.active
              : styles.menuItem
          }
        >
          <StatisticsIcon />
          <span>Статистика</span>
        </Link>
        <Link
          exact
          to="/"
          className={
            location.pathname === "/" ? styles.active : styles.menuItem
          }
        >
          <OrdersIcon />
          <span>Заказы</span>
        </Link>
        <Link
          to="/Drivers"
          className={
            location.pathname === "/Drivers" ? styles.active : styles.menuItem
          }
        >
          <DriverIcon />
          <span>Водители</span>
        </Link>
        <Link
          to="/Contacts"
          className={
            location.pathname === "/Contacts" ? styles.active : styles.menuItem
          }
        >
          <ContactIcon />
          <span>Контакты</span>
        </Link>
        <Link
          to="/Messages"
          className={
            location.pathname === "/Messages" ? styles.active : styles.menuItem
          }
        >
          <MessagesIcon />
          <span>Сообщения</span>
        </Link>
      </nav>
    </div>
  );
}

export default NavMenu;
