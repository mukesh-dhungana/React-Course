import React from "react";

const StudentDetailBody = () => {
  return (
    <>
      <div className="container-fluid">
        <table className="table table-hover">
          <thead className="text-center">
            <tr>
              <th scope="col" rowSpan="2">
                Id
              </th>
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
            <tr className="table-light">
              <th scope="row">1</th>
              <td>202104001</td>
              <td>First</td>
              <td>3.2</td>
              <td>
                <span className=" badge-pill badge-primary">CLICK</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentDetailBody;
