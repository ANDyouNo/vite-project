import React, { useState } from "react";
import TopBar from "../TopBar/TopBar";
import styles from "./Contacts.module.css";
import RightBar from "./components/RightBar";
import PopupWindow from "../PopupWindow/PopupWindow";


function Contscts() {
  const data = [
    {
      name: "Логан Столяров",
      phone: "+7 904 341 78 94",
      direction: "Доставка по всему побережью",
      mail: "younofl312w@gmail.com",
      city: "Ростов-на-Дону",
    },
  ];

  const numberOfLines = 4;

  const [selectAll, setSelectAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState(
    Array(numberOfLines).fill(false)
  ); 
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setCheckboxes(checkboxes.map(() => !selectAll));
  };

  const handleCheckboxChange = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);
    setSelectAll(newCheckboxes.every((checkbox) => checkbox));
  };

  //Popup
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.leftSection}>
        <TopBar></TopBar>
        <div className={styles.header}>
          <h1>Контакты</h1>
          <button className={styles.addButton} onClick={openPopup}>Добавить контакт +</button>
          {isPopupOpen && <PopupWindow onClose={closePopup} />}
        </div>
        <div className={styles.tableBlock}>
          <div className={styles.miniHeader}>
            <h2>Контакты</h2>
            <button className={styles.events}>Мероприятия</button>
          </div>

          <table>
            <thead>
              <tr>
                <input
                  className={styles.headers}
                  type="checkbox"
                  id="header_checkbox"
                  name="checkbox_name"
                  value="checkbox_value"
                  checked={selectAll}
                  onChange={handleSelectAll}
                ></input>
                <h5 className={styles.headers}>Имя</h5>
                <h5 className={styles.headers}>Телефон</h5>
                <h5 className={styles.headers}>Направление</h5>
                <h5 className={styles.headers}>Эл.Почта</h5>
                <h5 className={styles.headers}>Город</h5>
              </tr>
            </thead>
            <tbody>
              {checkboxes.map((isChecked, index) => (
                <tr key={index}>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="checkbox"
                    name="checkbox_name"
                    value="checkbox_value"
                    checked={isChecked}
                    onChange={() => handleCheckboxChange(index)}
                  ></input>
                  <span className={styles.name}>{data[0].name}</span>
                  <span className={styles.phone}>{data[0].phone}</span>
                  <button className={styles.direction}>
                    {data[0].direction}
                  </button>
                  <span className={styles.mail}>{data[0].mail}</span>
                  <span className={styles.city}>{data[0].city}</span>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <RightBar></RightBar>
    </div>
  );
}

export default Contscts;
