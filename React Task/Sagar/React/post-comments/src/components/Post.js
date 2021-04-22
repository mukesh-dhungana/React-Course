import React from "react";
import Comments from "./Comments";

const Post = ({ dispatch, post, setEdit, edit,theme }) => {
  const [comment, setComment] = React.useState("");
  const [commentDetail, setCommentDetail] = React.useState({});

  const editHandler = (data) => {
    setComment(data.comment);
    setCommentDetail(data);
    setEdit(true);
  };

  const updateComment = () => {
    dispatch({
      type: "EDIT",
      postId: post.id,
      payload: {
        ...commentDetail,
        comment: comment,
      },
    });
    setEdit(false);
  };

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (edit) {
            updateComment();
          } else {
            dispatch({
              type: "SUBMIT",
              payload: {
                id:
                  post.postComments.reduce((a, c) => (a > c.id ? a : c.id), 0) +
                  1,
                comment: comment,
                commenter: "Default User",
                commentedDate: new Date(),
              },
              postId: post.id,
            });
          }
          setComment("");
        }}
      >
        <input
          className="commentBox"
          type="text"
          placeholder="Write a comment..."
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <input className={theme === "light" ? "submitInput" : "submitInputDark"} type="submit" value="Comment" />
      </form>

      <div className="comments">
        {post.postComments
          .sort((a, b) => b.id - a.id)
          .map((comment) => (
            <Comments
              key={comment.id}
              comment={comment}
              setComment={setComment}
              post={post}
              dispatch={dispatch}
              setEdit={setEdit}
              editHandler={editHandler}
              theme={theme}
            />
          ))}
      </div>
    </>
  );
};

export default Post;
