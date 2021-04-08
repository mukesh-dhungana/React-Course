import   { useEffect, useState } from "react";
// import { validateInfo } from './FormValidation'

const useForm = (validateInfo, callback) => {
  const [values, setValues] = useState({
    student_name: "",
    student_email: "",
    student_contactNo: "",
    student_address: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    // if (isSubmitting) {
    //   setErrors(
    //     validateInfo({
    //       [name]: value,
    //     })
    //   );
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Errors", errors, isSubmitting);
    // if (Object.keys(errors).length === 0) {
    //   setIsSubmitting(true);

    setIsSubmitting(true);
    setErrors(validateInfo(values));
    // callback();
    //

    // setTimeout(()=>{
    //     setIsSubmitting(false)
    // },2000)
  };

  useEffect(() => {
    console.log("useEffect");
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
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
