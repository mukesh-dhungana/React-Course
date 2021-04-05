import React, { useState } from "react";
import AddStudentResultForm from "./AddStudentResultForm";

const AddStudentForm = () => {
  const [addResult, setAddResult] = useState(false);

  const handleAddResult = () => {
    setAddResult(!addResult);
  };

  const handleCancelResult = () => {
      if(addResult) {
          setAddResult(false)
      }
  }

  return (
    <>
      <form className="">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Student Name"
            />
          </div>
          <div className="col-6">
            <input
              type="email"
              className="form-control"
              placeholder="Student Email"
            />
          </div>
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              placeholder="Student Address"
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Student Contact Number"
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
        {addResult && <AddStudentResultForm handleCancelResult={handleCancelResult} />}

        <div className="modal-footer">
          <button type="button" className="btn btn-primary btn-lg">
            Save Entry
          </button>
          
        </div>
      </form>
    </>
  );
};

export default AddStudentForm;
