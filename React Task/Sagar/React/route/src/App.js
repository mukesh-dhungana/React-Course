import "./App.css";
import React from "react";
import Home from "./components/Home";
import Posts from "./components/Posts";
import About from "./components/About";
import Error from "./components/Error";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import LoginFail from "./components/LoginFail";
import PostDetail from "./components/PostDetail";
import { Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuth, setIsAuth] = React.useState(localStorage.getItem("isAuth"));

  React.useEffect(() => {
    if (localStorage.getItem("isAuth") === null) {
      localStorage.setItem("isAuth", "false");
    } else {
      localStorage.getItem("isAuth");
    }
  }, []);

  return (
    <div className="className">
      {console.log(localStorage.getItem("isAuth"))}
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/posts" component={Posts} exact />
          <Route
            path="/login"
            render={() => <Login isAuth={isAuth} setIsAuth={setIsAuth} />}
            exact
          />
          <Route path="/loginfail" component={LoginFail} exact />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route path="/posts/:id" component={PostDetail} exact />
          <Route path="/error" component={Error} />
          <Redirect to="/error" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
