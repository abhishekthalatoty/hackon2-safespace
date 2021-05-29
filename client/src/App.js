import Navbar from './components/Navbar';
import {HomePage} from './pages/Home';
import {QuestionPage} from './pages/QuestionDetail'
import AnswerSection from './components/AnswerSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <HomePage /> */}
      <QuestionPage />
    </div>
  );
}

export default App;
