import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./type";

export const AddTodo = addData => ({ type: ADD_TODO, addData });

export const DeleteTodo = id => ({
  type: DELETE_TODO,
  id,
});

export const EditTodo = ({ editData, id }) => ({
  type: EDIT_TODO,
  editData,
  id,
});
