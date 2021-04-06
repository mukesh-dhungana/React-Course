import React from "react";

const StudentDetailBodyRow = ({result, student}) => {
  return (
    <>
      <tr className="table-light">
        <td> {student.id} </td>
        <td> {result.semester} </td>
        <td> {result.gpa} </td>
        <td>
          <span className=" badge-pill badge-primary">CLICK</span>
          <span className=" badge-pill badge-danger ml-3 mr-0">DELETE</span>
        </td>
      </tr>
    </>
  );
};

export default StudentDetailBodyRow;
