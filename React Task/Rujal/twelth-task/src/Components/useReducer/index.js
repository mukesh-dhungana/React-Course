export const initialState = {
    users: [
        { id: 1, name: "Rujal" },
        { id: 2, name: "Ram" }
    ],
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.payload]
            }

        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(x => x.id !== action.payload)
            }

        case "EDIT_USER":
            return {
                ...state,
                users: state.users.map(x => x.id === action.payload.id ? action.payload : x)
            }

        default: return state
    }
}