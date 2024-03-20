import React from "react";
import styles from "./TopBar.module.css";

function TopBar() {
  return (
    <>
      <div className={styles.wrapper}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Поиск"
          value=""
          onChange="{handleChange}"
        />
        <div className={styles.userWrapper}>
          <div className={styles.username}></div>
          <div className={styles.notifications}></div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
