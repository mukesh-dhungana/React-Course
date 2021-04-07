import React from "react";

const StudentDetailBodyRow = ({result, handleSingleDelete, handleResultEdit}) => {
  return (
    <>
      <tr className="table-light">
        <td> {result.id} </td>
        <td> {result.semester} </td>
        <td> {result.gpa} </td>
        <td>
          <span className=" badge-pill badge-primary" onClick={()=> handleResultEdit(result.id)} >EDIT</span>
          <span className=" badge-pill badge-danger ml-3 mr-0" onClick={()=>handleSingleDelete(result.id)} >DELETE</span>
        </td>
      </tr>
    </>
  );
};

export default StudentDetailBodyRow;
