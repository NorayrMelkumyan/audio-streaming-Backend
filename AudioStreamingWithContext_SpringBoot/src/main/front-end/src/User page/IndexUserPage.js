import React from "react";
import { useState } from "react";



function UserPage({ LoggedOut }) {
  const [home, setHome] = useState(true);
  const [messages, setMessages] = useState(false);
  const [notification, setNotification] = useState(false);
  const [me, setMe] = useState(false);

  const [homeClass, setHomeClass] = useState(true);
  const [messagesClass, setMessagesClass] = useState(false);
  const [notificationClass, setNotificationClass] = useState(false);
  const [meClass, setMeClass] = useState(false);

  const goHome = () => {
    setHome(true);
    setMessages(false);
    setNotification(false);
    setMe(false);

    setHomeClass(true);
    setMessagesClass(false);
    setNotificationClass(false);
    setMeClass(false);
    console.log ()
  }

  const goMessages = () => {
    setHome(false);
    setMessages(true);
    setNotification(false);
    setMe(false);

    setHomeClass(false);
    setMessagesClass(true);
    setNotificationClass(false);
    setMeClass(false)
  }

  const goNotification = () => {
    setHome(false);
    setMessages(false);
    setNotification(true);
    setMe(false);

    setHomeClass(false);
    setMessagesClass(false);
    setNotificationClass(true);
    setMeClass(false)
  }

  const goMe = () => {
    setHome(false);
    setMessages(false);
    setNotification(false);
    setMe(true);

    setHomeClass(false);
    setMessagesClass(false);
    setNotificationClass(false);
    setMeClass(true)
  }


  return (
    <div className="App">
    user page
    </div>
  );
}

export default UserPage;
