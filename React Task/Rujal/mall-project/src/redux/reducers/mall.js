import { shuffle } from '../../Components/Shuffle'
import * as actionType from '../actionType'

const initialInit = {
    malls: [],
    loading: false,
    editMode: false
}

const malls = (state = initialInit, action) => {
    switch (action.type) {
        
        case "LOCATION_CHANGE":
            return {
                ...state,
                malls: []
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
                malls: shuffle([...state.malls, action.payload])
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


        default: return state
    }

}

export default malls