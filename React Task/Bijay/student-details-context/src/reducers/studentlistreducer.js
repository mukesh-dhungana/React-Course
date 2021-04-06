// import {studentList} from '../data'

export const studentListReducer = (state, action) => {
  console.log("Reducer", state);

  switch (action.type) {
    case "ADD_STUDENT":
      console.log("Add User", action.payload);

      return {
        ...state,
        students: [...state.students, action.payload]
      };

    default:
      return state;
  }
};
