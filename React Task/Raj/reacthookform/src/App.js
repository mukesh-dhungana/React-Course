import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SuccessLogin } from "./component/SuccessLogin";
import SignUp from "./component/Signup";
import LoginForm from "./component/LoginForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/success" component={SuccessLogin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
