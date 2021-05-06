let submitted = false;
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateForm = (toValidate) => {
  submitted = true;
  console.log("validateForm", toValidate);
  return validateFields(toValidate);
};

export const validateFields = (toValidate) => {
  console.log("validateField", toValidate);
  let errors = {};
  if (submitted) {
    Object.keys(toValidate).forEach((field) => {
      let el = document.getElementsByName(field)[0];
      let validator = el && el.getAttribute("validator");
      const conditions = validator?.split(",");
      conditions &&
        conditions.some((condition) => {
          errors[field] = validateConditions(condition, toValidate[field]);
        });
      // console.log("check", conditions);
    });
  }
  return errors;
  //debugger
};
const validateConditions = (condition, value) => {
  console.log("ValidateCOntisions", value);
  switch (condition) {
    case "required":
      return value === "" ? "Required" : "";

    case "email":
      return !emailRegex.test(value) ? "Invalid email" : "";

    case "password":
      return value.length <= 8
        ? "Password must be at least 8 characters long"
        : "";

    default:
      return "";
  }
};
export const checkError = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};
