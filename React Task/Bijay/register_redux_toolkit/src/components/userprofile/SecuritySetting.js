import React from "react";
import { Link } from "react-router-dom";
const SecuritySetting = () => {
  return (
    <div className="container security-container">
      <h4>Security Setting</h4>
      <Link to="/profile/securitysetting/username">
        <div className="alert alert-primary change" role="alert">
          Change Username
        </div>
      </Link>
      <Link to="/profile/securitysetting/email">
        <div className="alert alert-primary change" role="alert">
          Change Primary Email
        </div>
      </Link>
      <Link to="/profile/securitysetting/changepassword">
        <div className="alert alert-primary change" role="alert">
          Change Password
        </div>
      </Link>
    </div>
  );
};

export default SecuritySetting;
