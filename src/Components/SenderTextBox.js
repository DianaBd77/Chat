import '../App.css';


function SenderTextBox({text}) {
    return (
        <div className='sender-text-box'>
        <div className='sender-text-container text-container'>
            <p className='sender-text chat-text'>{text}</p>
        </div>      
        </div>
    );
}

export default SenderTextBox;
