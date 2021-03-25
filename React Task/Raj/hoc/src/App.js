import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./component/Form/Home";
import Login from "./component/Form/Login";
import Dashboard from "./component/Form/Dashboard";
import Error from "./Error";
import Auth from "./component/Form/Auth";
import Form from "./component/HOC/Form";
import SecondForm from "./component/HOC/SecondForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Auth path="/dashboard" Comp={Dashboard} />
        <Route exact path="/error" component={Error} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/secondform" component={SecondForm} />
        <Redirect to="/error" />
      </Switch>
    </Router>
  );
}

export default App;
