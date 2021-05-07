import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//components
import Main from "./components/Main";
import Signin from "./components/Signin";
import Login from "./components/Login";
import Create from "./components/Create";
import Post from "./components/Post";
import ShowAll from "./components/ShowAll";
import Error from "./components/Error";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/signin" component={Signin} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/create" component={Create} />
    <Route exact path="/post/:id" component={Post} />
    <Route exact path="/showall" component={ShowAll} />
    <Route exact path="/error" component={Error} />
    <Redirect to="/error" />
  </Switch>
);

export default Routes;
