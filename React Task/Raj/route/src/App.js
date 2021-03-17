import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./component/Menu/Home";
import About from "./component/Menu/About";
import Error from "./component/Menu/Error";
import APIData from "./component/APIData";
import NewUser from "./component/NewUser";
import Menu from "./component/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about/" component={About} />
          <Route path="/error" component={Error} />
          <Route path="/api" component={APIData} />
          <Route path="/user/:id" component={NewUser} />
          <Redirect to="/error" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
