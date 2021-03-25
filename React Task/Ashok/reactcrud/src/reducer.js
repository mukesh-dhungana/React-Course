import { ADD_USER, EDIT_USER, REMOVE_USER } from "./actionTypes";

export const initalState = {
  allUsers: [
    { id: 1, name: "Ashok Ganika", address: "Pepsicola" },
    { id: 2, name: "maX Ganika", address: "Pepsicola" },
    { id: 3, name: "jENNIFER Ganika", address: "Pepsicola" },
    { id: 4, name: "kUSUM Ganika", address: "Pepsicola" },
    { id: 5, name: "Dell Ganika", address: "Pepsicola" },
    { id: 6, name: "Micheal Ganika", address: "Pepsicola" },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        allUsers: [...state.allUsers, action.payload],
      };
    case EDIT_USER:
      const indexoFUser = state.allUsers.findIndex(
        (item) => item.id === action.payload.id
      );
      state.allUsers.splice(indexoFUser, 1, action.payload);
      return {
        allUsers: state.allUsers.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case REMOVE_USER:
      const newAllUser = state.allUsers.filter(
        (item) => item.id !== action.payload
      );
      return { allUsers: [...newAllUser] };
    default:
      return state;
  }
};
