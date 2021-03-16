import React, { useState } from "react";
import Modal from "./Modal";
import "./Styles/Comments.css";

const Comments = ({ comment, deleteComment }) => {
  // const ref = React.useRef(null);
  // console.log('Comment Section', comment);
  // const showModal = () => {
  //   console.log("Modal Shown");
  //   setModal(true);
  // };

  const activeInput = id => {
    // document.getElementById('focus-me').focus();
    setIsInput(!isInput);
  
   
    // ref.current.focus();
    // console.log(ref.current.id);
    console.log("Comment Id", id);
  };

  const toggleModal = () => {
    console.log("Clicked");
    setModal(false);
  };

  const editComment = (e) => {
    console.log(e.target)
    setNewComment(e.target.value)
  }

  const [modal, setModal] = useState(false);
  const [isInput, setIsInput] = useState(true);
  const [newComment, setNewComment] = useState(comment.comment)

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
          <input
            type="text"
            id={`focus-me`}
            value={newComment}
            disabled={isInput}
            autoFocus
            onChange={(e)=> editComment(e)}
          />
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
              {isInput ? <i
                onClick={(e) => activeInput(e)}
                className="fas fa-user-edit edit"
              ></i> : <i onClick={(e) => activeInput(e)} class="fas fa-check-circle"></i>}
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
