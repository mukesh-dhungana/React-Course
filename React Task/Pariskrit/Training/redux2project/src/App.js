import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { connect } from "react-redux";
import { useCheckUserLogin } from "./customhooks/useCheckUserLogin";

function App(props) {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          {useCheckUserLogin(props.user) || (
            <>
              <Route path="/home" component={Home} />
              <Route path="/profile" component={Profile} />
            </>
          )}

          <Redirect to="/login" />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(App);
