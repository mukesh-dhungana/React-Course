import * as actionType from '../actionType'

const initialInit = {
    malls: [],
    loading: false,
    editMode: false,
    searchText: ''
}

const malls = (state = initialInit, action) => {
    switch (action.type) {
        case actionType.LOCATION_CHANGE:
            return {
                ...state,
                editMode: false
            }
        case actionType.ADD_MALL_REQUEST:
            return {
                ...state,
                loading: true
            }

        case actionType.FETCH_MALL_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case actionType.FETCH_MALL_SUCCESS:

            return {
                ...state,
                loading: false,
                malls: action.payload
            }

        case actionType.FETCH_MALL_FAILURE:
            return {
                ...state,
                loading: false
            }

        case actionType.DELETE_MALL_REQUEST:
            return {
                ...state,
                loading: true
            }

        case actionType.DELETE_MALL_SUCCESS:
            return {
                ...state,
                malls: state.malls.filter(mall => mall.id !== action.payload),
                loading: false
            }

        case actionType.EDIT_MALL:
            return {
                ...state,
                editMode: true,
            }

        case actionType.SEARCH_MALL:
            return {
                ...state,
                searchText: action.payload
            }

        default: return state
    }

}

export default malls