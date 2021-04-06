export const ADD_COMMENT = "ADD_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"
export const UPDATE_COMMENT = "UPDATE_COMMENT"

export const addComment = payload => dispatch => {
    dispatch({ type: ADD_COMMENT, payload })
}

export const deleteComment = payload => dispatch => {
    dispatch({ type: DELETE_COMMENT, payload })
}

export const updateComment = payload => dispatch => {
    dispatch({ type: UPDATE_COMMENT, payload })
}