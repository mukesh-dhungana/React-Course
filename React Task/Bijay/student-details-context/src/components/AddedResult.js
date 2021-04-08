import React from "react";

const AddedResult = props => {
  // const { allresultsInfo } = props;
  // console.log(props.allresultsInfo);
  return (
    <>
      <table className="table table-hover">
        <thead className="text-center">
          <tr>
            <th scope="col">Semester</th>
            <th scope="col">GPA</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {props.allresultsInfo.map(result => (
            <tr key={result.id}>
              <td> {result.semester} </td>
              <td> {result.gpa} </td>
              <td>
                {" "}
                <span className=" badge-pill badge-danger" onClick={()=>props.handleDeleteResult(result.id)} >DELETE</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AddedResult;
