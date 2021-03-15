export const initialState = {
    posts: [
        {
            id: 1, title: 'First Post', comments: [
                { id: 1, comment: 'Post 1 Comment 1' },
                { id: 2, comment: 'Post 1 Comment 2' }
            ]
        },
        {
            id: 2, title: 'Second Post', comments: [
                { id: 1, comment: 'Post 2 Comment 1' },
                { id: 2, comment: 'Post 2 Comment 2' }
            ]
        },
        {
            id: 3, title: 'Third Post', comments: [
                { id: 1, comment: 'Post 3 Comment 1' },
                { id: 2, comment: 'Post 3 Comment 2' }
            ]
        },

    ]
}

export const reducer = (state, action) => {
    const { postId, commentId, type, payload } = action
    switch (type) {
        case "ADD_COMMENT":

            return {
                ...state,
                posts: [
                    ...state.posts.map(post => post.id === postId ?
                        {
                            ...post,
                            comments: [payload, ...post.comments]
                        }
                        :
                        post
                    )
                ]

            }

        case "DELETE_COMMENT":

            return {
                ...state,
                posts: [
                    ...state.posts.map(post => post.id === postId ?
                        {
                            ...post,
                            comments: post.comments.filter(comment => comment.id !== commentId)
                        }
                        :
                        post
                    )
                ]
            }

        case "UPDATE_COMMENT":

            return {
                ...state,
                posts: [
                    ...state.posts.map(post => post.id === postId ?
                        {
                            ...post,
                            comments: [
                                ...post.comments.filter(comment => comment.id !== payload.id),
                                payload
                            ].sort((a, b) => b.id - a.id)
                        }
                        :
                        post
                    )
                ]
            }

        default: return state
    }
}