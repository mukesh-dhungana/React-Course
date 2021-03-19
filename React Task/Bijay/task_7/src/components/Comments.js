import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import "./Styles/Comments.css";

const Comments = ({ comment, deleteComment }) => {
  const inputRef = React.useRef();
  const [modal, setModal] = useState(false);
  const [disableInput, setDisableInput] = useState(true);
  const [newComment, setNewComment] = useState(comment.comment);
  // console.log('Comment Section', comment);
  // const showModal = () => {
  //   console.log("Modal Shown");
  //   setModal(true);
  // };

  console.log("comment", newComment);
  useEffect(() => {
    // setDisableInput(true);
    if (!disableInput) {
      inputRef.current.focus();
    }

    // setNewComment(comment.comment)
  }, [disableInput]);

  const activeInput = id => {
    // document.getElementById('focus-me').focus();
    if (disableInput) {
      setDisableInput(false);
    }

    // ref.current.focus();
    // console.log(ref.current.id);
  };

  const toggleModal = () => {
    console.log("Clicked");
    setModal(false);
  };

  const editComment = e => {
    e.preventDefault();
    console.log(e.target.comment.value);
    setNewComment(e.target.name.value);
    // disableInput ? setDisableInput(!disableInput) : setDisableInput(false)
    setDisableInput(!disableInput);
  };

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
        <div className="comment-input">
          <form onSubmit={editComment}>
            <input
              type="text"
              id={`focus-me`}
              name="comment"
              value={newComment}
              disabled={disableInput}
              autoFocus
              onChange={e => setNewComment(e.target.value)}
              ref={inputRef}
              onBlur={() => setDisableInput(!disableInput)}
            />
          </form>
        </div>
        {/* <div className="comment-title">
          <p>{comment.comment}</p>
        </div> */}
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
              {disableInput ? (
                <i
                  onClick={e => activeInput(e)}
                  className="fas fa-user-edit edit"
                ></i>
              ) : (
                <i
                  onClick={e => editComment(e)}
                  class="fas fa-check-circle tick"
                ></i>
              )}
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
