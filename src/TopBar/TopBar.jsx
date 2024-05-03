import React, { useState } from "react";
import styles from "./TopBar.module.css";
import SearchIcon from '../assets/SearchIcon'
import Avatar from '../assets/Avatar.png'
import Dots from "../assets/Dots";
import Notification from "../assets/Notification"; 



function TopBar() {
  const [search, setSearch] = useState("");
  const searchChangeHandler = (event) => {
    setSearch(event.target.value);
  };
  
  return (
    <>
      <div className={styles.wrapper}>
        <label for="search">
          <SearchIcon className={styles.SImg}></SearchIcon>
          <input
            className={styles.searchBar}
            type="text"
            placeholder="Введите ID заказа"
            value={search}
            onChange={searchChangeHandler}
            id="search"
          />
        </label>
        <div className={styles.userWrapper}>
          <div className={styles.userSpace}>
            <div>
              <img src={Avatar} alt="" className={styles.userAvatar}/>
            </div>
            <span className={styles.userName}>younofl312w@gmail.com</span>
            <button className={styles.userOptions}><Dots></Dots></button>
          </div>
          <div className={styles.notifications}><Notification></Notification></div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
