import React from "react";
import * as yup from "yup";

const Validation = ({ fullname, email, password, confPassword }) => {
  const schema = yup.object().shape({
    fullname: yup.string().required().min(3),
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(15),
    confPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null]),
  });
  return schema;
};

export default Validation;
