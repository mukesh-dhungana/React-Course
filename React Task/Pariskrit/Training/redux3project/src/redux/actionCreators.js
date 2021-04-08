import { ADD_COMMENT, DELETE_COMMENT, UPDATE_COMMENT } from "./actionTypes";

export const addComment = ({ commentData, postId }) => {
  return { type: ADD_COMMENT, payload: { commentData, postId } };
};

export const deleteComment = ({ postId, commentId }) => ({
  type: DELETE_COMMENT,
  payload: { postId, commentId },
});

const updateComment = ({ postId, commentId, comment }) => ({
  type: UPDATE_COMMENT,
  payload: { postId, commentId, comment },
});

export const addCommentCreator = (commentData) => {
  return addComment(commentData);
};

export const deleteCommentCreator = (commentData) => {
  return deleteComment(commentData);
};

export const updateCommentCreator = (commentData) => {
  return updateComment(commentData);
};
