// import initialState from '../store'

const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

export const initalState = {
    posts: [
      {
        user_id: 1,
        title: "First Post",
        comments: [
          {
            id: 1,
            comment: "Post 1 Comment 1",
            comment_by: "Rujal Sapkota",
            commented_at: "14th March, 2021",
          },
          {
            id: 2,
            comment: "Post 1 Comment 2",
            comment_by: "Mukesh Dhungana",
            commented_at: "13th March, 2021",
          },
          {
            id: 3,
            comment: "Post 1 Comment 3",
            comment_by: "Pariskrit Moktan",
            commented_at: "16th March, 2021",
          },
        ],
        user_name: "Beezay Bohora",
        created_at: "13 March, 2021",
      },
      {
        user_id: 2,
        title: "Second Post",
        comments: [
          {
            id: 1,
            comment: "Post 2 Comment 1",
            comment_by: "Beezay Bohora",
            commented_at: "14th March, 2021",
          },
          {
            id: 2,
            comment: "Post 2 Comment 2",
            comment_by: "Raj Chaudhary",
            commented_at: "15th March, 2021",
          },
        ],
        user_name: "Rujal sapkota",
        created_at: "14 March, 2021",
      },
      {
        user_id: 3,
        title: "Third Post",
        comments: [
          {
            id: 1,
            comment: "Post 3 Comment 1",
            comment_by: "Rujal Sapkota",
            commented_at: "13th March, 2021",
          },
          {
            id: 2,
            comment: "Post 3 Comment 2",
            comment_by: "Sagar TS",
            commented_at: "12th March, 2021",
          },
        ],
        user_name: "Raj Chaudhary",
        created_at: "12 March, 2021",
      },
      {
        user_id: 4,
        title: "Fourth Post",
        comments: [
          {
            id: 1,
            comment: "Post 4 Comment 1",
            comment_by: "Raj Chaudhary",
            commented_at: "15th March, 2021",
          },
          {
            id: 2,
            comment: "Post 4 Comment 2",
            comment_by: "Pariskrit Moktan",
            commented_at: "11th March, 2021",
          },
        ],
        user_name: "Sagar TS",
        created_at: "10 March, 2021",
      },
      {
        user_id: 5,
        title: "Fifth Post",
        comments: [
          {
            id: 1,
            comment: "Post 5 Comment 1",
            comment_by: "Beezay Bohora",
            commented_at: "15th March, 2021",
          },
          {
            id: 2,
            comment: "Post 5 Comment 2",
            comment_by: "Rujal Sapkota",
            commented_at: "16th March, 2021",
          },
        ],
        user_name: "Pariskrit Moktan",
        created_at: "15 March, 2021",
      },
    ],
  };

export const addComment = newComment => dispatch => {
  dispatch({
    type: ADD_COMMENT,
    payload: newComment,
  });
};

export const deleteComment = delComment => dispatch => {
  dispatch({
    type: DELETE_COMMENT,
    payload: delComment,
  });
};

const postReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        posts: [
          ...state.posts.map(post =>
            post.user_id === action.payload.postId ? {
              ...post,
              comments: [action.payload.comment, ...post.comments]
            } : post
          ),
        ],
      };
    case DELETE_COMMENT:
        console.log(action.payload, state);
      return {
        ...state,
        posts: [
          ...state.posts.map(post =>
            post.user_id === action.payload.postId
              ? {
                  ...post,
                  comments: post.comments.filter(
                    comment => comment.id !== action.payload.commentId
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

export default postReducer;
