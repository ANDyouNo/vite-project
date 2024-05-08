import React from 'react';
import TopBar from '../TopBar/TopBar';
import styles from './Messages.module.css'

function Messages() {
  return (
    <div className={styles.wrap}>
      <TopBar></TopBar>
      <div className={styles.content}><h2>Messages</h2>
      <p>У вас полно непрочитанных сообщений</p>
      <p>Прочитайте их уже!</p></div>
    </div>
  );
}

export default Messages;