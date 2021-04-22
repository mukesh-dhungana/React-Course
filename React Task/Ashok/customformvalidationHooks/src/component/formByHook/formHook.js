import { useEffect, useState } from "react";
import { validateFormField, checkErrors } from "./validator";

export const useForm = (initialState, initialStateTovalidate) => {
  const [fields, setFields] = useState(initialState);
  //   const [toValidateFields] = useState(initialStateTovalidate);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setSubmitted] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [isValid, setValid] = useState(false);

  const fieldOnChange = (fieldName, fieldValue) => {
    const newError = isSubmitted
      ? validateFormField({ [fieldName]: fieldValue })
      : {};
    setFields((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
    setErrors((prev) => ({
      ...prev,
      ...newError,
    }));
  };

  useEffect(() => {
    if (isSubmitted && !checkErrors(errors)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [errors, isValid, isSubmitted]);

  const formOnSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (isValid) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
      }, 3000);
    }
    const error = validateFormField(fields);
    setErrors((prev) => ({
      ...prev,
      ...error,
    }));
  };

  return { errors, isSubmitting, fieldOnChange, formOnSubmit };
};
