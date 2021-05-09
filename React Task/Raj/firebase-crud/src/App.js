import "./style/App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Signin from "./component/user/Signin";
import Home from "./component/core/Home";
import Signup from "./component/user/Signup";
import Dashbarod from "./component/dashoard/Dashbarod";
import Error from "./component/dashoard/Error";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashbarod} />
        <Route exact path="/error" component={Error} />
        <Redirect to="/error" />
      </Switch>
    </Router>
  );
}

export default App;
