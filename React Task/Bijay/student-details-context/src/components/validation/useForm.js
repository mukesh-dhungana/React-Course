import { useEffect, useState } from "react";
// import { validateInfo } from './FormValidation'

const useForm = (initialState, validateInfo, callback) => {
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
      let call = validateInfo({[name]:value})
      setErrors(prev => ({
        ...prev,
        ...call
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
    if (Object.values(errors).filter(item => item).length === 0 && isSubmitted) {
      console.log('Dispatched');
      callback();
    }
  }, [isSubmitted, errors]);

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
