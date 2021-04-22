import React from "react";

const UseValidator = ({ email, password, fullName }) => {
  const error = {};
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email) {
    error.email = "Email is Required";
  } else if (!emailRegex.test(email)) {
    error.email = "Invalid Email";
  }

  if (!password) {
    error.password = "Password is Required";
  } else if (password.length < 4) {
    error.password = "Password must be greater than 4";
  }

  if (!fullName) {
    error.fullName = "Name is Required";
  }

  return error;
};

export default UseValidator;
