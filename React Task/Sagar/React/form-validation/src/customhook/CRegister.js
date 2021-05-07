import React from "react";
import CLogin from "./CLogin";
import useForm from "./useForm";
import classes from "../css/custom.module.css";

const Register = () => {
  const initialState = {
    email: "",
    password: "",
    fullName: "",
    address: "",
    phone: "",
  };

  const { onChangeHandler, onSubmitHandler, errors } = useForm(initialState);
  return (
    <div className={classes.hero}>
      <div className={classes.formBox}>
        <h1>Custom Hook</h1>

        <form
          action=""
          onSubmit={(e) => onSubmitHandler(e, "clogin")}
          className={classes.inputGroup}
          id={classes.register}
        >
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={onChangeHandler}
            validator={["required", "email"]}
          />
          {errors.email ? (
            <div className={classes.error} style={{ color: "red" }}>{errors.email}</div>
          ) : (
            ""
          )}
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={onChangeHandler}
            validator={["required", "password", "capital", "special"]}
          />
          {errors.password ? (
            <div className={classes.error} style={{ color: "red" }}>{errors.password}</div>
          ) : (
            ""
          )}
          <input
            type="text"
            name="fullName"
            placeholder="fullName"
            onChange={onChangeHandler}
            validator={["required", "fullName"]}
          />
          {errors.fullName ? (
            <div className={classes.error} style={{ color: "red" }}>{errors.fullName}</div>
          ) : (
            ""
          )}
          <input type="text" placeholder="address" onChange={onChangeHandler} />
          <input type="number" placeholder="phone" onChange={onChangeHandler} />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
