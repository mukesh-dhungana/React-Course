import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <form class="form-login" method="post" action="#">
        <div class="form-log-in-with-email">
          <div class="form-white-background">
            <div class="form-title-row">
              <h1>Log in</h1>
            </div>

            <div class="form-row">
              <label>
                <span>Email</span>
                <input type="email" name="email" />
              </label>
            </div>

            <div class="form-row">
              <label>
                <span>Password</span>
                <input type="password" name="password" />
              </label>
            </div>

            <div class="form-row">
              <button type="submit">Log in</button>
            </div>
          </div>

          <Link to="/">
            <a href="!#" class="form-forgotten-password">
              Forgotten password &middot;
            </a>
          </Link>
          <Link to="/register">
            <a href="!#" class="form-create-an-account">
              Create an account &rarr;
            </a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
