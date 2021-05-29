import Navbar from './components/Navbar';
import { HomePage } from './pages/Home';
import { QuestionPage } from './pages/QuestionDetail'
import AnswerSection from './components/AnswerSection';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import ChatBubble from './pages/ChatBubble'
import ChatRoom from './pages/ChatRoom'
import { Grid } from '@material-ui/core'
import Chat from './pages/Chat'
function App() {
  return (
    <body style={{ backgroundColor: "#bfbfbf" }}>

      {/* <Navbar/> */}
      <Chat />

      {/* <div className="App" style={{marginTop:"65px"}}> */}
      {/* <Navbar /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <HomePage /> */}
      {/* <QuestionPage /> */}
      {/* <Profile/> */}
      {/* <HomePage /> */}
      {/* </div> */}

    </body>
  );
}

export default App;
