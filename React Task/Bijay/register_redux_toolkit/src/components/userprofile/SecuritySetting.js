import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import CheckComp from "./CheckComp";
import Username from "./Username";
const SecuritySetting = () => {
  const { path } = useRouteMatch();

  return (
    <div className="container security-container">
      <h4>Security Setting</h4>
      <Switch>
        <Route exact path={`${path}username`} component={Username} />
        <Route exact path={`${path}`} render={() => <CheckComp />} />
      </Switch>
    </div>
  );
};

export default SecuritySetting;
