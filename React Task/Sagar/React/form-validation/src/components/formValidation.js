const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const capitalRegex = /[A-Z]/;
const specialRegex = /[*@!#%&()^~{}]+/;

let submitted = false;

export const validateForm = (toValidate) => {
  submitted = true;

  return validateAll(toValidate);
};

export const validateAll = (toValidateObject) => {
  let errors = {};
  if (submitted) {
    Object.keys(toValidateObject).forEach((field) => {
      let elements = document.getElementsByName(field)[0];
      let validators = elements?.getAttribute("validator").split(",");
      console.log("vvv", field);
      validators?.some((condition) => {
        errors[field] = validateCondition(condition, toValidateObject[field]);
        return errors[field] !== "";
      });
    });
  }
  return errors;
};

const validateCondition = (condition, value) => {
  switch (condition) {
    case "required":
      return value === "" ? "Field is Required" : "";

    case "email":
      return emailRegex.test(value) ? "" : "Invalid Email";

    case "password":
      return value.length < 8 ? "Password must be greater than 8" : "";

    case "capital":
      return capitalRegex.test(value) ? "" : "Atlease one Capital letter";

    case "special":
      return specialRegex.test(value) ? "" : "Atlease one Special Character";

    case "fullName":
      return value.length < 3 ? "Atleast 3 characters" : "";

    default:
      return "";
  }
};

export const checkErrors = (errors) => {
  let valid = true;
  Object.values(errors).forEach((error) => error.length > 0 && (valid = false));
  return valid;
};
