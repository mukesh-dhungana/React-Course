import "./App.css";
import Home from "./components/Home";
import Posts from "./components/Posts";
import About from "./components/About";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import PostDetail from "./components/PostDetail";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="className">
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/posts" component={Posts} exact />
          <Route path="/posts/:id" component={PostDetail} exact />
          <Route path="/error" component={Error} />
          <Redirect to="/error" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
