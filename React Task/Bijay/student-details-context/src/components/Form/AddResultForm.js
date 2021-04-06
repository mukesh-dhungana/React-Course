import React, { useState } from "react";
import "./Forms.css";
const AddResultForm = ({ onclick }) => {
  const [newResult, setNewResult] = useState({});

  const handleInputChange = e => {
    setNewResult(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div
        class="input-modal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
      >
        <div className="form-wrapper">
          <form action="">
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
                <button type="button" className="btn btn-success btn-large ">
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
