import {
    Avatar,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import ImageIcon from "@material-ui/icons/Image";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { adddComment, removeComment } from "../../redux/action";
import Modal from "../Modal/Modal";

const useStyles = makeStyles((theme) => ({
    listItem: {
        display: "flex",
        width: "100%",
    },
    deleteIcon: {
        color: "#ba000d",
    },
    inputField: {
        padding: "8px",
        marginRight: "5px",
        borderRadius: "5px",
        outline: "none",
        border: "1px solid gray",
    },
}));

function Comment({ comments, postId }) {
    const [showModal, setshowModal] = useState(false);
    const [commentId, setCommentId] = useState(null);
    const [comment, setComment] = useState("");

    const dispatch = useDispatch();

    const classes = useStyles();

    const handleCommentDelete = (commentId) => {
        dispatch(removeComment(+postId, commentId));
    };

    const handleEditComment = (id, oldcomment) => {
        setshowModal(true);
        setCommentId(id);
        setComment(oldcomment);
    };
    const handleSubmitComment = (e) => {
        e.preventDefault();
        e.target.comment.value.length &&
            dispatch(adddComment(+postId, e.target.comment.value, "Jack Ma"));
        e.target.reset();
    };
    console.log("rendered at comment");

    return (
        <div>
            <List>
                <form onSubmit={handleSubmitComment}>
                    <input
                        className={classes.inputField}
                        type="text"
                        name="comment"
                        placeholder="enter comment"
                    />
                    <button className="button" type="submit">
                        Add comment
                    </button>
                </form>
                {comments?.map(({ id, comment, commenter, commentedDate }) => (
                    <ListItem key={id} className={classes.listItem}>
                        <div
                            style={{
                                width: "500px",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={`By ${commenter}-${commentedDate}`}
                                secondary={comment}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "space-between",
                            }}
                        >
                            <IconButton
                                aria-label="delete"
                                color="primary"
                                onClick={() => handleEditComment(id, comment)}
                            >
                                <EditIcon />
                            </IconButton>
                            <IconButton
                                className={classes.deleteIcon}
                                aria-label="delete"
                                onClick={() => handleCommentDelete(id)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </ListItem>
                ))}
            </List>
            {showModal && (
                <Modal
                    open={showModal}
                    onClick={() => setshowModal(false)}
                    postId={postId}
                    commentId={commentId}
                    comment={comment}
                />
            )}
        </div>
    );
}

export default Comment;
