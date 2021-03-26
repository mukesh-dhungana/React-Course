import { ADD, DELETE, EDIT } from "./Types";

export const addData = ({ postId, payload }) => ({
  type: ADD,
  postId,
  payload,
});

export const deleteCmnt = data => ({
  type: DELETE,
  postId: data.postId,
  commentId: data.commentId,
});
export const editData = ({ postId, payload }) => ({
  type: EDIT,
  postId,
  payload,
});
