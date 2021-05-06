import React from "react";
import ".././Form/register.css";
import { useForm } from "./formHook";

const allFields = {
  email: "",
  password: "",
};
const toValidateFields = { email: "", password: "" };

function LoginHook() {
  const { errors, isSubmitting, fieldOnChange, formOnSubmit } = useForm(
    { ...allFields },
    { ...toValidateFields }
  );

  const handleChange = (e) => {
    const { name, value } = e?.target;
    fieldOnChange(name, value);
  };

  const { email, password } = errors;

  return (
    <div className="form-containter">
      <div className="title">
        <h4>Login yourself</h4>
      </div>
      <form className="form-list" onSubmit={formOnSubmit}>
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
          <button type="submit" disabled={isSubmitting ? true : false}>
            {isSubmitting ? "please wait..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginHook;
