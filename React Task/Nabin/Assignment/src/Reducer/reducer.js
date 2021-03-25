export const initialState = {
    user : [
        {id: "1", name : "Nabin"},
        {id: "2", name : "Shahi"}
    ]
};

export const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "ADD":
            return {
                ...state, 
                user: [...state.user, action.payload]
            }
        case "EDIT":
            return {
                ...state,
                user: state.user.map((user) => user.id === action.payload.id ? action.payload : user)
            }
        case "DELETE":
            return {
                ...state,
                user: state.user.filter((user) => user.id !== action.payload)
            }
        default:
            return state;
    }
}