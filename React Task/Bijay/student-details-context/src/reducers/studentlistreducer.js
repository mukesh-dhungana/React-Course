// import {studentList} from '../data'

export const studentListReducer = (state, action) => {
  console.log("Reducer", state);

  switch (action.type) {
    case "ADD_STUDENT":
      // console.log("Add User", action.payload);

      return {
        ...state,
        students: [...state.students, action.payload],
      };

    case "DELETE_STUDENT":
      console.log("Delete User", action.payload);

      return {
        ...state,
        students: state.students.filter(student => student.id !== action.payload)
      };

    default:
      return state;
  }
};
