import React from "react";
import AddStudentForm from './AddStudentForm'
const AddStudent = (props) => {


  return (
    <>
      <div className="container">
        <div className="modal-header">
          <h5 className="modal-title">New Student Info</h5>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={()=>props.handleCloseForm(false)}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        {/* FORM SHOWN HERE!!!  */}
        <AddStudentForm close={props.handleCloseForm}/>

        
      </div>
    </>
  );
};

export default AddStudent;
