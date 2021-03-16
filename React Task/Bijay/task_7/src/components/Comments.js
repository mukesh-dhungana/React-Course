import React, { useState } from "react";
import Modal from "./Modal";
import "./Styles/Comments.css";

const Comments = ({ comment, deleteComment }) => {
  // console.log('Comment Section', comment);
  const showModal = () => {
    console.log("Modal Shown");
    setModal(true);
  };

  const toggleModal = () => {
    console.log("Clicked");
    setModal(false);
  };

  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && (
        <Modal
          toggleModal={toggleModal}
          deleteComment={deleteComment}
          comment={comment}
        />
      )}
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
            <p>
              <i
                onClick={() => showModal()}
                className="fas fa-user-edit edit"
              ></i>
            </p>
            <p>
              <i
                onClick={() => {
                  deleteComment(comment.id);
                }}
                className="fas fa-trash-alt delete"
              ></i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
