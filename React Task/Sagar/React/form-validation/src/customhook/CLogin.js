import "../css/login.css";
import React from "react";
import useForm from "./useForm";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const { onChangeHandler, onSubmitHandler, errors } = useForm(initialState);

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
