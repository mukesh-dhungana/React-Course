import React, { useReducer, createContext } from "react";

const studentResults = createContext(null);
const StudentResult = (props) => {
  const initialState = {
    studentSemResult: [
      {
        id: 1,
        studentId: 1,
        result: [
          { id: 1, sem: "First Sem", gpa: 3 },
          { id: 2, sem: "Second Sem", gpa: 3 },
          { id: 3, sem: "Third Sem", gpa: 3 },
          { id: 4, sem: "Fourth Sem", gpa: 3 },
        ],
      },
      {
        id: 2,
        studentId: 2,
        result: [
          { id: 1, sem: "First Sem", gpa: 3 },
          { id: 2, sem: "Second Sem", gpa: 3 },
          { id: 3, sem: "Third Sem", gpa: 3 },
          { id: 4, sem: "Fourth Sem", gpa: 3 },
        ],
      },
    ],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          studentSemResult: [...state.studentSemResult, action.payload],
        };
      case "DELETE":
        return {
          ...state,
          studentSemResult: state.studentSemResult.filter(
            (s) => s.studentId !== action.payload
          ),
        };
      case "EDIT":
        return {
          ...state,
          studentSemResult: [
            ...state.studentSemResult.filter(
              (s) => s.id !== action.payload.studentId
            ),
            action.payload,
          ],
        };

      default:
        return state;
    }
  };

  const [resultState, resultDispatch] = useReducer(reducer, initialState);
  return (
    <studentResults.Provider value={{ resultState, resultDispatch }}>
      {props.children}
    </studentResults.Provider>
  );
};

export { studentResults };
export default StudentResult;
