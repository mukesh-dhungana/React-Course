import React from "react";
import "./Styles/Comments.css";

const Comments = ({comment, deleteComment}) => {

    // console.log('Comment Section', comment);

  return (
    <div className="comments">
      <div className="comment-title">
        <p>{comment.comment}</p>
      </div>
      <div className="comment-details">
        <div className="comment">
          <p>
            <i className="fas fa-user"></i> {comment.comment_by}
          </p>
          <p>
            <i className="fas fa-calendar-alt"></i> {comment.commented_at}
          </p>
        </div>
        <div className="comment-action">
            <p ><i className="fas fa-user-edit edit"></i></p>
            <p ><i onClick={() => deleteComment(comment.id)} className="fas fa-trash-alt delete"></i></p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
