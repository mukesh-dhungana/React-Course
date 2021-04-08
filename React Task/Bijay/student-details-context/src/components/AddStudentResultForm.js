import React, { useState } from "react";
import useForm from "./validation/useForm";

const AddStudentResultForm = props => {
  const [resultInfo, setResultInfo] = useState({});

  let initialState = {
    semester: "",
    gpa: ""    
  };

  const handleInputChange = e => {
    setResultInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onChange = e => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleResultSubmit =(e) => {
    e.preventDefault();
    const result = {
      ...resultInfo,
      id: Date.now() + 1
    }
    props.handleResultInfo(result)
  }

  const {handleChange, handleSubmit, errors} = useForm()

  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleResultSubmit}>
          <div className="row">
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="semester"
                name="semester"
                defaultValue=""
                onChange={onChange}
              />
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="GPA"
                name="gpa"
                defaultValue=""
                onChange={onChange}
              />
            </div>

            <div className="col-4">
              <button
                type="button"
                className="btn btn-success btn-large "
                onClick={handleResultSubmit}
              >
                Add
              </button>
              <button
                type="button"
                className="btn btn-outline-warning btn-large ml-4 "
                onClick={props.handleCancelResult}
              >
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
