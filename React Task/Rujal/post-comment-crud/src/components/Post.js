import React from 'react'
import { connect } from 'react-redux'
import { addComment, deleteComment, updateComment } from '../redux/action'
import Comment from './Comment'

function Post(props) {

    const getId = () => props.comments.reduce((a, c) => a > c.id ? a : c.id, 0) + 1
    
    const [comment, setComment] = React.useState('')
    const [editMode, setEditMode] = React.useState(false)
    const [commentDetail, setCommentDetail] = React.useState({})

    const editComment = (data) => {
        setEditMode(true)
        setCommentDetail(data)
        setComment(data.comment)
    }

    return (
        <div className="post">

            <h1>{props.title}</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                if (editMode) {
                    props.updateComment({ postId: props.id, comment: { ...commentDetail, comment } })
                    setCommentDetail({})
                    setEditMode(false)
                } else {
                    props.addComment({ postId: props.id, comment: { id: getId(), comment } })
                }
                setComment('')
            }}>
                <input
                    type="text"
                    placeholder="Enter Comment"
                    name="comment"
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                />
                <input type="submit" value="Submit" />
            </form>
            {
                props.comments.map(x => (
                    <Comment
                        {...x}
                        key={x.id}
                        deleteComment={() => props.deleteComment({ postId: props.id, commentId: x.id })}
                        editComment={() => editComment(x)}
                    />
                ))
            }
        </div>
    )
}

export default connect(null, { addComment, deleteComment, updateComment })(Post)
