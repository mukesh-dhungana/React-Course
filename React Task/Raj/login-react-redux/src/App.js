import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProfileContainer from "./Container/profileContainer";
import LoginContainer from "./Container/LoginContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={ProfileContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
