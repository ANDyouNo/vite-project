import React, { useState } from "react";
import styles from "./Tabs.module.css"; // Импорт модуля CSS
import Avatar from "../../assets/Ellipse54.png";
import Geotag from "../../assets/Geotag";
import Star from "../../assets/Star";
import StarFill from "../../assets/StarFill";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Active");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const data = [
    {
      name: "Райан Гослинг",
      phone: "+8 800 555 35 35",
      direction: "Доставка по всему побережью",
      mail: "younofl312w@gmail.com",
      city: "Ростов-на-Дону",
    },
  ];

  const numberOfLines = 4
  

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

  return (
    <div>
      <div className={styles.tab}>
        {" "}
        <button
          className={
            activeTab === "Active"
              ? `${styles.tablinks} ${styles.active}`
              : styles.tablinks
          }
          onClick={() => openTab("Active")}
        >
          Активные
          <div
            className={
              activeTab === "Active"
                ? `${styles.indicator} ${styles.active}`
                : styles.indicator
            }
          >
            13
          </div>
        </button>
        <button
          className={
            activeTab === "Owners"
              ? `${styles.tablinks} ${styles.active}`
              : styles.tablinks
          }
          onClick={() => openTab("Owners")}
        >
          Владельцы
          <div
            className={
              activeTab === "Owners"
                ? `${styles.indicator} ${styles.active}`
                : styles.indicator
            }
          >
            4
          </div>
        </button>
        <button
          className={
            activeTab === "Blocked"
              ? `${styles.tablinks} ${styles.active}`
              : styles.tablinks
          }
          onClick={() => openTab("Blocked")}
        >
          Заблокированные
          <div
            className={
              activeTab === "Blocked"
                ? `${styles.indicator} ${styles.active}`
                : styles.indicator
            }
          >
            4
          </div>
        </button>
      </div>

      <div
        id="Active"
        className={
          activeTab === "Active"
            ? styles.tabcontent
            : `${styles.tabcontent} ${styles.hidden}`
        }
      >
        <div className={styles.tableBlock}>
          <div className={styles.miniHeader}>
            <h2>Активные водители</h2>
            <div className={styles.buttons}>
              <button className={styles.week}>Эта нделя</button>
              <button className={styles.events}>Мероприятия</button>
            </div>
          </div>
          {/* Чекбокс - Водитель - Заказы - Оплата - Рейтинг - Пространство - Местоположение */}
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
                <h5 className={styles.headers}>Водитель</h5>
                <h5 className={styles.headers}>Заказы</h5>
                <h5 className={styles.headers}>Оплата</h5>
                <h5 className={styles.headers}>Рейтинг</h5>
                <h5 className={styles.headers}>Пространство</h5>
                <h5 className={styles.headers}>Местоположение</h5>
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
                  <div className={styles.driver}>
                    <img className={styles.driverAvatar} src={Avatar} alt="" />
                    <div className={styles.driverInfo}>
                      <span className={styles.name}>{data[0].name}</span>
                      <span className={styles.phone}>{data[0].phone}</span>
                    </div>
                  </div>
                  <button className={styles.orders}>Смотреть 3 заказа</button>
                  <span className={styles.price}>Р440</span>
                  <div className={styles.ratingSec}>
                    <span className={styles.rethingNum}>4.0</span>
                    <div className={styles.rathingStars}>
                      <StarFill></StarFill>
                      <StarFill></StarFill>
                      <StarFill></StarFill>
                      <StarFill></StarFill>
                      <Star></Star>
                    </div>
                  </div>
                  <span className={styles.text}>
                    Для <span className={styles.highlightText}>5</span> машин
                  </span>
                  <button className={styles.position}>
                    <Geotag></Geotag>
                    <span>Сейчас в пути</span>
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        id="Owners"
        className={
          activeTab === "Owners"
            ? styles.tabcontent
            : `${styles.tabcontent} ${styles.hidden}`
        }
      >
        <div className={styles.tableBlock}>
          <div className={styles.miniHeader}>
            <h2>Владельцы</h2>
            <div className={styles.buttons}>
              <button className={styles.week}>Эта нделя</button>
              <button className={styles.events}>Мероприятия</button>
            </div>
          </div>
          {/* Чекбокс - Водитель - Заказы - Оплата - Рейтинг - Пространство - Местоположение */}
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
                <h5 className={styles.headers}>Водитель</h5>
                <h5 className={styles.headers}>Заказы</h5>
                <h5 className={styles.headers}>Оплата</h5>
                <h5 className={styles.headers}>Рейтинг</h5>
                <h5 className={styles.headers}>Пространство</h5>
                <h5 className={styles.headers}>Местоположение</h5>
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
                  <div className={styles.driver}>
                    <img className={styles.driverAvatar} src={Avatar} alt="" />
                    <div className={styles.driverInfo}>
                      <span className={styles.name}>{data[0].name}</span>
                      <span className={styles.phone}>{data[0].phone}</span>
                    </div>
                  </div>
                  <button className={styles.orders}>Смотреть 3 заказа</button>
                  <span className={styles.price}>Р440</span>
                  <div className={styles.ratingSec}>
                    <span className={styles.rethingNum}>4.0</span>
                    <div className={styles.rathingStars}>
                      <StarFill></StarFill>
                      <StarFill></StarFill>
                      <StarFill></StarFill>
                      <StarFill></StarFill>
                      <Star></Star>
                    </div>
                  </div>
                  <span className={styles.text}>
                    Для <span className={styles.highlightText}>5</span> машин
                  </span>
                  <button className={styles.position}>
                    <Geotag></Geotag>
                    <span>Сейчас в пути</span>
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        id="Blocked"
        className={
          activeTab === "Blocked"
            ? styles.tabcontent
            : `${styles.tabcontent} ${styles.hidden}`
        }
      >
        <div className={styles.tableBlock}>
          <div className={styles.miniHeader}>
            <h2>Заблокированные</h2>
            <div className={styles.buttons}>
              <button className={styles.week}>Эта нделя</button>
              <button className={styles.events}>Мероприятия</button>
            </div>
          </div>
          {/* Чекбокс - Водитель - Заказы - Оплата - Рейтинг - Пространство - Местоположение */}
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
                <h5 className={styles.headers}>Водитель</h5>
                <h5 className={styles.headers}>Заказы</h5>
                <h5 className={styles.headers}>Оплата</h5>
                <h5 className={styles.headers}>Рейтинг</h5>
                <h5 className={styles.headers}>Пространство</h5>
                <h5 className={styles.headers}>Местоположение</h5>
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
                  <div className={styles.driver}>
                    <img className={styles.driverAvatar} src={Avatar} alt="" />
                    <div className={styles.driverInfo}>
                      <span className={styles.name}>{data[0].name}</span>
                      <span className={styles.phone}>{data[0].phone}</span>
                    </div>
                  </div>
                  <button className={styles.orders}>Смотреть 3 заказа</button>
                  <span className={styles.price}>Р440</span>
                  <div className={styles.ratingSec}>
                    <span className={styles.rethingNum}>4.0</span>
                    <div className={styles.rathingStars}>
                      <StarFill></StarFill>
                      <StarFill></StarFill>
                      <StarFill></StarFill>
                      <StarFill></StarFill>
                      <Star></Star>
                    </div>
                  </div>
                  <span className={styles.text}>
                    Для <span className={styles.highlightText}>5</span> машин
                  </span>
                  <button className={styles.position}>
                    <Geotag></Geotag>
                    <span>Сейчас в пути</span>
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
