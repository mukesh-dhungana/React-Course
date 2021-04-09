import React from "react";
import useForm from "./useForm";

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
    <div>
      <h1>Custom Hook</h1>
      <form action="" onSubmit={onSubmitHandler} noValidate>
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={onChangeHandler}
          validator={["required", "email"]}
        />
        {errors.email ? <div style={{ color: "red" }}>{errors.email}</div> : ""}
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={onChangeHandler}
          validator={["required", "password", "capital", "special"]}
        />
        {errors.password ? (
          <div style={{ color: "red" }}>{errors.password}</div>
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
          <div style={{ color: "red" }}>{errors.fullName}</div>
        ) : (
          ""
        )}
        <input type="text" placeholder="address" onChange={onChangeHandler} />
        <input type="number" placeholder="phone" onChange={onChangeHandler} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
