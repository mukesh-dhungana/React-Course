import React, { useState, useContext } from "react";
import StudentDetailBodyRow from "./StudentDetailBodyRow";
import AddResultForm from './Form/AddResultForm'
import { StudentDetailContext } from "../context/StudentDetailContext";
import { useParams } from "react-router";
const StudentDetailBody = ({ results}) => {
  console.log("ResultBody=> ", results);

  const [showAddResult, setShowAddResult] = useState(false)
  const [studentResult, StudentResultDispatch] = useContext(StudentDetailContext)
  const {id } = useParams();

  const handleAddResultClick = () => {
    setShowAddResult(true)
  }

  const hideModal = set => {
    setShowAddResult(set);
  }

  const handleSingleDeleteResult = (resultId) => {
    console.log('Result Id=>', resultId);
    StudentResultDispatch({
      type: "DELETE_ONE_RESULT",
      payload: {
        student_id: +id,
        resultId: resultId
      }
    })
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
              <th scope="col">Result ID</th>
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
                handleSingleDelete={handleSingleDeleteResult}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentDetailBody;
