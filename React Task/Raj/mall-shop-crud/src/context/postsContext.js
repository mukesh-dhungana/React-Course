import React, { createContext, useReducer } from "react";
import { posts } from "../reducers/postReducer";

export const Posts = createContext();

const initialState = {
  posts: [],
};
export const PostsProvider = props => {
  const [state, dispatch] = useReducer(posts, initialState);
  const value = { state, dispatch };

  return <Posts.Provider value={value}>{props.children}</Posts.Provider>; // we place value(state, dispatch) in Auth and provide now if use useContext(Auth) can able to access state and dispatch
};
