import React, { useState } from "react";
import AddStudent from "./AddStudent";

const TopHeader = () => {

    const [addStudentForm, setAddStudentForm] = useState(false)

    const handleAddButton = () => {
        setAddStudentForm(!addStudentForm)
    }

    const handleCloseForm = () => {
        if(addStudentForm) {
            setAddStudentForm(false)
        }
    }

  return (
    <>
      <h2>WEN Student Info</h2>
      <blockquote className="blockquote">
        Here we have all the list of students with their Details.
        <small className="text-danger"> WEN Welcomes You!</small>
      </blockquote>
      <button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleAddButton}>
        {addStudentForm ? "Cancel New Entry" : "Add New Student"}
      </button>
      {addStudentForm && <AddStudent handleCloseForm={handleCloseForm} />}
    </>
  );
};

export default TopHeader;
