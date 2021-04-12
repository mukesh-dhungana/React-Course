import { useState } from "react";
import { useHistory } from "react-router-dom";

import { validateForm, validateAll, checkErrors } from "./cFormValidation";

const useForm = (initialState) => {
  const history = useHistory();
  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const newErrors = validateAll({ [name]: value });

    setData({
      ...data,
      [name]: value,
    });

    setErrors((prev) => ({
      ...prev,
      ...newErrors,
    }));
  };

  const onSubmitHandler = (event, value) => {
    console.log("SERO", errors);
    event.preventDefault();

    const nErrors = validateForm(data);
    setErrors((prev) => ({
      ...prev,
      ...nErrors,
    }));
    if (checkErrors(nErrors)) {
      console.log("valid", nErrors);
      history.push(`/${value}`);
    } else {
      console.log("invalid", nErrors);
    }
  };

  return {
    onChangeHandler,
    onSubmitHandler,
    errors,
  };
};

export default useForm;
