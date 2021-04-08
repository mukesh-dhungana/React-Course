// import {studentList} from '../data'

export const studentListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return {
        ...state,
        students: [...state.students, action.payload],
      };

    case "DELETE_STUDENT":
      return {
        ...state,
        students: state.students.filter(
          student => student.id !== action.payload
        ),
      };

    case "EDIT_STUDENT":
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
