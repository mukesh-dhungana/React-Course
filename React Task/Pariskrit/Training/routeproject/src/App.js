import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Posts from "./component/Posts";
import Post from "./component/Post";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/posts/:id" component={Post} />
          <Route path="/posts" component={Posts} />

          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
