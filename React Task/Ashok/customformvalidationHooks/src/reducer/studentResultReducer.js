import {
  ADD_USER_RESULT,
  DELETE_SINGLE_RESULT,
  DELETE_USER_RESULT,
  DELETE_USER_RESULT_FROM_USER_INFO,
  EDIT_USER_RESULT,
  REGISTER_USER_RESULT_FROM_NEW_USER,
} from "../action/actionTypes";

export const studentResultInitailState = {
  studentSemResult: [
    {
      id: 1,
      studentId: 1,
      result: [
        { id: 1, sem: "first", gpa: 3 },
        { id: 2, sem: "second", gpa: 3.4 },
        { id: 3, sem: "third", gpa: 3.5 },
        { id: 4, sem: "fourth", gpa: 3.1 },
      ],
    },

    {
      id: 2,
      studentId: 2,
      result: [
        { id: 1, sem: "first", gpa: 3.9 },
        { id: 2, sem: "second", gpa: 4 },
        { id: 3, sem: "third", gpa: 2.9 },
        { id: 4, sem: "fourth", gpa: 4 },
      ],
    },
  ],
};

export const studentResultReducer = (state, action) => {
  switch (action.type) {
    case DELETE_USER_RESULT_FROM_USER_INFO:
      return {
        ...state,
        studentSemResult: state.studentSemResult.filter(
          (result) => result.studentId !== action.payload
        ),
      };

    case DELETE_USER_RESULT:
      return {
        ...state,
        studentSemResult: state.studentSemResult.map((result) =>
          result.id === action.payload
            ? {
                ...result,
                result: [],
              }
            : result
        ),
      };

    case DELETE_SINGLE_RESULT:
      return {
        ...state,
        studentSemResult: state.studentSemResult.map((result) =>
          result.id === action.payload.resultId
            ? {
                ...result,
                result: result.result.filter(
                  (item) => item.id !== action.payload.singleResultId
                ),
              }
            : result
        ),
      };

    case ADD_USER_RESULT:
      return {
        ...state,
        studentSemResult: state.studentSemResult.map((userResults) =>
          userResults.id === action.payload.id
            ? {
                ...userResults,
                result: [...userResults.result, action.payload.result],
              }
            : userResults
        ),
      };

    case EDIT_USER_RESULT:
      return {
        ...state,
        studentSemResult: state?.studentSemResult?.map((userResults) =>
          userResults.id === action.payload.id
            ? {
                ...userResults,
                result: userResults.result.map((item) =>
                  item.id === action.payload.result.id
                    ? action.payload.result
                    : item
                ),
              }
            : userResults
        ),
      };

    case REGISTER_USER_RESULT_FROM_NEW_USER:
      return {
        ...state,
        studentSemResult: [...state.studentSemResult, action.payload],
      };

    default:
      return state;
  }
};
