import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import Header from "./Components/Header";
import HistoryChip from "./Components/HistoryChip";
import SenderTextBox from "./Components/SenderTextBox";
import ReciverTextBox from "./Components/ReciverTextBox";
import ChatFooter from "./Components/ChatFooter";

function App() {
  const username = "Maria Doe";
  const messageEnd = useRef(null);
  const [messagesText, setMessagesText] = useState([]);

  // get sended message by sender from its child component(ChatFooter)
  const senderMessages = (txt) => {
    setMessagesText(txt);
  };

  // genrate message box per sended messages | generate box once sender user send new message
  const senderMessageList = messagesText.map((data, index) => {
    return <SenderTextBox key={index} text={data} />;
  });

  // handle smooth scrolling | send message make page scroll to bottom and stick at bottom for better ux
  useEffect(() => {
    messageEnd.current?.scrollIntoView();
  }, [messagesText]);

  return (
    <div className="App">
      {/* chat header*/}
      <header className="App-header">
        <Header username={username} />
      </header>
      <div className="main">
        {/* history timeline*/}
        <HistoryChip />
        {/* sender refers to us so this componnet is for our messages */}
        <SenderTextBox
          text={
            "Hi, Quick question... What kinds of tasks the Sideklq processes?"
          }
        />
        {/* reciver refers to user whom we want to chat with, so this componnet is for his/her messages */}
        <ReciverTextBox
          text={
            "Hey there, we are unavailable at the moment. We will get back to you once we are back."
          }
          username={username}
        />
        {senderMessageList}
        <div ref={messageEnd}></div>
      </div>
      {/* chat footer | handle sending messages*/}
      <ChatFooter texts={senderMessages} />
    </div>
  );
}

export default App;
