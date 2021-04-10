import { ADD_COMMENT, DELETE_COMMENT, UPDATE_COMMENT } from "./actionTypes";
export const initialState = {
  posts: [
    {
      id: 1,
      title: "Feeling Happy!!!!",
      postedDate: "15 March 2021",
      postComments: [
        {
          id: 1,
          comment: "woowwww",
          commenter: "ravi",
          commentedDate: "12 march 2021",
        },
        {
          id: 2,
          comment: "cool",
          commenter: "John",
          commentedDate: "10 february 2020",
        },
        {
          id: 3,
          comment: "nice",
          commenter: "Alex",
          commentedDate: "20 March 2021",
        },
      ],
    },
    {
      id: 2,
      title: "Notice For Students",
      postedDate: "12 February 2021",
      postComments: [
        {
          id: 1,
          comment: "Nooo",
          commenter: "ravi",
          commentedDate: "12 march 2021",
        },
        {
          id: 2,
          comment: "Exam Kaile Hunxa",
          commenter: "John",
          commentedDate: "10 february 2020",
        },
        {
          id: 3,
          comment: "Hait!!",
          commenter: "Alex",
          commentedDate: "20 Marhc 2021",
        },
      ],
    },
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        posts: [
          ...state.posts.map((post) =>
            post.id === action.payload.postId
              ? {
                  ...post,
                  postComments: [
                    action.payload.commentData,
                    ...post.postComments,
                  ],
                }
              : post
          ),
        ],
      };
    case DELETE_COMMENT:
      return {
        ...state,
        posts: [
          ...state.posts.map((post) =>
            post.id === action.payload.postId
              ? {
                  ...post,
                  postComments: post.postComments.filter(
                    (comment) => comment.id !== action.payload.commentId
                  ),
                }
              : post
          ),
        ],
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        posts: [
          ...state.posts.map((post) =>
            post.id === action.payload.postId
              ? {
                  ...post,
                  postComments: [
                    ...post.postComments.map((commentData) =>
                      commentData.id === action.payload.commentId
                        ? { ...commentData, comment: action.payload.comment }
                        : commentData
                    ),
                  ],
                }
              : post
          ),
        ],
      };
    default:
      return state;
  }
};
