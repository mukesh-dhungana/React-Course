import React, { useState, useContext } from "react";
import StudentDetailBodyRow from "./StudentDetailBodyRow";
import AddResultForm from "./Form/AddResultForm";
import { StudentDetailContext } from "../context/StudentDetailContext";
import { useParams } from "react-router";
const StudentDetailBody = ({ results }) => {
  console.log("ResultBody=> ", results);

  const [showAddResult, setShowAddResult] = useState(false);

  const [editMode, setEditMode] = useState(false);
  const [idToEdit, setIdToEdit] = useState();

  const [studentResult, StudentResultDispatch] = useContext(
    StudentDetailContext
  );
  const { id } = useParams();

  const handleAddResultClick = () => {
    setShowAddResult(true);
    setEditMode(false);
  };

  const hideModal = set => {
    setShowAddResult(set);
    setEditMode(false);
  };

  const handleSingleDeleteResult = resultId => {
    // console.log('Result Id=>', resultId);
    StudentResultDispatch({
      type: "DELETE_ONE_RESULT",
      payload: {
        student_id: +id,
        resultId: resultId,
      },
    });
  };

  const handleAllResultDelete = () => {
    console.log("All Result Deleted");
    StudentResultDispatch({
      type: "DELETE_ALL_RESULT",
      payload: {
        student_id: +id,
      },
    });
  };

  const handleResultEdit = resultId => {
    setShowAddResult(true);
    setEditMode(true);
    setIdToEdit(resultId);
  };

  return (
    <>
      {showAddResult && editMode ? (
        <AddResultForm
          onclick={hideModal}
          editMode={editMode}
          resultId={idToEdit}
          results={results}
        />
      ) : (
        showAddResult && <AddResultForm onclick={hideModal} />
      )}
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
                {results.length > 0 ? "Result Details" : "No Results"}
              </th>
              <th scope="col" colSpan="2">
                {results.length > 0 && (
                  <span
                    className="btn btn-outline-warning"
                    onClick={handleAllResultDelete}
                  >
                    DELETE ALL Results
                  </span>
                )}
              </th>
            </tr>
            {results.length > 0 && (
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Semester</th>
                <th scope="col">GPA</th>
                <th></th>
                <th></th>
              </tr>
            )}
          </thead>
          <tbody className="text-center">
            {results?.map((result, idx) => (
              <StudentDetailBodyRow
                key={result.id}
                result={result}
                handleSingleDelete={handleSingleDeleteResult}
                handleResultEdit={handleResultEdit}
                idx={idx}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentDetailBody;
