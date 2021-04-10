export const FormValidator = ({ name, email, password, confPassword }) => {
  const errors = {};
  if (!name) {
    errors.name = "Fullname is Required";
  } else if (name.length < 3) {
    errors.name = "3 character is required";
  }
  if (!email) {
    errors.email = "Email is Required";
  }
  if (!password) {
    errors.password = "Password is Required";
  } else if (password.length < 8)
    errors.password = "Password must be 8 characters";
  if (confPassword !== password) {
    errors.confPassword = "Password do not Match";
  }

  return errors;
};

export const changeValidation = () => {};
