import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import "./Register.css";

import { registerUsers } from "../../reducers/UsersSlice";
import ErrorBlock from "./Error";

const Register = props => {
  //***FOR REDUCERS****/
  const dispatch = useDispatch();

  //** Constants for Handling FORM DATA */
  const [userInfo, setUserInfo] = useState();

  //***Handling Errors Block***/
  const [showError, setShowError] = useState(false);
  const [checkPasswordError, setCheckPasswordError] = useState(false)

  //** Handling Forms */
  const handleInputChange = e => {
    // console.log(e.target.value);
    setUserInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.fullName);
    if (e.target.password.value !== e.target.password2.value) {
      console.log("Password not matched");
      setCheckPasswordError(true)
      setTimeout(()=> {
        setCheckPasswordError(false)
      }, 3000)
      return;
    }

    if (
      e.target.fullName.value === "" ||
      e.target.email.value === "" ||
      e.target.password.value === "" ||
      e.target.password2.value === ""
    ) {
      console.log("Enter Data");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
      return;
    }

    if (typeof userInfo === "undefined") {
      return;
    }
    console.log("Form Submission", userInfo);
    addUser(userInfo);
    dispatch(registerUsers(userInfo));
    props.history.push("/login");
  };

  const addUser = async (userInfo) => {
    const res = await fetch('http://localhost:5001/users', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  })
  const data = await res.json()
  return data
  }

  return (
    <div>
      <form
        className="form-register"
        method="post"
        action="#"
        onSubmit={handleSubmit}
      >
        <div className="form-register-with-email">
          <div className="form-white-background">
            <div className="form-title-row">
              <h1>Create an account</h1>
            </div>
            {showError && <ErrorBlock title="Fill up all Input Fields" />}
            {checkPasswordError && <ErrorBlock title="Passwords did not Matched" />}
            <div className="form-row">
              <label>
                <span>Name</span>
                <input
                  type="text"
                  name="fullName"
                  defaultValue=""
                  onChange={handleInputChange}
                />
                {/* <ErrorBlock title="Please enter Name" /> */}
              </label>
            </div>

            <div className="form-row">
              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  onChange={handleInputChange}
                />
                {/* <ErrorBlock title="Please enter valid Email" /> */}
              </label>
            </div>

            <div className="form-row">
              <label>
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  defaultValue=""
                  onChange={handleInputChange}
                />
                {/* <ErrorBlock title="Please enter Password" /> */}
              </label>
            </div>

            <div className="form-row">
              <label>
                <span>Confirm Password</span>
                <input
                  type="password"
                  name="password2"
                  defaultValue=""
                  onChange={handleInputChange}
                />
                {/* <ErrorBlock title="This field cannot be blank" /> */}
              </label>
            </div>

            <div className="form-row">
              <button type="submit">Register</button>
            </div>
          </div>

          <Link to="/login">
            <a href="!#" class="form-log-in-with-existing">
              Already have an account? Login here &rarr;
            </a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Register);
