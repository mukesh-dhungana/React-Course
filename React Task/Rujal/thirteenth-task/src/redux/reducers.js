import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from './actions'

const initialState = {
    data: [],
    isFetching: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            }

        default: return state
    }
}

export default reducer;