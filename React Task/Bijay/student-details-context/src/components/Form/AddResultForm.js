import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { StudentDetailContext } from "../../context/StudentDetailContext";
import "./Forms.css";
const AddResultForm = ({ onclick, editMode, resultId, results }) => {
  const [newResult, setNewResult] = useState({});

  const [semester, setSemester] = useState("");
  const [gpa, setGpa] = useState("");

  const { id } = useParams();

  const [studentResultState, studentResultDispatch] = useContext(
    StudentDetailContext
  );

  const handleInputChange = e => {
    // if (editMode) {
    //   console.log(e.target);
    //   setSemester(e.target.value);
    //   setGpa(e.target.value);
    // } else {
      setNewResult(prev => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(newResult);
    studentResultDispatch({
      type: "ADD_RESULT_AFTER",
      payload: {
        student_id: +id,
        result: {
          id: Date.now() + 1,
          ...newResult,
        },
      },
    });
    onclick(false);
  };

  const handleEditSubmit = e => {
    e.preventDefault();
    console.log("Edit Mode", semester, gpa);
    studentResultDispatch({
      type: "EDIT_RESULT",
      payload: {
        student_id: +id,
        editedResult: {
          id: resultId,
          ...newResult,
        },
      },
    });
    onclick(false);
  };

  let val;

  let result;

  if (editMode) {
    val = results.filter(result => result.id === resultId);
    result = val[0];
  }

  // console.log("Add Result=>", results, studentResults, resultId, result);
  return (
    <>
      <div
        className="input-modal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
      >
        <div className="form-wrapper">
          <form action="" onSubmit={editMode ? handleEditSubmit : handleFormSubmit}>
            <div className="row">
              <div className="col-4">
                <input
                  type="text"
                  className="input-field"
                  placeholder="semester"
                  name="semester"
                  defaultValue={editMode ? result.semester : ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-4">
                <input
                  type="text"
                  className="input-field"
                  placeholder="GPA"
                  name="gpa"
                  defaultValue={editMode ? result.gpa : ""}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-4 d-flex">
                {editMode ? (
                  <button
                    type="submit"
                    className="btn btn-success btn-large "
                    onClick={handleEditSubmit}
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-success btn-large "
                    onClick={handleFormSubmit}
                  >
                    Add
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-outline-warning btn-large ml-4 "
                  onClick={() => onclick(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddResultForm;
