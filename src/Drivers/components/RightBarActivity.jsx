import React from "react";
import styles from "./RightBarActivity.module.css";
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
      <h1>Активность</h1>
      <div className={styles.messages}>
        <div className={styles.message}>
          <img className={styles.avatar} src={Avatar} alt="" />
          <p className={styles.text}><span className={styles.highlightText}>Игорь Столяров</span> заказ <span className={styles.highlightText}> 436ASDF2346J</span> доставлен в пункт назначения</p>
        </div>
        <span className={styles.date}>Июнь 17, 2014 6:36</span>
        
        <div className={styles.message}>
          <img className={styles.avatar} src={Avatar} alt="" />
          <p className={styles.text}><span className={styles.highlightText}>Игорь Столяров</span> заказ <span className={styles.highlightText}> 436ASDF2346J</span> доставлен в пункт назначения</p>
        </div>
        <span className={styles.date}>Июнь 17, 2014 6:36</span>

        <div className={styles.message}>
          <img className={styles.avatar} src={Avatar} alt="" />
          <p className={styles.text}><span className={styles.highlightText}>Игорь Столяров</span> заказ <span className={styles.highlightText}> 436ASDF2346J</span> доставлен в пункт назначения</p>
        </div>
        <span className={styles.date}>Июнь 17, 2014 6:36</span>
      </div>
    </div>
  );
}

export default RightBar;
