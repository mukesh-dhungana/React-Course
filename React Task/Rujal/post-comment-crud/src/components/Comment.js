import React from 'react'

function Comment(props) {
    return (
        <div className="comment">
            <h3>{props.comment}</h3>
            <button onClick={props.deleteComment}>Delete</button>
            <button onClick={props.editComment}>Edit</button>
        </div>
    )
}

export default Comment
