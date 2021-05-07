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
        students: state.students.filter(
          student => student.id !== action.payload
        ),
      };

    case "EDIT_STUDENT":
      console.log("Edit Student", action.payload);
      return {
        ...state,
        students: state.students.map(student =>
          student.id === action.payload.studentId
            ? action.payload.edited
            : student
        ),
      };

    default:
      return state;
  }
};
