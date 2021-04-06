import React from 'react'

function Comment(props) {
    return (
        <div className="comment">
            <div className="title">
                <h4>{props.comment}</h4>
            </div>
            <div className="buttons">
                <button onClick={props.deleteComment}>Delete</button>
                <button onClick={props.editComment}>Edit</button>
            </div>
        </div>
    )
}

export default Comment
