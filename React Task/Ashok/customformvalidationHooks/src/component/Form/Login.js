import React, { useState } from "react";
import { checkErrors, validateFormField } from "./formValidator";
import "./register.css";

function Login() {
  const [registerState, setRegisterState] = useState({
    data: { email: "", password: "" },
    error: { email: "", password: "" },
    isSubmitted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e?.target;
    
    const errorAfterChange = registerState.isSubmitted
      ? validateFormField({ [name]: value })
      : {};
    setRegisterState((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: value,
      },
      error: {
        ...prev.error,
        ...errorAfterChange,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegisterState((prev) => ({
      ...prev,
      isSubmitted: true,
    }));
    const { email, password } = registerState?.data;
    const errors = validateFormField({ email, password });
    if (checkErrors(errors)) {
      console.log("error form");
    } else {
      alert("Form is valid");
      console.log("clean form");
    }
    setRegisterState((prev) => ({
      ...prev,
      error: {
        ...prev.error,
        ...errors,
      },
    }));
  };

  const { email, password } = registerState?.error;

  return (
    <div className="form-containter">
      <div className="title">
        <h4>Login Here</h4>
      </div>
      <form className="form-list" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className={email.length ? "error-input" : ""}
            onChange={handleChange}
            name="email"
            validator={["required", "isValidEmail"]}
          />
          {email && <span className="error">{email}</span>}
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className={password.length ? "error-input" : ""}
            onChange={handleChange}
            name="password"
            validator={[
              "required",
              "minimum8digit",
              "oneCapitalLetter",
              "specialCharacter",
            ]}
          />
          {password && <span className="error">{password}</span>}
        </div>

        <div className="field">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
