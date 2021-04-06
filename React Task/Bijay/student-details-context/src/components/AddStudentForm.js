import React, { useState, useContext } from "react";
import { StudentListContext } from "../context/StudentListContext";
import AddedResult from "./AddedResult";
import AddStudentResultForm from "./AddStudentResultForm";

const AddStudentForm = () => {
  const [studentListState, studentListDispatch] = useContext(
    StudentListContext
  );
  const [addResult, setAddResult] = useState(false);

  const [studentInfo, setStudentInfo] = useState();
  // const [resultsInfo, setResultsInfo] = useState({});
  const [allresultsInfo, setAllResultsInfo] = useState([]);

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

  const handleResultInfo = result => {
    console.log("Results", allresultsInfo);
    setAllResultsInfo([...allresultsInfo, result]);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(studentInfo);
    studentListDispatch({
      type: "ADD_USER",
      payload: {
        id: Date.now(),
        ...studentInfo,
      },
    });
  };
  console.log(allresultsInfo);
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
        {allresultsInfo.length > 0 && (
          <AddedResult allresultsInfo={allresultsInfo} />
        )}
        {addResult && (
          <AddStudentResultForm
            handleCancelResult={handleCancelResult}
            handleResultInfo={handleResultInfo}
            handleInputChange={handleInputChange}
          />
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
