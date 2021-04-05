import React, { useState, useContext } from "react";
import { StudentListContext } from "../context/StudentListContext";
import AddStudentResultForm from "./AddStudentResultForm";

const AddStudentForm = () => {
    const [studentListState, studentListDispatch]  = useContext(StudentListContext)
  const [addResult, setAddResult] = useState(false);

  const [studentInfo, setStudentInfo] = useState();

  const handleAddResult = () => {
    setAddResult(!addResult);
  };

  const handleCancelResult = () => {
    if (addResult) {
      setAddResult(false);
    }
  };

  const handleInputChange = e => {
    setStudentInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(studentInfo);
    studentListDispatch({
        type: "ADD_USER",
        payload: {
            id: Date.now(),
            ...studentInfo
        }
    })
  };

  return (
    <>
      <form className="" onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Student Name"
              name="student_name"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-6">
            <input
              type="email"
              className="form-control"
              placeholder="Student Email"
              name="student_email"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              placeholder="Student Address"
              name="student_address"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Student Contact Number"
              name="student_contactNo"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-info"
              onClick={handleAddResult}
            >
              Add Result
            </button>
          </div>
        </div>
        {addResult && (
          <AddStudentResultForm handleCancelResult={handleCancelResult} />
        )}

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={handleFormSubmit}
          >
            Save Entry
          </button>
        </div>
      </form>
    </>
  );
};

export default AddStudentForm;
