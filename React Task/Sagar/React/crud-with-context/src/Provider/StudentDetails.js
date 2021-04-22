import React, { createContext, useReducer } from "react";

const studentDetails = createContext(null);

const StudentDetails = (props) => {
  const initialState = {
    students: [
      { id: 1, name: "John", email: "abc", phone: "1111112" },
      { id: 2, name: "Cena", email: "xyz", phone: "2122222" },
    ],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          students: [action.payload, ...state.students],
        };

      case "DELETE":
        return {
          ...state,
          students: state.students.filter((s) => s.id !== action.payload),
        };

      case "EDIT":
        return {
          ...state,
          students: [
            ...state.students.filter(
              (s) => s.id !== action.payload.detailValue.id
            ),
            action.payload.detailValue,
          ],
        };
      default:
        return state;
    }
  };

  const [detailState, detailDispatch] = useReducer(reducer, initialState);

  return (
    <studentDetails.Provider value={{ detailState, detailDispatch }}>
      {props.children}
    </studentDetails.Provider>
  );
};

export { studentDetails };
export default StudentDetails;
