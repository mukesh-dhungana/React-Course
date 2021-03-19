import React, { useState } from "react";
import "./post.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { CardContent } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Comment from "./Comment";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

function Post({ post: { id, title, postedDate, postComments }, dispatch }) {
  const [value, setValue] = useState("");
  const [editValue, setEditValue] = useState({});

  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "Add",
      payload: {
        commentData: {
          id: 5,
          comment: value,
          commenter: "Pariskrit",
          commentedDate: "14 march 2021",
        },
        postId: id,
      },
    });
    setValue("");
  };

  const handleDelete = (commentId) => {
    dispatch({ type: "Delete", payload: { postId: id, commentId } });
  };

  const handleEdit = (comment, commentId) => {
    setEditValue({ commentId, postId: id, value: comment });
    setOpen(true);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    setOpen(false);
    dispatch({
      type: "Update",
      payload: editValue,
    });
  };

  return (
    <Card className="post">
      <CardHeader
        className="post__header"
        title={title}
        subheader={postedDate}
      />
      <CardContent>
        <h3>Comments</h3>
        <form onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            className="input"
            label="Comment..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
        {postComments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </CardContent>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form className="modal__content" onSubmit={handleEditSubmit}>
            <h2 id="transition-modal-title">Edit</h2>
            <TextField
              id="standard-basic"
              className="input"
              label="Comment..."
              value={editValue.value}
              onChange={(e) =>
                setEditValue({ ...editValue, value: e.target.value })
              }
            />
          </form>
        </Fade>
      </Modal>
    </Card>
  );
}

export default Post;
