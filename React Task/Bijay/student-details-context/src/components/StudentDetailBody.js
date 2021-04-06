import React from "react";
import StudentDetailBodyRow from "./StudentDetailBodyRow";

const StudentDetailBody = ({ results, student }) => {
  console.log("ResultBody=> ", results);
  return (
    <>
      <div className="container-fluid">
        <table className="table table-hover">
          <thead className="text-center">
            <tr>
              <th scope="col" rowSpan="2">
                Student_Id
              </th>
              <th scope="col" colSpan="2">
                Result Details
              </th>
              <th scope="col" rowSpan="2">
                Action
              </th>
            </tr>
            <tr>
              <th scope="col">Semester</th>
              <th scope="col">GPA</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {results?.map(result => (
              <StudentDetailBodyRow
                key={result.id}
                result={result}
                student={student}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentDetailBody;
