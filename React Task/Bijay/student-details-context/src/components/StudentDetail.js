import React, { useContext } from "react";
import { useParams } from "react-router";
import { StudentDetailContext } from "../context/StudentDetailContext";
import { StudentListContext } from "../context/StudentListContext";
import StudentDetailBody from "./StudentDetailBody";
import StudentDetailHeader from "./StudentDetailHeader";

const StudentDetail = () => {
  const [studentsList] = useContext(StudentListContext);
  const [studentResultLists] = useContext(StudentDetailContext);

  const { id } = useParams();

  const { students } = studentsList;
  const { studentResults } = studentResultLists;

  const matchedStudent = students.find(student => student.id === +id);

  const matchedResult = studentResults.find(
    results => results.student_id === +id
  );

  return (
    <>
      {<StudentDetailHeader key={matchedStudent.id} student={matchedStudent} />}
      {
        <StudentDetailBody
          key={matchedResult.id}
          results={matchedResult.results}
        />
      }
      {/* <StudentDetailHeader studentsList={studentsList} />
      <StudentDetailBody /> */}
    </>
  );
};

export default StudentDetail;
