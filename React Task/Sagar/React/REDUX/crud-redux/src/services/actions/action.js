import {
  SHOW_DATA,
  DELETE_COMMENT,
  ADD_COMMENT,
  EDIT_COMMENT,
  UPDATE_COMMENT,
} from "./actionTypes";

export const showData = (data) => {
  return {
    type: SHOW_DATA,
    data: data,
  };
};

export const deleteComment = (pId, cId) => {
  return {
    type: DELETE_COMMENT,
    payloads: {
      pId,
      cId,
    },
  };
};

export const addComment = (pId, comment, comments) => {
  console.log(Math.max(...comments.map((x) => x.id)) + 1);
  return {
    type: ADD_COMMENT,
    payloads: {
      id: Math.max(...comments.map((x) => x.id)) + 1,
      comment: comment,
      commenter: "New User",
      commentedDate: new Date(),
    },
    pId,
  };
};

export const updateComment = (pId, value, valueDetail) => {
  return {
    type: UPDATE_COMMENT,
    payloads: {
      ...valueDetail,
      comment: value,
    },
    pId,
  };
};
