import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { StudentListContext } from "../../context/StudentListContext";
import "./Forms.css";
const AddStudentInfoForm = props => {
  const { student } = props;

  const { id } = useParams();

  const [studentInfo, setStudentInfo] = useState({});

  const [, studentListDispatch] = useContext(StudentListContext);

  const handleInputChange = e => {
    setStudentInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    studentListDispatch({
      type: "EDIT_STUDENT",
      payload: {
        studentId: +id,
        edited: {
          ...student,
          ...studentInfo,
        },
      },
    });
    props.handleEditHeader(false);
  };

  return (
    <>
      <div
        className="input-modal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
      >
        <div className="form-wrapper">
          <form action="" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Full Name"
                  name="student_name"
                  defaultValue={student.student_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Email"
                  name="student_email"
                  onChange={handleInputChange}
                  defaultValue={student.student_email}
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Contact No"
                  name="student_contactNo"
                  onChange={handleInputChange}
                  defaultValue={student.student_contactNo}
                  s
                />
              </div>
            </div>
            <div className="row d-flex btn-group">
              <button type="submit" className="btn btn-success btn-large ">
                Edit
              </button>

              <button
                type="button"
                className="btn btn-outline-warning btn-large ml-4 "
                onClick={() => props.handleEditHeader(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddStudentInfoForm;
