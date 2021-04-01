import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import AccountSetting from "./AccountSetting";
import "./Profile.css";
import SecuritySetting from "./SecuritySetting";
import UserSetting from "./UserSetting";
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
      <Switch>
        <Route
          exact
          path="/profile/usersetting"
          render={() => <UserSetting />}
        />
        <Route
          exact
          path="/profile/accountsetting"
          render={() => <AccountSetting />}
        />
        <Route
          path="/profile/securitysetting"
          render={() => <SecuritySetting />}
        />
      </Switch>
    </>
  );
};

export default Profile;
