import React from "react";
import { useFormValidation } from "./useFormValidation";
function FormHooks(props) {
  let initialState = {
    fullName: "",
    email: "",
    password: "",
  };
  let toValidate = { fullName: "" };
  const {
    value,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    isValid,
  } = useFormValidation(initialState, initialState);
  const onChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };
  if (isSubmitting && isValid) {
    console.log("valid form");
  }
  console.log(isSubmitting)
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          name="fullName"
          id=""
          onChange={onChange}
          validator={["required", "email"]}
        />
        {errors.fullName && <span className="error">{errors.fullName}</span>}
      </div>
      <div className="input-field">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id=""
          onChange={onChange}
          validator={["email"]}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="input-field">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id=""
          onChange={onChange}
          validator={["password"]}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div className="submit">
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormHooks;
