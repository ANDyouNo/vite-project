import React from 'react';
import TopBar from '../TopBar/TopBar';

function Messages() {
  return (
    <div>
      <TopBar></TopBar>
      <h2>Messages</h2>
      <p>У вас полно непрочитанных сообщений</p>
      <p>Прочитайте их уже!</p>
    </div>
  );
}

export default Messages;