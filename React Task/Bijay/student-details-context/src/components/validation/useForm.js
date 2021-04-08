import { useEffect, useState } from "react";
import { validateInfo } from "./FormValidation";

// import { validateInfo } from './FormValidation'

const useForm = (initialState, callback) => {
  const [values, setValues] = useState(initialState);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  console.log("Errors", errors);

  const handleChange = (name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value,
    }));
    if (isSubmitted) {
      let call = validateInfo({ [name]: value });
      setErrors(prev => ({
        ...prev,
        ...call,
      }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Errors", errors, isSubmitting);
    setIsSubmitted(true);
    setIsSubmitting(true);
    setErrors(validateInfo(values));
  };

  useEffect(() => {
    console.log("useEffect");
    if (Object.values(errors).filter(item => item).length !== 0) {
      setIsSubmitting(false);
    }
    if (
      Object.values(errors).filter(item => item).length === 0 &&
      isSubmitting
    ) {
      console.log("Dispatched");
      callback();
      setIsSubmitted(false);
    }
  }, [isSubmitting, errors]);

  return {
    handleChange,
    values,
    handleSubmit,
    errors,
    isSubmitting,
    setIsSubmitting,
  };
};

export default useForm;
