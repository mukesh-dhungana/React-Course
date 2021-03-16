import React, { useState } from "react";
import Comments from "./Comments";
import Modal from "./Modal";
import "./Styles/Post.css";

const Post = ({ post, dispatch }) => {
  const comments = post.comments;

  const deleteComment = id => {
    console.log("Deleted", id);
    dispatch({
      type: "DELETE_COMMENT",
      payload: {
        postId: post.user_id,
        commentId: id,
      },
    });
  };

  const addComment = () => {
    setModal(true);
  };

  const toggleModal = () => {
    console.log("Clicked");
    setModal(false);
  };

  const [modal, setModal] = useState(false);

  console.log("Comments", comments);
  return (
    <>
      {modal && <Modal toggleModal={toggleModal}/>}
      <div className="post">
        <div className="post-header">
          <div className="post-heading">
            <h4>{post.title}</h4>
          </div>
          <div className="post-details">
            <p className="post-user">
              <i className="fas fa-user"></i>
              {post.user_name}
            </p>
            <p className="post-date">
              <i className="fas fa-calendar-alt"></i> {post.created_at}
            </p>
            <p className="add-comment">
              <i onClick={addComment} class="fas fa-plus-circle"></i>
            </p>
          </div>
        </div>
        <hr />
        <div className="comments-section">
          {/* <Comments comments={comments}/> */}
          {comments.map(comment => (
            <Comments comment={comment} deleteComment={deleteComment} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Post;
