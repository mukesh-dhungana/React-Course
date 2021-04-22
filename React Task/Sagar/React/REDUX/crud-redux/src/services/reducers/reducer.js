import {
  SHOW_DATA,
  DELETE_COMMENT,
  ADD_COMMENT,
  EDIT_COMMENT,
  UPDATE_COMMENT,
} from "../actions/actionTypes";

const iState = {
  posts: [],
};

const reducer = (state = iState, action) => {
  switch (action.type) {
    case SHOW_DATA:
      return {
        ...state,
        posts: action.data,
      };

    case DELETE_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payloads.pId
            ? {
                ...post,
                postComments: post.postComments.filter(
                  (comment) => comment.id !== action.payloads.cId
                ),
              }
            : post
        ),
      };

    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.pId
            ? {
                ...post,
                postComments: [action.payloads, ...post.postComments],
              }
            : post
        ),
      };

    case UPDATE_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.pId
            ? {
                ...post,
                postComments: [
                  ...post.postComments.filter(
                    (comment) => comment.id !== action.payloads.id
                  ),
                  action.payloads,
                ].sort((a, b) => a.id - b.id),
              }
            : post
        ),
      };

    default:
      return state;
  }
};

export default reducer;
