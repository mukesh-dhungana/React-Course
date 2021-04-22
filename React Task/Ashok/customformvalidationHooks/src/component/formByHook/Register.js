import React from "react";
import ".././Form/register.css";
import { useForm } from "./formHook";

const allFields = {
  fullName: "",
  email: "",
  password: "",
  address: "",
  phone: "",
};
const toValidateFields = { fullName: "", email: "", password: "", phone: "" };

function Register() {
  const { errors, isSubmitting, fieldOnChange, formOnSubmit } = useForm(
    { ...allFields },
    { ...toValidateFields }
  );

  const handleChange = (e) => {
    const { name, value } = e?.target;
    fieldOnChange(name, value);
  };

  const { fullName, email, password, phone } = errors;

  return (
    <div className="form-containter">
      <div className="title">
        <h4>Register yourself</h4>
      </div>
      <form className="form-list" onSubmit={formOnSubmit}>
        <div className="field">
          <label htmlFor="fullName">Fullname</label>
          <input
            className={fullName?.length ? "error-input" : ""}
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
            className={email?.length ? "error-input" : ""}
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
            className={password?.length ? "error-input" : ""}
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
            className={phone?.length ? "error-input" : ""}
            onChange={handleChange}
            name="phone"
            validator={["isdigit"]}
          />
          {phone && <span className="error">{phone}</span>}
        </div>
        <div className="field">
          <button type="submit" disabled={isSubmitting ? true : false}>
            {isSubmitting ? "please wait..." : "register"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
