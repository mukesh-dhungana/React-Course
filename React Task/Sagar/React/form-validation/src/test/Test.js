import React, { useState } from "react";

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    fullName: "",
    address: "",
    phone: "",
    formErrors: {
      email: "",
      password: "",
      fullName: "",
    },
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    let formErrors = data.formErrors;
    // console.log(name, value, formErrors);

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value) ? "" : "Invalid Email";
        break;

      case "password":
        formErrors.password =
          value.length > 8 ? "" : "Password must be greater than 8";
        break;

      case "fullName":
        formErrors.fullName = value.length > 3 ? "" : "Required Field";
        break;

      default:
        break;
    }

    setData({ ...data, formErrors, [name]: value });
    console.log(data);
  };

  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    Object.values(formErrors).forEach((val) => {
      val.length > 0 && (valid = false);
    });

    Object.values(rest).forEach((val) => {
      val === "" && (valid = false);
    });

    return valid;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (formValid(data)) {
      console.log(`
        ---SUBMITTING
        EMAIL: ${data.email}
        PASSWORD: ${data.password}
        FIRST NAME: ${data.fullName}
        ADDRESS: ${data.address}
        PHONE: ${data.phone}
      `);
    } else {
      console.error("FORM INVALID");
    }
  };

  return (
    <div>
      <form action="" onSubmit={(e) => onSubmitHandler(e)}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={(e) => onChangeHandler(e)}
        />
        {data.formErrors.email.length > 0 && (
          <span style={{ color: "red" }}>{data.formErrors.email}</span>
        )}
        <input
          type="text"
          placeholder="Password"
          name="password"
          onChange={(e) => onChangeHandler(e)}
        />
        {data.formErrors.password.length > 0 && (
          <span style={{ color: "red" }}>{data.formErrors.password}</span>
        )}
        <input
          type="text"
          placeholder="FullName"
          name="fullName"
          onChange={(e) => onChangeHandler(e)}
        />
        {data.formErrors.fullName.length > 0 && (
          <span style={{ color: "red" }}>{data.formErrors.fullName}</span>
        )}
        <input
          type="text"
          placeholder="Address"
          name="address"
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="phone"
          onChange={(e) => onChangeHandler(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
