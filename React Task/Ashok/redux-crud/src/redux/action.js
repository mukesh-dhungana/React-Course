import { REMOVE_COMMENT, ADD_COMMENT, EDIT_COMMENT } from "./actionTypes";

export const removeComment = (postId, commentId) => ({
  type: REMOVE_COMMENT,
  payload: { postId, commentId },
});

export const adddComment = (postId, comment, commenter) => ({
  type: ADD_COMMENT,
  payload: {
    postId,
    comment,
    commenter,
  },
});

export const editComment = (postId, commentId, comment) => ({
  type: EDIT_COMMENT,
  payload: {
    postId,
    commentId,
    comment,
  },
});
