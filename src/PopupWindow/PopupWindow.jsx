import React from "react";
import styles from "./PopupWindow.module.css";
import Home from "../assets/Home";
import niceWork from "../assets/niceWork.jpg";

function PopupWindow({ onClose }) {
  return (
    <div className={styles.popupContainer}>
      <div className={styles.popup}>
        <div className={styles.closeBtn} onClick={onClose}>
          <Home></Home>
        </div>
        <a href="https://andyouno.github.io/empty_page/">
          Этот функционал еще в разработке
        </a>
        <img src={niceWork} alt="Картинка" className={styles.image} />
      </div>
    </div>
  );
}

export default PopupWindow;
