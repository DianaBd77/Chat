import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import Header from "./Components/Header";
import HistoryChip from "./Components/HistoryChip";
import SenderTextBox from "./Components/SenderTextBox";
import ReciverTextBox from "./Components/ReciverTextBox";
import ChatFooter from "./Components/ChatFooter";

function App() {
  const username = "Maria Fox";
  const messageEnd = useRef(null);
  const [messagesText, setMessagesText] = useState([]);

  const senderMessages = (txt) => {
    setMessagesText(txt);
  };

  const senderMessageList = messagesText.map((data, index) => {
    return <SenderTextBox key={index} text={data} />;
  });

  useEffect(() => {
    messageEnd.current?.scrollIntoView();
  }, [messagesText]);

  return (
    <div className="App">
      <header className="App-header">
        <Header username={username} />
      </header>
      <div className="main">
        <HistoryChip />
        <SenderTextBox
          text={
            "Hi, Quick question... What kinds of tasks the Sideklq processes?"
          }
        />
        <ReciverTextBox
          text={
            "Hey there, we are unavailable at the moment. We will get back to you once we are back."
          }
          username={username}
        />
        {senderMessageList}
        <div ref={messageEnd}></div>
      </div>
      <ChatFooter texts={senderMessages} />
    </div>
  );
}

export default App;
