import React, { useState } from "react";
import { checkErrors, validateFormField } from "./formValidator";
import "./register.css";

function Register() {
  const [registerState, setRegisterState] = useState({
    data: { fullName: "", email: "", password: "", address: "", phone: "" },
    error: { fullName: "", email: "", password: "", address: "", phone: "" },
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
    const { fullName, email, password, phone } = registerState?.data;
    const errors = validateFormField({ fullName, email, password, phone });
    if (checkErrors(errors)) {
      console.log("error form");
    } else {
      alert("Form is valid");
      console.log("clean form");
    }
    setRegisterState((prev) => ({
      ...prev,
      error: errors,
    }));
  };

  const { fullName, email, password, phone } = registerState?.error;

  return (
    <div className="form-containter">
      <div className="title">
        <h4>Register yourself</h4>
      </div>
      <form className="form-list" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="fullName">Fullname</label>
          <input
            className={fullName.length ? "error-input" : ""}
            type="text"
            onChange={handleChange}
            name="fullName"
            validator={["required"]}
          />
          {fullName && <span className="error">{fullName}</span>}
        </div>
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
          <label htmlFor="address">
            Address <small>-optional</small>
          </label>
          <input type="text" onChange={handleChange} name="address" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className={phone.length ? "error-input" : ""}
            onChange={handleChange}
            name="phone"
            validator={["isdigit"]}
          />
          {phone && <span className="error">{phone}</span>}
        </div>
        <div className="field">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
