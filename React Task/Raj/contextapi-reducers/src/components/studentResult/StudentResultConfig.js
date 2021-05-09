import { useReducer } from "react";
import { StudentResults } from "../Context";

const initialState = {
  result: [
    {
      id: 1,
      studentId: 1,
      results: [
        { id: 1, sem: "first", gpa: 1 },
        { id: 2, sem: "second", gpa: 2 },
        { id: 3, sem: "third", gpa: 3 },
        { id: 4, sem: "fourth", gpa: 4 },
      ],
    },
    {
      id: 2,
      studentId: 2,
      results: [
        { id: 1, sem: "first", gpa: 6 },
        { id: 2, sem: "second", gpa: 7 },
        { id: 3, sem: "third", gpa: 8 },
        { id: 4, sem: "fourth", gpa: 9 },
      ],
    },
  ],
};

const DetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add":
      return {
        ...state,
        result: [...state.result, action.payload],
      };
    case "Delete":
      return {
        ...state,
        result: state.result.map(data =>
          data.id === action.payload.firstId
            ? {
                ...data,
                results: data.results.filter(
                  val => val.id !== action.payload.secondId
                ),
              }
            : data
        ),
      };
    case "AllDelete":
      return {
        ...state,
        result: state.result.filter(data => data.id !== action.payload.id),
      };
      break;
    case "Edit":
      return {
        ...state,
        result: [
          ...state.result.filter(x => x.id !== action.payload.id),
          action.payload,
        ],
      };
      break;
    default:
      return state;
  }
};

export const ResultProvider = props => {
  const [state2, dispatch2] = useReducer(DetailReducer, initialState);
  return (
    <StudentResults.Provider value={{ state2, dispatch2 }}>
      {props.children}
    </StudentResults.Provider>
  );
};
