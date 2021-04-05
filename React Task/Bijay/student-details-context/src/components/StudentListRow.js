import React from "react";

const StudentListRow = ({student}) => {
  return (
    <>
      <tr className="table-light">
        <th scope="row">{student.id}</th>
        <td>{student.student_name}</td>
        <td>{student.student_email}</td>
        <td>{student.student_contactNo}</td>
        <td className="edit-student">
          <span className=" badge-pill badge-primary ">VIEW</span>
        </td>
        <td className="delete-student">
          <span className=" badge-pill badge-danger ">DELETE</span>
        </td>
      </tr>
    </>
  );
};

export default StudentListRow;
