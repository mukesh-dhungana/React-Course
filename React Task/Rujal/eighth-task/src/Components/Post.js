import React from 'react'
import Comment from './Comment'

const Post = React.memo(({ id, title, comments, dispatch }) => {
    const [comment, setComment] = React.useState('')
    const [editMode, setEditMode] = React.useState(false)
    const [commentDetail, setDetail] = React.useState({})

    const getId = () => comments.reduce((a, c) => a > c.id ? a : c.id, 0) + 1

    const addComment = () => {
        dispatch({ type: "ADD_COMMENT", postId: id, payload: { id: getId(), comment: comment } })
    }

    const editComment = (id) => {
        setEditMode(true)
        const detail = comments.find(x => x.id === id)
        setComment(detail.comment)
        setDetail(detail)
    }

    const updateComment = () => {
        dispatch({ type: "UPDATE_COMMENT", postId: id, payload: { ...commentDetail, comment } })
        setEditMode(false)
    }

    const submitForm = (e) => {
        e.preventDefault()
        editMode ? updateComment() : addComment()
        setComment('')
    }

    return (
        <div className="post">
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <div style={{ textAlign: "center" }}>
                <form onSubmit={submitForm}>
                    <input
                        type="text"
                        placeholder="ADD COMMENT"
                        onChange={(e) => setComment(e.target.value)}
                        value={comment}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <ul>
                {comments.sort((a, b) => b.id - a.id).map(y => (
                    <Comment
                        key={y.id}
                        {...y}
                        dispatch={dispatch}
                        postId={id}
                        editComment={editComment}
                    />
                ))}
            </ul>
        </div>
    )
})

export default Post
