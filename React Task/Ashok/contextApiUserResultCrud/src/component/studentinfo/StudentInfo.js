import React, { useContext } from "react";
import {
  DELETE_USER_INFO,
  DELETE_USER_RESULT_FROM_USER_INFO,
} from "../../action/actionTypes";
import { StudentInfoContext } from "../../context/studentInfo.conext";
import { StudentResult } from "../../context/studentResult.context";
import Adduser from "../AddUser/Adduser";
import StudentResults from "../studentresult/StudentResult";
import "./style.css";

function StudentInfo() {
  const [Infostate, dispatchInfo] = useContext(StudentInfoContext);
  const [resultInfo, dispatchResult] = useContext(StudentResult);
  console.log(Infostate, resultInfo);

  const handleDeleteUser = (id) => {
    dispatchInfo({ type: DELETE_USER_INFO, payload: id });
    dispatchResult({ type: DELETE_USER_RESULT_FROM_USER_INFO, payload: id });
  };

  return (
    <div className="student-info-container">
      <Adduser type="Add" student={{ name: "", email: "", phone: "" }} />
      {Infostate?.students?.length ? (
        Infostate?.students?.map((student) => {
          const { id, name, email, phone } = student;
          return (
            <div key={id} className="info-container">
              <div className="info-nabvar">
                <h4>Student Info</h4>
                <button
                  onClick={() => handleDeleteUser(id)}
                  className="btn-danger"
                >
                  Delete Student
                </button>
              </div>
              <p>Name: {name}</p>
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
              <hr />
              <StudentResults studentId={id} />
              <Adduser type="Edit" student={student} />
            </div>
          );
        })
      ) : (
        <h3>No any user</h3>
      )}
    </div>
  );
}

export default StudentInfo;
