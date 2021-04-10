import React, { useState } from "react";

import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { editComment } from "../../redux/action";

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: "40%",
        backgroundColor: theme.palette.background.paper,
        outline: "none",
        boxShadow: theme.shadows[5],
        borderRadius: "10px",
        padding: theme.spacing(2, 4, 3),
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    inputField: {
        padding: "8px",
        width: "100%",
        borderRadius: "5px",
        outline: "none",
        border: "1px solid gray",
    },
}));
export default function SimpleModal({
    open,
    onClick,
    postId,
    commentId,
    comment,
}) {
    const [newcomment, setnewcomment] = useState(comment);
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClose = () => {
        onClick();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        newcomment.length &&
            dispatch(editComment(+postId, +commentId, newcomment));
        newcomment.length && handleClose();
    };
    console.log("rendered at model");

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.paper}>
                    <form onSubmit={handleSubmit}>
                        <input
                            className={classes.inputField}
                            type="text"
                            name="comment"
                            placeholder="enter comment"
                            value={newcomment}
                            onChange={(e) => setnewcomment(e.target.value)}
                        />
                        <br></br>
                        <button type="submit">Submit Comment</button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}
