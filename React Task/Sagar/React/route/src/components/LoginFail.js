import React from "react";
import { Link } from "react-router-dom";

const LoginFail = () => {
  return (
    <div className="loginFail">
      Looks like you are not logged in.
      <Link style={{ color: "red" }} to="login">
        Go to Login Page
      </Link>
    </div>
  );
};

export default LoginFail;
