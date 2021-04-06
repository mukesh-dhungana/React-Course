import React, { useState } from "react";
import StudentDetailBodyRow from "./StudentDetailBodyRow";
import AddResultForm from './Form/AddResultForm'
const StudentDetailBody = ({ results, student }) => {
  console.log("ResultBody=> ", results);

  const [showAddResult, setShowAddResult] = useState(false)

  const handleAddResultClick = () => {
    setShowAddResult(true)
  }

  const hideModal = set => {
    setShowAddResult(set);
  }

  return (
    <>
    {showAddResult && <AddResultForm onclick={hideModal}/>}
      <div className="container-fluid">
        <table className="table table-hover">
          <thead className="text-center">
            <tr>
              <th scope="col" colSpan="1">
                <span
                  className="btn btn-success"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={handleAddResultClick}
                >
                  Add New Result
                </span>
              </th>
              <th scope="col" colSpan="2">
                Result Details
              </th>
              <th scope="col" colSpan="2">
                <span className="btn btn-outline-warning">
                  DELETE ALL Results
                </span>
              </th>
            </tr>
            <tr>
              <th scope="col">Student ID</th>
              <th scope="col">Semester</th>
              <th scope="col">GPA</th>
              <th></th>
              <th></th>
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
