import "../App.css";
import React, { useState, useEffect } from "react";
import Avatar from "../Images/user.png";

function Header({ username }) {
  //make get back online time more dynamic with getting right now time and plus it with 1 to show one hour later from now
  const [getBackOnlineHour, setGetBackOnlineHour] = useState("");
  let time = new Date();
  let hour = time.getHours() + 1;

  //make time update when ever we face hour changes
  useEffect(() => {
    setGetBackOnlineHour(`${hour}:00`);
  }, [hour]);

  return (
    <div className="chat-info">
      <img src={Avatar} alt="avatar" className="avatar" />
      <div className="user-info">
        <h4 id="username">{username}</h4>
        <p className="caption">We will be back online at {getBackOnlineHour}</p>
      </div>
    </div>
  );
}

export default Header;
