import React from "react";
import Comments from "./Comments";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-heading">
          <h4>Hello this is post Header</h4>
        </div>
        <div className="post-details">
          <p className="post-user">
            <i class="fas fa-user"></i>Bijay
          </p>
          <p className="post-date">
            <i class="fas fa-calendar-alt"></i> 15th March, 2021
          </p>
        </div>
      </div>
      <hr />
      <div className="comments-section">
        <Comments />
        <Comments />
        <Comments />
        <Comments />
      </div>
    </div>
  );
};

export default Post;
