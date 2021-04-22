import { ADD_USER, DELETE_USER_INFO, EDIT_USER } from "../action/actionTypes";

export const studentInfoInitailState = {
  students: [
    { id: 1, name: "xyz", email: "xyz@gmail.com", phone: "2122222" },
    { id: 2, name: "abc", email: "abc@gmail.com", phone: "4535435" },
  ],
};

export const studentInfoReducer = (state, action) => {
  switch (action.type) {
    case DELETE_USER_INFO:
      return {
        ...state,
        students: state.students.filter((user) => user.id !== action.payload),
      };
    case ADD_USER:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case EDIT_USER:
      return {
        ...state,
        students: state.students.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };

    default:
      return state;
  }
};
