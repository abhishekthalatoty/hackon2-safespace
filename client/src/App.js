import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "./components/Navbar";
import { HomePage } from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { QuestionPage } from "./pages/QuestionDetail";
import Signup from "./pages/Signup";
import { ApiHelper } from "./services/ApiHelper";
import ChatBubble from "./pages/ChatBubble";

export const UserContext = React.createContext({
  user: null,
  updateUser: () => {},
});
function App() {
  const [user, updateUser] = useState(null);

  useEffect(() => {
    if (Cookies.get("user")) {
      ApiHelper.getInstance().user = JSON.parse(Cookies.get("user"));
      updateUser(ApiHelper.getInstance().user);
    }
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Router>
          <Navbar updateUser={updateUser} />
          {user ? (
            <Switch>
              <Route path="/home">
                <HomePage />
              </Route>
              <Route path="/answers" component={QuestionPage} />
              <Route path="/profile">
                <Profile />
              </Route>
              <Redirect from="*" to="/home" />
            </Switch>
          ) : (
            <Switch>
              <Route path="/login">
                <Login updateUser={updateUser} />
              </Route>
              <Route path="/signup">
                <Signup updateUser={updateUser} />
              </Route>
              <Redirect from="*" to="/login" />
            </Switch>
          )}
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
