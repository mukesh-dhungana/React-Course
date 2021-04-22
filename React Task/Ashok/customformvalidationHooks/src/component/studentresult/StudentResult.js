import React, { useContext } from "react";
import {
  DELETE_SINGLE_RESULT,
  DELETE_USER_RESULT,
} from "../../action/actionTypes";
import { StudentResult } from "../../context/studentResult.context";
import AdduserResult from "../AddUserResult/AddUSerResult";

function StudentResultInfo({ studentId }) {
  const [ResultSDtate, dispatchResult] = useContext(StudentResult);
  const userResult = ResultSDtate.studentSemResult.find(
    (result) => result.studentId === studentId
  );

  const handleResultDelete = (id) => {
    dispatchResult({ type: DELETE_USER_RESULT, payload: id });
  };

  const handleRemoveSingleResult = (singleResultId, resultId) => {
    dispatchResult({
      type: DELETE_SINGLE_RESULT,
      payload: { singleResultId, resultId },
    });
  };

  return (
    <div style={{ margin: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h5> Result info</h5>
        {userResult?.result?.length ? (
          <button
            onClick={() => handleResultDelete(userResult?.id)}
            className="btn-danger"
          >
            Delete Result
          </button>
        ) : (
          ""
        )}
        <AdduserResult
          type="Add"
          result={{ sem: "", gpa: "" }}
          id={userResult?.id}
          primary="btn-secondary"
        />
      </div>
      {userResult?.result?.length ? (
        userResult?.result?.map((item) => (
          <div
            key={item?.id}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <p>Sem: {item?.sem}</p>
            <p>---{`>`}</p>
            <p>Gpa: {item?.gpa}</p>
            <AdduserResult
              type="Edit"
              id={userResult?.id}
              result={item}
              primary="btn-primary"
            />
            <button
              className="btn-danger"
              onClick={() => handleRemoveSingleResult(item.id, userResult.id)}
            >
              DELETE
            </button>
          </div>
        ))
      ) : (
        <h3>No any results Added</h3>
      )}
    </div>
  );
}

export default StudentResultInfo;
