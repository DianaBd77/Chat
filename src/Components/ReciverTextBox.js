import '../App.css';
import Avatar from '../Images/user.png';


function ReciverTextBox({ text, username }) {
    return (
        <div className='reciver-box'>
            <div className='reciver-text-box'>
                <img src={Avatar} alt='avatar' className='avatar small-avatar' />
                <div className='reciver-text-container text-container'>
                    <p className='reciver-text chat-text'>{text}</p>
                </div>
            </div>
            <p id='reciver-name'>{username}</p>
        </div>
    );
}

export default ReciverTextBox;
