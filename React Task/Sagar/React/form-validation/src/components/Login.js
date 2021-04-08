import "../css/login.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { validateForm, validateAll, checkErrors } from "./formValidation";

const Login = () => {
  const history = useHistory();

  const [value, setValue] = useState({
    email: "",
    password: "",
    errors: {},
  });

  const { email, password, errors } = value;

  const onChangeHandler = (name, e) => {
    let errors = validateAll({ [name]: e.target.value });
    setValue({
      ...value,
      [name]: e.target.value,
      errors: {
        ...value.errors,
        [name]: errors[name],
      },
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let errors = validateForm({ email, password });
    if (checkErrors(errors)) {
      console.log("valid");
      history.push('./succeed')
    } else {
      console.log("invalid");
    }
    setValue({ ...value, errors: errors });
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="formWrapper">
          <p>Login Form</p>
          <form action="" onSubmit={onSubmitHandler}>
            <input
              type="text"
              placeholder="email"
              onChange={(e) => onChangeHandler("email", e)}
              name="email"
              validator={["required", "email"]}
            />
            {errors.email && (
              <div style={{ color: " red" }}>{errors.email}</div>
            )}
            <input
              type="text"
              placeholder="password"
              onChange={(e) => onChangeHandler("password", e)}
              name="password"
              validator={["required", "password"]}
            />
            {errors.password && (
              <div style={{ color: " red" }}>{errors.password}</div>
            )}

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
