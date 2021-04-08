export const studentDetailReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RESULT":
      return {
        ...state,
        studentResults: [...state.studentResults, action.payload],
      };
    case "ADD_RESULT_AFTER":
      return {
        ...state,
        studentResults: state.studentResults.map(res =>
          res.student_id === action.payload.student_id
            ? {
                ...res,
                results: [...res.results, action.payload.result],
              }
            : res
        ),
      };
    case "DELETE_ONE_RESULT":
      return {
        ...state,
        studentResults: state.studentResults.map(res =>
          res.student_id === action.payload.student_id
            ? {
                ...res,
                results: res.results.filter(
                  result => result.id !== action.payload.resultId
                ),
              }
            : res
        ),
      };
    case "DELETE_ALL_RESULT":
      return {
        ...state,
        studentResults: state.studentResults.map(res =>
          res.student_id === action.payload.student_id
            ? {
                ...res,
                results: [],
              }
            : res
        ),
      };
    case "DELETE_ALL":
      return {
        ...state,
        studentResults: state.studentResults.filter(
          res => res.student_id !== action.payload
        ),
      };

    case "EDIT_RESULT":
      return {
        ...state,
        studentResults: state.studentResults.map(res =>
          res.student_id === action.payload.student_id
            ? {
                ...res,
                results: res.results.map(result =>
                  result.id === action.payload.editedResult.id
                    ? action.payload.editedResult
                    : result
                ),
              }
            : res
        ),
      };
    default:
      return state;
  }
};
