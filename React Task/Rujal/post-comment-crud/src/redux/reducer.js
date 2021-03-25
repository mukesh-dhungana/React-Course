import { ADD_COMMENT, DELETE_COMMENT, UPDATE_COMMENT } from "./action"

const initialState = {
    posts: [
        {
            id: 1, title: "Post 1", comments: [
                { id: 1, comment: "P1 C1" },
                { id: 2, comment: "P1 C2" },
            ]
        },
        {
            id: 2, title: "Post 2", comments: [
                { id: 1, comment: "P2, C1" },
                { id: 2, comment: "P2 C2" }
            ]
        }
    ]
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(x => x.id === payload.postId ?
                    {
                        ...x,
                        comments: [...x.comments, payload.comment]
                    }
                    : x)
            }

        case DELETE_COMMENT:
            return {
                ...state,
                posts: state.posts.map(x => x.id === payload.postId ?
                    {
                        ...x,
                        comments: x.comments.filter(y => y.id !== payload.commentId)
                    }
                    : x)

            }

        case UPDATE_COMMENT:
            return {
                ...state,
                posts: state.posts.map(x => x.id === payload.postId ?
                    {
                        ...x,
                        comments: x.comments.map(y => y.id === payload.comment.id ? payload.comment : y)
                    }
                    : x)
            }

        default: return state
    }
}

export default reducer