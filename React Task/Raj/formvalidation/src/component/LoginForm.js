import React, { useState, useRef, useEffect } from "react";
import "./Signup.css";
import classnames from "classnames";
import { FormValidator } from "./FormValidator";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  //states
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [passwordErr, setpasswordErr] = useState("");

  const history = useHistory();
  const myRef = useRef();

  useEffect(() => {
    myRef.current.focus();
  }, []);

  const handleChange = (e, name) => {
    const user = {};
    const emailRegEx = RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    user[name] = e.target.value;
    // validations
    switch (name) {
      case "email":
        setemail(user.email);
        !emailRegEx.test(user.email)
          ? setemailErr("Invalid Email!")
          : setemailErr("");
        break;
      case "password":
        setpassword(user.password);
        user.password.length < 8
          ? setpasswordErr("Password must be at least 8 characters!")
          : setpasswordErr("");
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const err = FormValidator({ email, password });
    setemailErr(err.email);
    setpasswordErr(err.password);

    if (email && password && !emailErr && !passwordErr) {
      history.push("/success");
    }
  };

  const form = () => {
    return (
      <>
        <h2 className="text-center">Login Here</h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Enter Email</label>
            <input
              ref={myRef}
              autocomplete="new-password"
              type="email"
              name="email"
              className={classnames("form-control", {
                "is-invalid": emailErr,
                "is-valid": !emailErr && email.length,
              })}
              id="email"
              placeholder="Email Address"
              onChange={e => handleChange(e, "email")}
            />
            {emailErr && <small className="text-danger">{emailErr}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter Password</label>
            <input
              autocomplete="new-password"
              type="password"
              name="password"
              className={classnames("form-control", {
                "is-invalid": passwordErr,
                "is-valid": !passwordErr && password.length,
              })}
              id="password"
              placeholder="Password"
              onChange={e => handleChange(e, "password")}
            />
            {passwordErr && (
              <small className="text-danger">{passwordErr}</small>
            )}
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
      </>
    );
  };

  return <div id="main">{form()}</div>;
};

export default LoginForm;
