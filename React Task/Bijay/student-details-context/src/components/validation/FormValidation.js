const emailReg = /\S+@\S+\.\S+/;
const phoneReg = /^[98]{2}[0-9]{8}$/gm;
export const validateInfo = fields => {
  console.log("Form Validation", fields);
  let errors = {};

  Object.keys(fields).map(field => {
    console.log(field);
    switch (field) {
      case "student_name":
        errors[field] = fields[field] === "" ? "Student Name is Required!" : "";
        break;
      case "student_email":
        errors[field] =
          fields[field] === ""
            ? "Email is Required"
            : !emailReg.test(fields[field])
            ? "Email must be Valid type"
            : "";
        break;
      case "student_address":
        errors[field] =
          fields[field] === "" ? "Student Address is Required!" : "";
        break;
      case "student_contactNo":
        errors[field] =
          fields[field] !== ""
            ? !phoneReg.test(fields[field])
              ? "Phone Number must be Valid 10 Digits"
              : ""
            : "";

        break;
      case "semester":
        errors[field] = fields[field] === "" ? "Semester is Required!" : "";
        break;
      case "gpa":
        errors[field] = fields[field] === "" ? "GPA is Required!" : "";
        break;
      default:
        return "";
    }
  });

  // if (!values.student_name.trim()) {
  //   errors.studentName = "Student Name is Required!";
  // }

  // //Email
  // if (!values.student_email) {
  //   errors.studentEmail = "Student Email is Required!";
  // } else if (!emailReg.test(values.student_email)) {
  //   errors.studentEmail = "Email is Invalid!";
  // }

  // //Address
  // if (!values.student_address) {
  //   errors.studentAddress = "Address field is Required!";
  // }

  //COntact no
  //   if (!values.student_contactNo) {
  //     errors.studentContact = "Contact No field is Required!";
  //   } else if (!phoneReg.test(values.student_contactNo)) {
  //     errors.studentContact = "Please enter Valid 10 Digit Number!";
  //   }

  //Optional Contact No
  //   if (values.student_contactNo) {
  //     if (!phoneReg.test(values.student_contactNo)) {
  //       errors.studentContact = "Please enter Valid 10 Digit Number!";
  //     }
  //   }

  return errors;
};
