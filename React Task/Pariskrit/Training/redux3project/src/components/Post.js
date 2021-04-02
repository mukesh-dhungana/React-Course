import React, { useState } from "react";
import "./post.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Button, CardContent } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Comment from "./Comment";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useDispatch } from "react-redux";
import {
  addCommentCreator,
  deleteCommentCreator,
  updateCommentCreator,
} from "../redux/actionCreators";
import Avatar from "@material-ui/core/Avatar";

function Post({ post: { id, title, postedDate, postComments } }) {
  const [comment, setComment] = useState("");
  const [editValue, setEditValue] = useState({});
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [onFocus, setFocus] = useState(false);

  console.log("rendered post");
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addCommentCreator({
        commentData: {
          id: new Date().getTime(),
          comment,
          commenter: "Pariskrit",
          commentedDate: "25 March 2021",
        },
        postId: id,
      })
    );

    setComment("");
  };

  const handleDelete = (commentId) => {
    dispatch(deleteCommentCreator({ postId: id, commentId }));
  };

  const handleEdit = (comment, commentId) => {
    setEditValue({ commentId, postId: id, comment });
    setModalOpen(true);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    setModalOpen(false);

    dispatch(updateCommentCreator(editValue));
  };

  return (
    <Card className="post">
      <CardHeader
        className="post__header"
        title={title}
        avatar={
          <Avatar aria-label="recipe" className="card__avatar">
            R
          </Avatar>
        }
        subheader={postedDate}
      />
      <CardContent>
        <h3>Comments</h3>
        <form className="comment__form" onSubmit={handleSubmit}>
          <div className="comment__form__top">
            <Avatar className="comment__formavatar">S</Avatar>
            <TextField
              id="outlined-multiline-static"
              label="Add Your Comment..."
              multiline
              rows={2}
              variant="outlined"
              value={comment}
              fullWidth
              onFocus={() => setFocus(true)}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          {onFocus && (
            <div className="comment__form__down">
              <Button
                variant="contained"
                color="primary"
                className="commentform__button"
                type="submit"
              >
                Submit
              </Button>
            </div>
          )}
        </form>

        <Comment
          comments={showMore ? postComments : [postComments[0]]}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <p className="show__more" onClick={() => setShowMore(!showMore)}>
          {postComments.length - 1 === 0
            ? ""
            : showMore
            ? "Hide Comments"
            : `View ${postComments.length - 1} more comments`}
        </p>
      </CardContent>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpen}>
          <form className="modal__content" onSubmit={handleEditSubmit}>
            <h2 id="transition-modal-title">Edit</h2>
            <TextField
              id="standard-basic"
              className="input"
              label="Comment..."
              value={editValue.comment}
              onChange={(e) =>
                setEditValue({ ...editValue, comment: e.target.value })
              }
            />
          </form>
        </Fade>
      </Modal>
    </Card>
  );
}

export default Post;
