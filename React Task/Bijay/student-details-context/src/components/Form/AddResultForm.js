import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { StudentDetailContext } from "../../context/StudentDetailContext";
import "./Forms.css";
const AddResultForm = ({ onclick }) => {
  const [newResult, setNewResult] = useState({});

  const { id } = useParams();

  const [studentResultState, studentResultDispatch] = useContext(
    StudentDetailContext
  );

  const handleInputChange = e => {
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
        student_id: id,
        result: {
          id: Date.now() + 1,
          ...newResult,
        },
      },
    });
    onclick(false)
  };

  return (
    <>
      <div
        class="input-modal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
      >
        <div className="form-wrapper">
          <form action="" onSubmit={handleFormSubmit}>
            <div className="row">
              <div className="col-4">
                <input
                  type="text"
                  className="input-field"
                  placeholder="semester"
                  name="semester"
                  defaultValue=""
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-4">
                <input
                  type="text"
                  className="input-field"
                  placeholder="GPA"
                  name="gpa"
                  defaultValue=""
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-4 d-flex">
                <button
                  type="submit"
                  className="btn btn-success btn-large "
                  onClick={handleFormSubmit}
                >
                  Add
                </button>
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
