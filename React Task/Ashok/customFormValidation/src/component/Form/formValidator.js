export const validateFormField = (toValidateField) => {
  let error = {};
  Object.keys(toValidateField).forEach((field) => {
    const element = document.getElementsByName(field)[0];
    const validateConditions =
      (element && element?.getAttribute("validator")?.split(",")) || [];
    validateConditions.length &&
      validateConditions.some((item) => {
        error[field] = validateError(item, toValidateField[field], field);
        return error[field] !== "";
      });
  });
  return error;
};

const validateError = (condition, fieldValue, fieldname) => {
  switch (condition) {
    case "required":
      return fieldValue.length <= 0 ? `${fieldname} is required` : "";

    case "isValidEmail":
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return !emailRegex.test(fieldValue) ? `${fieldname} is invalid` : "";

    case "minimum8digit":
      return fieldValue.length < 8
        ? `${fieldname} of minimum 8 characters`
        : "";

    case "oneCapitalLetter":
      const capitalLetter = /[A-Z]/;
      return !capitalLetter.test(fieldValue)
        ? `${fieldname} must contain 1 capital letter`
        : "";

    case "specialCharacter":
      const specialCharacter = /[*@!#%&()^~{}]+/;
      return !specialCharacter.test(fieldValue)
        ? `${fieldname} must contain 1 special character`
        : "";

    case "isdigit":
      var isdigit = /^\s*$|^\d+$/;
      return !isdigit.test(fieldValue)
        ? `${fieldname} must contain only digits`
        : "";

    default:
      return "";
  }
};

export const checkErrors = (errors) => {
  return Object.values(errors).filter((item) => item).length ? true : false;
};
