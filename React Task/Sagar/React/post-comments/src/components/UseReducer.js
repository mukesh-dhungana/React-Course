import React, { useReducer, useState } from "react";
import { initialState } from "../constant/constant";
import Form from "./Post";
import "./style.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.postId
            ? {
                ...post,
                postComments: post.postComments.filter(
                  (comment) => comment.id !== action.commentId
                ),
              }
            : post
        ),
      };

    case "SUBMIT":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.postId
            ? {
                ...post,
                postComments: [action.payload, ...post.postComments],
              }
            : post
        ),
      };

    case "EDIT":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.postId
            ? {
                ...post,
                postComments: [
                  ...post.postComments.filter(
                    (comment) => comment.id !== action.payload.id
                  ),
                  action.payload,
                ].sort((a, b) => b.id - a.id),
              }
            : post
        ),
      };

    default:
      return state;
  }
};

function UseReducer({ theme }) {
  const [edit, setEdit] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className={theme === "light" ? "Container" : "ContainerDark"}>
        {state.posts.map((post) => (
          <div
            className={theme === "light" ? "wrapper" : "wrapperDark"}
            key={post.id}
          >
            <div className="user">{post.postedBy}</div>
            <img className="images" src={post.imgUrl} alt="Images" />
            <Form
              dispatch={dispatch}
              post={post}
              edit={edit}
              setEdit={setEdit}
              theme={theme}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UseReducer;
