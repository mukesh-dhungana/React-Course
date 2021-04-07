import React, { useState } from "react";
import { withRouter } from "react-router";
import AddStudent from "./AddStudent";

const TopHeader = ({url, history}) => {
  const [addStudentForm, setAddStudentForm] = useState(false);

  // const [showReturnBtn, setShowReturnBtn] = useState(false);

  const handleAddButton = () => {
    setAddStudentForm(!addStudentForm);
  };

  const handleCloseForm = val => {
    if (addStudentForm) {
      val = false;
    }
    setAddStudentForm(val);
  };
  // console.log(history)
  return (
    <>
      <h2>WEN Student Info</h2>
      <blockquote className="blockquote">
        Here we have all the list of students with their Details.
        <small className="text-danger"> WEN Welcomes You!</small>
      </blockquote>
      {history.location.pathname!=='/' ? (
        <button
          type="button"
          className="btn btn-outline-warning btn-lg btn-block"
          onClick={()=> history.push('/')}
        >
          Return to Home
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={handleAddButton}
        >
          {addStudentForm ? "Cancel New Entry" : "Add New Student"}
        </button>
      )}
      {addStudentForm && <AddStudent handleCloseForm={handleCloseForm} />}
    </>
  );
};

export default withRouter(TopHeader);
