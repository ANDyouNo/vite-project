import React from "react";
import styles from "./RightBar.module.css";
import Edit from "../../assets/Edit";
import Avatar from "../../assets/Avatar.png";

function RightBar() {
  const data = {
    name: "Логан Столяров",
    adress: "+7 904 341 78 94",
    city: "Ростов-на-Дону",
    region: "Ростовская область",
    index: "344000",
    email: "younofl312w@gmail.com",
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.person}>
        <img src={Avatar} alt="" className={styles.avatar} />
        <button className={styles.direction}>
          Доставка по всему побережью
        </button>
        <span className={styles.phone}>+7 904 341 78 94</span>
      </div>
      <hr />
      <div className={styles.details}>
        <div className={styles.line}>
          <span className={styles.sign}>Имя</span>
          <span className={styles.value}>{data.name}</span>
        </div>
        <div className={styles.line}>
          <span className={styles.sign}>Адрес</span>
          <span className={styles.value}>{data.adress}</span>
        </div>
        <div className={styles.line}>
          <span className={styles.sign}>Город</span>
          <span className={styles.value}>{data.city}</span>
        </div>
        <div className={styles.line}>
          <span className={styles.sign}>Область</span>
          <span className={styles.value}>{data.region}</span>
        </div>
        <div className={styles.line}>
          <span className={styles.sign}>Индекс</span>
          <span className={styles.value}>{data.index}</span>
        </div>
        <div className={styles.line}>
          <span className={styles.sign}>Эл.Почта</span>
          <span className={styles.value}>{data.email}</span>
        </div>
      </div>
      <div className={styles.notes}>
        <h5>Последние заметки</h5>
        <div className={styles.records}>
          <div className={styles.header}>
            <span className={styles.signNotes}>Дичпетчер</span>
            <span className={styles.valueNotes}>{data.name}</span>
          </div>
          <div className={styles.recordsBody}>
            <span>Нет сохраненных записей</span>
          </div>
        </div>
      </div>
      <div className={styles.editSection}>
        <button className={styles.edit}>
          <Edit></Edit>
          <span>Редактировать контакт</span>
        </button>
      </div>
    </div>
  );
}

export default RightBar;
