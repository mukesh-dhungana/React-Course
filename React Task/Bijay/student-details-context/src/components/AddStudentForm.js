import React, { useState, useContext } from "react";
import { StudentDetailContext } from "../context/StudentDetailContext";
import { StudentListContext } from "../context/StudentListContext";
import AddedResult from "./AddedResult";
import AddStudentResultForm from "./AddStudentResultForm";
import useForm from "./validation/useForm";

const AddStudentForm = ({ close }) => {
  const [, studentListDispatch] = useContext(StudentListContext);

  const [, studentResultDispatch] = useContext(StudentDetailContext);

  const [addResult, setAddResult] = useState(false);

  const [formValid, setFormValid] = useState(false);

  const [allresultsInfo, setAllResultsInfo] = useState([]);

  let initialState = {
    student_name: "",
    student_email: "",
    student_contactNo: "",
    student_address: "",
  };

  const handleAddResult = () => {
    setAddResult(!addResult);
  };

  const handleCancelResult = () => {
    if (addResult) {
      setAddResult(false);
    }
  };

  const handleResultInfo = result => {
    console.log("Results", allresultsInfo);
    setAllResultsInfo([...allresultsInfo, result]);
    handleAddResult();
  };

  const onChange = e => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmitForm = e => {
    const forId = Date.now();
    studentListDispatch({
      type: "ADD_STUDENT",
      payload: {
        id: forId,
        ...values,
      },
    });
    studentResultDispatch({
      type: "ADD_RESULT",
      payload: {
        id: Date.now() + 1,
        student_id: forId,
        results: [...allresultsInfo],
      },
    });
    close(false);
    // setIsSubmitting(false)
  };

  const handleDeleteResult = resultId => {
    setAllResultsInfo(allresultsInfo.filter(res => res.id !== resultId));
  };

  const { handleChange, values, handleSubmit, errors } = useForm(
    initialState,
    handleSubmitForm
  );
  return (
    <>
      <form className="" onSubmit={e => handleSubmit(e)}>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Student Name"
              name="student_name"
              onChange={onChange}
              value={values.student_name}
            />
            {errors.student_name && (
              <p className="errors">{errors.student_name}</p>
            )}
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Student Email"
              name="student_email"
              onChange={onChange}
              value={values.student_email}
            />
            {errors.student_email && (
              <p className="errors">{errors.student_email}</p>
            )}
          </div>
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              placeholder="Student Address"
              name="student_address"
              onChange={onChange}
              value={values.student_address}
            />
            {errors.student_address && (
              <p className="errors">{errors.student_address}</p>
            )}
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Student Contact Number"
              name="student_contactNo"
              onChange={onChange}
              value={values.student_contactNo}
            />
            {errors.student_contactNo && (
              <p className="errors">{errors.student_contactNo}</p>
            )}
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
          <AddedResult
            allresultsInfo={allresultsInfo}
            handleDeleteResult={handleDeleteResult}
          />
        )}
      </form>
      {addResult && (
        <AddStudentResultForm
          handleCancelResult={handleCancelResult}
          handleResultInfo={handleResultInfo}
          handleInputChange={handleChange}
        />
      )}
      <div className="modal-footer form-submit-btn">
        <button
          type="submit"
          className="btn btn-primary btn-lg"
          disabled={formValid}
          onClick={e => handleSubmit(e)}
        >
          Save Entry
        </button>
      </div>
    </>
  );
};

export default AddStudentForm;
