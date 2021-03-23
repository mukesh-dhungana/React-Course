export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
const requestData = () => {
    return {
        type: FETCH_DATA_REQUEST
    }
}

const successData = (payload) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload
    }
}

export const fetchData = () => async (dispatch) => {
    await dispatch(requestData())
    const ff = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await ff.json()
    dispatch(successData(data))
}