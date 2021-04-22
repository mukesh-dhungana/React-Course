import React from "react";
import {  Route, Switch, useLocation } from "react-router-dom";
import CheckComp from "./changedata/CheckComp";
import Email from "./changedata/Email";
import PasswordChange from "./changedata/PasswordChange";
import Username from "./changedata/Username";
const SecuritySetting = (props) => {
  const path = props.match.path
  const location = useLocation()
  console.log(location.pathname);
  
  return (
    <div className="container security-container">
      <h4>Security Setting</h4>
      <Switch>
        <Route exact path={`${path}`} render={() => <CheckComp path={path}  /> } />
        <Route path={`${path}/username`} render={() => <Username path={path}  /> } />
        <Route path={`${path}/email`} render={() => <Email path={path}  /> } />
        <Route path={`${path}/changepassword`} render={() => <PasswordChange path={path}  /> } />
      </Switch>
     
    </div>
  );
};

export default SecuritySetting;
