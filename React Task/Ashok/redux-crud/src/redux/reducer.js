import { PostData } from "../utils/constant";
import { ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT } from "./actionTypes";

const initalState = {
  posts: PostData,
};

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      const date = new Date();
      return {
        ...state,
        posts: [
          ...state.posts.map((post) =>
            post.id === action?.payload?.postId
              ? {
                  ...post,
                  postComments: [
                    ...post.postComments,
                    {
                      id: Date.now(),
                      comment: action?.payload?.comment,
                      commenter: action.payload.commenter,
                      commentedDate: `${date.getUTCFullYear()}/${date.getUTCMonth()}/${date.getUTCDay()}`,
                    },
                  ],
                }
              : post
          ),
        ],
      };

    case EDIT_COMMENT:
      return {
        ...state,
        posts: [
          ...state.posts.map((post) =>
            post.id === action.payload.postId
              ? {
                  ...post,
                  postComments: [
                    ...post.postComments.map((commentItem) =>
                      commentItem.id === action.payload.commentId
                        ? {
                            ...commentItem,
                            comment: action.payload.comment,
                          }
                        : commentItem
                    ),
                  ],
                }
              : post
          ),
        ],
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        posts: [
          ...state.posts.map((post) =>
            post.id === action?.payload?.postId
              ? {
                  ...post,
                  postComments: post?.postComments?.filter(
                    (comment) => comment.id !== action?.payload?.commentId
                  ),
                }
              : post
          ),
        ],
      };

    default:
      return state;
  }
};
