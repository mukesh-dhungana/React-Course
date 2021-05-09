const emailRegEx = RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
export const FormValidator = fields => {
  const { name, email, password, confPassword } = fields;
  const errors = {};
  Object.keys(fields).map(field => {
    switch (field) {
      case "name":
        errors.name =
          name.length < 3 ? "Name must be at least 3 characters!" : "";
        break;

      case "email":
        //setemail(user.email);
        errors.email = !emailRegEx.test(email) ? "Invalid Email!" : "";
        break;

      case "password":
        //setpassword(user.password);
        if (password.length < 8) {
          errors.password = "Password must be at least 8 characters!";
        } else {
          errors.password = "";
        }

        break;

      case "confPassword":
        //setconfPassword(user.confPassword);
        errors.confPassword =
          confPassword !== password ? "Passwords do not match!" : "";
        break;
      default:
        break;
    }
  });

  return errors;
};
