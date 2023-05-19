import "../App.css";
import Avatar from "../Images/user.png";

function Header({ username }) {
  return (
    <div className="chat-info">
      <img src={Avatar} alt="avatar" className="avatar" />
      <div className="user-info">
        <h4 id="username">{username}</h4>
        <p className="caption">We will be back online at 9:00 AM</p>
      </div>
    </div>
  );
}

export default Header;
