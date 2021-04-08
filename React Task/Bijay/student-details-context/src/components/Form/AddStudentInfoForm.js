import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { StudentListContext } from "../../context/StudentListContext";
import useForm from "../validation/useForm";
import "./Forms.css";
const AddStudentInfoForm = props => {
  const { student } = props;

  const { id } = useParams();

  const [studentInfo, setStudentInfo] = useState({});

  const [, studentListDispatch] = useContext(StudentListContext);

  let initialState = {
    student_name: student.student_name,
    student_email: student.student_email,
    student_address: student.student_address
  };

  // const handleInputChange = e => {
  //   setStudentInfo(prev => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  const onChange = e => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleEditSubmit = e => {
    
    studentListDispatch({
      type: "EDIT_STUDENT",
      payload: {
        studentId: +id,
        edited: {
          ...student,
          ...values,
        },
      },
    });
    props.handleEditHeader(false);
  };

  const { handleChange, values, errors, handleSubmit } = useForm(
    initialState,
    handleEditSubmit
  );

  return (
    <>
      <div
        className="input-modal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
      >
        <div className="form-wrapper">
          <form action="" onSubmit={e => handleSubmit(e)}>
            <div className="row">
              <div className="col-12">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Full Name"
                  name="student_name"
                  defaultValue={student.student_name}
                  onChange={onChange}
                />
                {errors.student_name && (
                  <p className="errors">{errors.student_name}</p>
                )}
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Email"
                  name="student_email"
                  onChange={onChange}
                  defaultValue={student.student_email}
                />
                {errors.student_email && (
                  <p className="errors">{errors.student_email}</p>
                )}
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Address"
                  name="student_address"
                  onChange={onChange}
                  defaultValue={student.student_address}
                  s
                />
                {errors.student_address && (
                  <p className="errors">{errors.student_address}</p>
                )}
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
