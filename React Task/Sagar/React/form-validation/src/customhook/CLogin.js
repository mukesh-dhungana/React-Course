import React from "react";
import useForm from "./useForm";
import classes from "../css/custom.module.css";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const { onChangeHandler, onSubmitHandler, errors } = useForm(initialState);

  return (
    <div className="container">
      <div className="wrapper">
        <div className={classes.formBox}>
          <h1>Login Form</h1>
          <form
            action=""
            onSubmit={(e) => onSubmitHandler(e, "succeed")}
            className={classes.inputGroup}
            id={classes.register}
          >
            <input
              type="text"
              placeholder="email"
              onChange={onChangeHandler}
              name="email"
              validator={["required", "email"]}
            />
            {errors.email && (
              <div className={classes.error} style={{ color: " red" }}>
                {errors.email}
              </div>
            )}
            <input
              type="text"
              placeholder="password"
              onChange={onChangeHandler}
              name="password"
              validator={["required", "password"]}
            />
            {errors.password && (
              <div className={classes.error} style={{ color: " red" }}>
                {errors.password}
              </div>
            )}

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
