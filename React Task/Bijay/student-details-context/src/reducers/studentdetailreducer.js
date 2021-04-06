export const studentDetailReducer = (state, action) => {
    switch (action.type) {
        case "ADD_RESULT":
            console.log('Result Added =>', action.payload);
            return {
                ...state,
                studentResults: [...state.studentResults, action.payload]
              };
        case "ADD_RESULT_AFTER":
            console.log('Result Addition =>', action.payload);
            return {
                ...state,
                studentResults: state.studentResults.map(res => (
                    res.student_id === action.payload.student_id ? (
                        {
                            ...res,
                            results: [...res.results, action.payload.result]
                        }
                    ) : res
                ))
            }
        default:
            return state;
    }
}