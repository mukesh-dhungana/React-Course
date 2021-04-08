import React, { useContext } from "react";
import { StudentListContext } from "../context/StudentListContext";
import { StudentDetailContext } from "../context/StudentDetailContext";
import StudentListRow from "./StudentListRow";

const StudentsList = () => {
  const [studentsList, StudentListDispatch] = useContext(StudentListContext);

  const [studentResultList, StudentResultDispatch] = useContext(
    StudentDetailContext
  );

  const handleStudentDelete = studentId => {
    console.log("Student Delete", studentId);
    StudentResultDispatch({
      type: "DELETE_ALL",
      payload: studentId,
    });
    StudentListDispatch({
      type: "DELETE_STUDENT",
      payload: studentId,
    });
  };

  return (
    <>
      <table className="table table-hover">
        <thead className="text-center">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Student Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact No.</th>
            <th scope="col" colSpan="2">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {studentsList.students.map(student => (
            <StudentListRow
              key={student.id}
              student={student}
              handleStudentDelete={handleStudentDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default StudentsList;
