import './App.css';
import Header from './Components/Header';
import HistoryChip from './Components/HistoryChip';
import SenderTextBox from './Components/SenderTextBox';
import ReciverTextBox from './Components/ReciverTextBox';
import ChatFooter from './Components/ChatFooter';



function App() {

  const username = "Maria Fox";

  return (
    <div className="App">
      <header className="App-header">
        <Header username={username} />
      </header>
      <div className="main">
        <HistoryChip />
        <SenderTextBox text={"Hi, Quick question... What kinds of tasks the Sideklq processes?"} />
        <ReciverTextBox text={"Hey there, we are unavailable at the moment. We will get back to you once we are back."} username={username}/>
      </div>
      <ChatFooter />
    </div>
  );
}

export default App;
