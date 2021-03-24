import * as actionType from './actionTypes'


export const fetchData = () => async(dispatch) => {
    dispatch({ type: actionType.FETCH_REQUEST })
    await fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => dispatch({ type: actionType.FETCH_SUCCESS, payload: data }))
        .catch(err => {
            dispatch({ type: actionType.FETCH_FAILURE })
            console.log(err);
        })
}

export const fetchDetail = id => async(dispatch) => {
    dispatch({ type: actionType.DETAIL_REQUEST })
    await fetch("https://jsonplaceholder.typicode.com/users/" + id)
        .then(res => res.json())
        .then(data => dispatch({ type: actionType.DETAIL_SUCCESS, payload: data }))
        .catch(err => {
            dispatch({ type: actionType.DETAIL_FAILURE })
            console.log(err);
        })
}