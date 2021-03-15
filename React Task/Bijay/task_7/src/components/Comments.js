import React from "react";
import "./Styles/Comments.css";

const Comments = ({comment}) => {

    console.log('Comment Section', comment);

  return (
    <div className="comments">
      <div className="comment-title">
        <p>{comment.comment}</p>
      </div>
      <div className="comment-details">
        <div className="comment">
          <p>
            <i class="fas fa-user"></i> {comment.comment_by}
          </p>
          <p>
            <i class="fas fa-calendar-alt"></i> {comment.commented_at}
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
