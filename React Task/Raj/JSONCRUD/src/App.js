import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import User from "./components/user/User";
import Error from "./components/pages/Error";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import EditUser from "./components/user/EditUser";
import ViewUser from "./components/user/ViewUser";

function App(props) {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/user" component={User} />
          <Route exact path="/user/edit/:id" component={EditUser} />
          <Route exact path="/user/view/:id" component={ViewUser} />
          <Route path="/error" component={Error} />
          <Redirect to="/error" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
