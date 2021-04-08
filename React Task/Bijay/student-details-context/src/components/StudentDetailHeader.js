import React, { useState } from "react";
import AddStudentInfoForm from "./Form/AddStudentInfoForm";

const StudentDetailHeader = props => {

  const [modal, setModal] = useState(false)

  const handleEditHeader = (val) => {
    setModal(val)
  }

  const { student } = props;
  return (
    <>
    {modal && <AddStudentInfoForm handleEditHeader={handleEditHeader} student={student} />}
      <div className="card border-secondary mb-3" style={{ maxWidth: "100%" }}>
        <div className="card-header student-detail-header">
          <p>Student Details</p>
          <span className="btn btn-info" onClick={()=>handleEditHeader(true)} >Edit</span>
        </div>
        <div className="card-body student-detail-body">
          <div className="student-name">
            <h4 className="card-title">{student.student_name}</h4>
            <p>Student Id: ({student.id})</p>
          </div>
          <div className="student-detail">
            <div className="student-img">
              <img
                src={student.student_img}
                alt=""
                width="100px"
                height="100px"
              />
            </div>
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
