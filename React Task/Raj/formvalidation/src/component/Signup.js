import React, { useState, useRef, useEffect } from "react";
import "./Signup.css";
import classnames from "classnames";
import { FormValidator } from "./FormValidator";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  //states
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confPassword, setconfPassword] = useState("");
  const [nameErr, setnameErr] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [passwordErr, setpasswordErr] = useState("");
  const [confPasswordErr, setconfPasswordErr] = useState("");
  const [bol, setBol] = useState(false);

  const [data, setData] = useState({});

  const history = useHistory();
  const myRef = useRef();

  useEffect(() => {
    myRef.current.focus();
  }, []);
  const user = {};
  const handleChange = (e, name) => {
    console.log("", name);
    user[name] = e.target.value;

    setData({
      ...data,
      [name]: e.target.value,
    });
    setError({ name, email, password, confPassword, [name]: e.target.value });
    // validations
    switch (name) {
      case "name":
        setname(user.name);

        break;

      case "email":
        setemail(user.email);

        break;

      case "password":
        setpassword(user.password);

        break;

      case "confPassword":
        setconfPassword(user.confPassword);

        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError({ name, email, password, confPassword });
    if (
      name &&
      email &&
      password &&
      confPassword &&
      !nameErr &&
      !emailErr &&
      !passwordErr &&
      !confPasswordErr
    ) {
      history.push("/login");
    }
  };
  const setError = ({ name, email, password, confPassword }) => {
    const err = FormValidator({ name, email, password, confPassword });
    setnameErr(err.name);
    setemailErr(err.email);
    setpasswordErr(err.password);
    setconfPasswordErr(err.confPassword);
  };
  const form = () => {
    return (
      <>
        <h2 className="text-center">Create an Account</h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Enter Full Name</label>
            <input
              ref={myRef}
              autocomplete="new-password"
              type="text"
              name="name"
              className={classnames("form-control", {
                "is-invalid": nameErr,
                "is-valid": !nameErr && name.length,
              })}
              id="name"
              placeholder="Full Name"
              onChange={e => handleChange(e, "name")}
            />
            {nameErr && <small className="text-danger">{nameErr}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter Email</label>
            <input
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
              type="text"
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
          {bol && (
            <div className="form-group">
              <label htmlFor="Confirm Password">Confirm Password</label>
              <input
                type="text"
                name="confPassword"
                className={classnames("form-control", {
                  "is-invalid": confPasswordErr,
                  "is-valid": !confPasswordErr && confPassword.length,
                })}
                id="confPassword"
                placeholder="confPassword"
                onChange={e => handleChange(e, "confPassword")}
              />
              {confPasswordErr && (
                <small className="text-danger">{confPasswordErr}</small>
              )}
            </div>
          )}

          <input type="submit" className="btn btn-primary" value="Sign Up" />
        </form>
      </>
    );
  };

  return <div id="main">{form()}</div>;
};

export default SignUp;
