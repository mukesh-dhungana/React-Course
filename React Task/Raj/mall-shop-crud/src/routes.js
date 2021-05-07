import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import Signin from "./components/Signin";
import Error from "./components/Error";
import Create from "./components/Create";
import Post from "./components/Post";

const Routes = () => (
  <Switch>
    <Route exact path="/signin" component={Signin} />
    <Route exact path="/" component={Main} />
    <Route exact path="/login" component={Login} />
    <Route exact path="error" component={Error} />
    <Route exact path="/create" component={Create} />
    <Route exact path="/post/:id" component={Post} />
    <Redirect to="/error" />
  </Switch>
);

export default Routes;
