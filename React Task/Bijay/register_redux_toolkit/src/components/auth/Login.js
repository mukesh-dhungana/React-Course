import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { loginUser, selectUsers } from "../../reducers/UsersSlice";
import ErrorBlock from "./Error";
import "./Login.css";

const Login = props => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const [loginUserInfo, setLoginUserInfo] = useState();
  const [showError, setShowError] = useState(false);
  const [errorTitle, setErrorTitle] = useState();

  /***Handling Form Inputs */
  const handleInputChange = e => {
    setLoginUserInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(loginUserInfo);

    if (e.target.email.value === "" || e.target.password.value === "") {
      console.log("Enter Data");
      setErrorTitle("Please Enter Email and Password");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
      return;
    }

    if (typeof loginUserInfo === "undefined") {
      return;
    }
    const check = checkUser(loginUserInfo);
    const filterUser = check.filter(x => x !== false)
    console.log(check, filterUser);
    if (filterUser.length > 0) {
      console.log("Logged In");
      dispatch(loginUser(...filterUser));
      props.history.push("/dashboard");
    } else {
      // console.log('Cannot Login');
      return;
    }
  };

  const checkUser = login => {
    console.log("Check User Credentials", login, users);
    const status = users.map(user => {
      if (user.email !== login.email) {
        console.log("Email Incorrect");
        setErrorTitle("Email Incorrect");
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 3000);
        return false;
      } else if (user.password !== login.password) {
        console.log("Password Wrong");
        setErrorTitle("Password Incorrect");
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 3000);
        return false
      } else {
        return user;
      }
    });
    console.log(status);
    return status;
  };

  return (
    <div>
      <form class="form-login" method="post" action="#" onSubmit={handleSubmit}>
        <div class="form-log-in-with-email">
          <div class="form-white-background">
            <div class="form-title-row">
              <h1>Log in</h1>
            </div>
            {showError && <ErrorBlock title={errorTitle} />}
            <div class="form-row">
              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div class="form-row">
              <label>
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  defaultValue=""
                  onChange={handleInputChange}
                />
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

export default withRouter(Login);
