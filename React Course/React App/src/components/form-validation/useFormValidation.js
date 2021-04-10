import { useEffect, useState } from "react";
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const useFormValidation = (initialState, toValidate) => {
  const [value, setValue] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setSubmitted] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [isValid, setValid] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      let valid = true;
      Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
      setValid(valid);
      ///setSubmitting(false);
    }
  }, [errors, isSubmitting]);

  const handleChange = (name, changedValue) => {
    setValue((prevState) => ({ ...value, [name]: changedValue }));
    if (isSubmitted) {
      validateError({ [name]: changedValue });
    }
  };

  const handleSubmit = (e, func) => {
    e.preventDefault();
    setSubmitted(true);
    setSubmitting(true);
    validateError(toValidate);
  };

  const validateError = (fields) => {
    let fieldErrors = {};
    Object.keys(fields).map((field) => {
      switch (field) {
        case "fullName":
          fieldErrors[field] = value[field] === "" ? "Required" : "";
          break;
        case "email":
          fieldErrors[field] = !emailRegex.test(value[field])
            ? "Invalid email"
            : "";
          break;
        case "password":
          fieldErrors[field] =
            value[field].length <= 8
              ? "Password must be at least 8 characters long"
              : "";
          break;
        default:
          return "";
      }
    });
    // debugger;
    setErrors((prevState) => ({ ...prevState, ...fieldErrors }));
  };
  return { handleChange, handleSubmit, value, errors, isSubmitting, isValid };
};
