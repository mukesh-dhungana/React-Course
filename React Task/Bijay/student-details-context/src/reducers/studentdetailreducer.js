export const studentDetailReducer = (state, action) => {
    switch (action.type) {
        case "ADD_RESULT":
            console.log('Result Added =>', action.payload);
            return {
                ...state,
                studentResults: [...state.studentResults, action.payload]
              };
    
        default:
            return state;
    }
}