import React from 'react'

function Comment({ id, comment, dispatch, postId, editComment }) {
    return (
        <li>
            {comment}&nbsp;&nbsp;
            <button
                style={{ background: "darkred" }}
                onClick={() => {
                    dispatch({ type: "DELETE_COMMENT", postId, commentId: id })
                }}
            >Delete</button>
            <button
                style={{ background: "darkred" }}
                onClick={() => editComment(id)}
            >Edit</button>
        </li>

    )
}

export default Comment
