import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import AccountSetting from "./accountsetting/AccountSetting";
import "./Profile.css";
import SecuritySetting from "./securitysetting/SecuritySetting";
import UserSetting from "./usersetting/UserSetting";
const Profile = () => {
  return (
    <>
      <div className="container">
        {/* <div class="card profile-card">
          <div class="card-body">PROFILE SETTING</div>
        </div> */}
        <div class="card settings-card">
          <div class="card-header settings-card-header">Settings</div>
          <ul class="list-group list-group-flush">
            <Link to="/profile/usersetting">
              <li class="list-group-item">User Settings</li>{" "}
            </Link>
            <Link to="/profile/securitysetting">
              <li class="list-group-item">Security Settings</li>{" "}
            </Link>
            <Link to="/profile/accountsetting">
              <li class="list-group-item">Account Settings</li>{" "}
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex-container container">
        <div className="flex-content1">
          <Switch>
            <Route
              
              path="/profile/usersetting"
              render={() => <UserSetting />}
            />
            <Route
              
              path="/profile/accountsetting"
              render={() => <AccountSetting />}
            />
            <Route
              
              path="/profile/securitysetting"
              render={(props) => <SecuritySetting {...props}/>}
             
            />
            {/* <Route

              path="/profile/securitysetting/username"
              render={() => <Username />}
            /> */}
            {/* <Route
              path="/profile/securitysetting/email"
              render={() => <Email />}
            />
            <Route
              path="/profile/securitysetting/changepassword"
              render={() => <PasswordChange />}
            /> */}
          </Switch>
        </div>
        
      </div>
    </>
  );
};

export default Profile;
