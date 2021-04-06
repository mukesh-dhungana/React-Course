import React from "react";

const StudentDetailHeader = (props) => {
  const {student} = props
  return (
    <>
      <div className="card border-secondary mb-3" style={{ maxWidth: "100%" }}>
        <div className="card-header student-detail-header">Student Details</div>
        <div className="card-body student-detail-body">
          <h4 className="card-title">{student.student_name}</h4>
          <div className="student-detail">
            <div className="email">
              <cite>Email: </cite>
              <p className="card-text">{student.student_email}</p>
            </div>
            <div className="contact">
              <cite>Contact No: </cite>
              <p className="card-text">{student.student_contactNo}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDetailHeader;
