import React from "react";
import Student from "../components/Student";
import StudentDetails from "./StudentDetails";
import StudentResult from "./StudentResult";

const ProviderWrapper = () => {
  return (
    <StudentDetails>
      <StudentResult>
        <Student />
      </StudentResult>
    </StudentDetails>
  );
};

export default ProviderWrapper;
