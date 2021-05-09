import { ADD, EDIT, DELETE } from "../Actions/Types";

const initialState = {
  posts: [
    {
      id: 1,
      title: "Raj Chaudhary",
      postedBy: "King",
      postedDate: new Date(),
      postComments: [
        {
          id: 1,
          comment: "Smash",
          commenter: "Incrediable hulk",
          commentedDate: new Date(),
        },
        {
          id: 2,
          comment: "Smash",
          commenter: "Incrediable hulk",
          commentedDate: new Date(),
        },
        {
          id: 3,
          comment: "Smash",
          commenter: "Incrediable hulk",
          commentedDate: new Date(),
        },
        {
          id: 4,
          comment: "Smash",
          commenter: "Incrediable hulk",
          commentedDate: new Date(),
        },
      ],
    },
    {
      id: 2,
      title: "Minni",
      postedBy: "Princess",
      postedDate: new Date(),
      postComments: [
        {
          id: 1,
          comment: "Will of Fire",
          commenter: "Uzumaki Naruto",
          commentedDate: new Date(),
        },
        {
          id: 2,
          comment: "Language",
          commenter: "Captain America",
          commentedDate: new Date(),
        },
        {
          id: 3,
          comment: "Language",
          commenter: "Captain America",
          commentedDate: new Date(),
        },
        {
          id: 4,
          comment: "Language",
          commenter: "Captain America",
          commentedDate: new Date(),
        },
      ],
    },
    {
      id: 3,
      title: "Binni",
      postedBy: "Queen",
      postedDate: new Date(),
      postComments: [
        {
          id: 1,
          comment: "Love u 3000",
          commenter: "Iron man",
          commentedDate: new Date(),
        },
        {
          id: 2,
          comment: "Revenger",
          commenter: "Thor god of Thunder",
          commentedDate: new Date(),
        },
        {
          id: 3,
          comment: "Vengeance",
          commenter: "Vampire",
          commentedDate: new Date(),
        },
        {
          id: 4,
          comment: "Vengeance",
          commenter: "Vampire",
          commentedDate: new Date(),
        },
      ],
    },
  ],
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.postId
            ? {
                ...post,
                postComments: post.postComments.filter(
                  comment => comment.id !== action.commentId
                ),
              }
            : post
        ),
      };
    case ADD:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.postId
            ? {
                ...post,
                postComments: [...post.postComments, action.payload],
              }
            : post
        ),
      };
    case EDIT:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.postId
            ? {
                ...post,
                postComments: [
                  ...post.postComments.filter(x => x.id !== action.payload.id),
                  action.payload,
                ].sort((a, b) => a.id - b.id),
              }
            : post
        ),
      };

    default:
      return state;
  }
};
