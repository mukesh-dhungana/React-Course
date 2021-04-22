import React, { useState } from "react";
import AddComment from "./AddComment";
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

  const addNewComment = (e,addedComment) => {
    e.preventDefault();
    console.log("Clicked=>", addedComment);
    console.log(comments.length);
    dispatch({
      type: "ADD_COMMENT",
      payload: {
        postId: post.user_id,
        comment: {
          id: comments.length + 1,
          comment: addedComment,
          comment_by: 'Mukesh Dhungana',
          commented_at: new Date().toLocaleDateString()
        }
      }
    })
    setAddComment(!addComment);
  };

  const addComments = () => {
    console.log("Add Comment");
    setAddComment(!addComment);
  };

  const notFocused =() => {
    console.log('Out Focus');
    setAddComment(!addComment);
  }

  const toggleModal = () => {
    console.log("Clicked");
    setModal(false);
  };

  const [modal, setModal] = useState(false);
  const [addComment, setAddComment] = useState(false);

  console.log("Comments", comments);
  return (
    <>
      {modal && <Modal toggleModal={toggleModal} />}
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
            <p className="add-comments">
              {addComment ? (
                <i onClick={addComments} class="fas fa-minus-circle"></i>
              ) : (
                <i onClick={addComments} class="fas fa-plus-circle"></i>
              )}
            </p>
          </div>
        </div>
        <hr />
        {addComment && <AddComment addNewComment={addNewComment} addComment={addComment} notFocused={notFocused} />}
        <div className="comments-section">
          {/* <Comments comments={comments}/> */}
          {comments.map(comment => (
            <Comments key={comment.id}comment={comment} deleteComment={deleteComment} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Post;
