import Navbar from './components/Navbar';
import { HomePage } from './pages/Home';
import { QuestionPage } from './pages/QuestionDetail'
import AnswerSection from './components/AnswerSection';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <HomePage /> */}
      {/* <QuestionPage /> */}
      <Profile/>
    </div>
  );
}

export default App;
