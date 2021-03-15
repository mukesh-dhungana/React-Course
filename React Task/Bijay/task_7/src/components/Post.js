import React from "react";
import Comments from "./Comments";
import "./Styles/Post.css";

const Post = ({post, dispatch}) => {
    const comments = post.comments

    const deleteComment = (id) => {
        console.log('Deleted', id);
        dispatch({
            type: 'DELETE_COMMENT',
            payload: {
                postId: post.user_id,
                commentId: id
            }
        })
    }
    
    console.log('Comments', comments);
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-heading">
          <h4>{post.title}</h4>
        </div>
        <div className="post-details">
          <p className="post-user">
            <i className="fas fa-user"></i>{post.user_name}
          </p>
          <p className="post-date">
            <i className="fas fa-calendar-alt"></i> {post.created_at}
          </p>
        </div>
      </div>
      <hr />
      <div className="comments-section">
        {/* <Comments comments={comments}/> */}
        {comments.map((comment) => (
            <Comments comment={comment} deleteComment={deleteComment} />
        ))}
      </div>
    </div>
  );
};

export default Post;
