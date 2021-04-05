import React, { useContext } from "react";
import { StudentListContext } from "../context/StudentListContext";
import StudentListRow from "./StudentListRow";

const StudentsList = () => {

  const [studentsList, setStudentsList] =useContext(StudentListContext)

  return (
    <>
      <table className="table table-hover">
        <thead className="text-center">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Student Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact No.</th>
            <th scope="col" colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {studentsList.students.map(student => (
            <StudentListRow key={student.id} student={student} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default StudentsList;
