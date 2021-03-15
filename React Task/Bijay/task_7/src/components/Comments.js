import React from "react";
import "./Comments.css";

const Comments = () => {
  return (
    <div className="comments">
      <div className="comment-title">
        <p>This is Comment title</p>
      </div>
      <div className="comment-details">
        <div className="comment">
          <p>
            <i class="fas fa-user"></i> Beezay
          </p>
          <p>
            <i class="fas fa-calendar-alt"></i> 15th March, 2020
          </p>
        </div>
        <div className="comment-action">
            <p className="edit"><i class="fas fa-user-edit"></i></p>
            <p className="delete"><i class="fas fa-trash-alt"></i></p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
