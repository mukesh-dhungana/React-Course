const emailReg = /\S+@\S+\.\S+/;
const phoneReg = /^[98]{2}[0-9]{8}$/gm;
export const validateInfo = values => {
  let errors = {};

  if (!values.student_name.trim()) {
    errors.studentName = "Student Name is Required!";
  }

  //Email
  if (!values.student_email) {
    errors.studentEmail = "Student Email is Required!";
  } else if (!emailReg.test(values.student_email)) {
    errors.studentEmail = "Email is Invalid!";
  }

  //Address
  if (!values.student_address) {
    errors.studentAddress = "Address field is Required!";
  }

  //COntact no
//   if (!values.student_contactNo) {
//     errors.studentContact = "Contact No field is Required!";
//   } else if (!phoneReg.test(values.student_contactNo)) {
//     errors.studentContact = "Please enter Valid 10 Digit Number!";
//   }

  //Optional Contact No
  if (values.student_contactNo) {
    if (!phoneReg.test(values.student_contactNo)) {
      errors.studentContact = "Please enter Valid 10 Digit Number!";
    }
  }

  return errors;
};
