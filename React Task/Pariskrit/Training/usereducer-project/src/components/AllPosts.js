import React, { useReducer } from "react";
import { initialState, reducer } from "../useReducer/useReducer";
import Post from "./Post";
import "./allposts.css";

function AllPosts({ handleThemeChange }) {
  const [{ posts }, dispatch] = useReducer(reducer, initialState);
  console.log("allposts");
  return (
    <>
      <label class="switch">
        <input type="checkbox" onChange={handleThemeChange} />
        <span class="slider round"></span>
      </label>
      {posts.map((post) => (
        <Post key={post.id} post={post} dispatch={dispatch} />
      ))}
    </>
  );
}

export default React.memo(AllPosts);
