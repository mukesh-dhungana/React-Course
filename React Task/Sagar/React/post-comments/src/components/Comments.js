import React from "react";

const Comments = ({ comment, post, dispatch, editHandler, theme }) => {
  const deleteHandler = (commentId) => {
    dispatch({ type: "DELETE", commentId, postId: post.id });
  };

  return (
    <div className="commentWrapper">
      <div className="comment">
        <b>{comment.commenter} </b>
        <div className="commented">{comment.comment}</div>
      </div>
      <div className={theme === "light" ? "buttons" : "buttonsDark"}>
        <button className="edit" onClick={() => editHandler(comment)}>
          Edit
        </button>
        <button onClick={() => deleteHandler(comment.id)} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Comments;
