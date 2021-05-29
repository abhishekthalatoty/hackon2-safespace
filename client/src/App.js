import Navbar from './components/Navbar';
import {HomePage} from './pages/Home';
import {QuestionPage} from './pages/QuestionDetail'
import AnswerSection from './components/AnswerSection';
import ChatBody from "./components/ChatBody";
import ChatRoom from "./components/ChatRoom";
import ChatContent from './components/ChatContent'

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <QuestionPage /> */}
      {/* <ChatRoom /> */}
      <ChatContent />
    </div>
  );
}

export default App;
