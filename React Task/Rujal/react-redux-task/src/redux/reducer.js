import * as actionType from './actionTypes'

const initialState = {
    users: [],
    isFetching: false,
    userDetail: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_REQUEST:
            return {
                ...state,
                isFetching: true
            }

        case actionType.FETCH_SUCCESS:
            return {
                ...state,
                isFetcing: false,
                users: action.payload
            }

        case actionType.FETCH_FAILURE:
            return {
                ...state,
                isFetching: false
            }
        
        case actionType.DETAIL_REQUEST:
            return{
                ...state,
                isFetching:true
            }
        
        case actionType.DETAIL_SUCCESS:
            return{
                ...state,
                isFetching:false,
                userDetail:action.payload
            }

        case actionType.DETAIL_FAILURE:
            return{
                ...state,
                isFetching:false
            }
        default: return state
    }
}

export default reducer