import React, { useReducer, useState } from "react";
import "./Main.css";
import Form from "./Post";
import useToggle from "./useToggle";

const iState = {
  posts: [
    {
      id: 1,
      title: "First Title",
      postedBy: "John",
      postedDate: new Date(),
      imgUrl:
        "https://images.unsplash.com/photo-1597926661974-69a26ffa0f08?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80",
      postComments: [
        {
          id: 1,
          comment: "First Comment",
          commenter: "ABC",
          commentedDate: new Date(),
        },
        {
          id: 2,
          comment: "Second Comment",
          commenter: "DEF",
          commentedDate: new Date(),
        },
        {
          id: 3,
          comment: "Third Comment",
          commenter: "GHI",
          commentedDate: new Date(),
        },
      ],
    },
    {
      id: 2,
      title: "Second Title",
      postedBy: "King",
      postedDate: new Date(),
      imgUrl:
        "https://images.unsplash.com/photo-1570327920356-9d2cdf21020f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      postComments: [
        {
          id: 1,
          comment: "Second First Comment",
          commenter: "Second ABC",
          commentedDate: new Date(),
        },
        {
          id: 2,
          comment: "Second Second Comment",
          commenter: "Second DEF",
          commentedDate: new Date(),
        },
        {
          id: 3,
          comment: "Second Third Comment",
          commenter: "Second GHI",
          commentedDate: new Date(),
        },
      ],
    },
    {
      id: 3,
      title: "Third Title",
      postedBy: "Queen",
      postedDate: new Date(),
      imgUrl:
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=827&q=80",
      postComments: [
        {
          id: 1,
          comment: "Third First Comment",
          commenter: "Third ABC",
          commentedDate: new Date(),
        },
        {
          id: 2,
          comment: "Third Second Comment",
          commenter: "Third DEF",
          commentedDate: new Date(),
        },
        {
          id: 3,
          comment: "Third Third Comment",
          commenter: "Third GHI",
          commentedDate: new Date(),
        },
      ],
    },
  ],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
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
    case "ADD":
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
    case "EDIT":
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

function Main() {
  const [state, dispatch] = useReducer(reducer, iState);
  const useTheme = useToggle();

  return (
    <div className="App">
      {useTheme}
      {state.posts.map((x, i) => {
        return (
          <div className="data" key={i}>
            <Form dispatch={dispatch} postId={x.id} x={x} />
          </div>
        );
      })}
    </div>
  );
}

export default Main;
