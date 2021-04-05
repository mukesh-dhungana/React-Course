import React from "react";

const AddStudentResultForm = (props) => {
  return (
    <>
      <div className="container">
        <form action="">
          <div className="row">
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="semester"
              />
            </div>
            <div className="col-4">
              <input type="text" className="form-control" placeholder="GPA" />
            </div>

            <div className="col-4">
              <button type="button" class="btn btn-success btn-large ">
                Add
              </button>
              <button type="button" class="btn btn-outline-warning btn-large ml-4 " onClick={props.handleCancelResult}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddStudentResultForm;
