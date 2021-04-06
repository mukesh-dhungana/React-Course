import React from "react";
import Post from "./Post";
import "./allposts.css";
import { useSelector } from "react-redux";

function AllPosts({ handleThemeChange }) {
  const posts = useSelector((state) => state.posts);

  return posts.map((post) => <Post key={post.id} post={post} />);
}

export default React.memo(AllPosts);
